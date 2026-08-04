import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const INBOX = process.env.CONTACT_INBOX ?? 'info@spedition-begovac.com';
const FROM = process.env.CONTACT_FROM ?? 'Begovac Spedition <onboarding@resend.dev>';

/** Rough in-memory throttle. Good enough for a single-instance marketing site. */
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(t => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string
  );
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'rate_limited' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 });
  }

  // Honeypot: real users never fill a hidden field.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 160);
  const phone = clean(body.phone, 60);
  const company = clean(body.company, 160);
  const service = clean(body.service, 120);
  const message = clean(body.message, 4000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ error: 'validation' }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No mail provider wired up yet — tell the client so it can show direct contact details
    // instead of pretending the message was delivered.
    console.warn('[kontakt] RESEND_API_KEY is not set; enquiry was not delivered.', { name, email });
    return NextResponse.json({ error: 'not_configured' }, { status: 503 });
  }

  const rows: [string, string][] = [
    ['Ime', name],
    ['E-pošta', email],
    ['Telefon', phone || '—'],
    ['Podjetje', company || '—'],
    ['Storitev', service || '—'],
  ];

  const html = `
    <h2>Novo povpraševanje — spedition-begovac.com</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="background:#f1f5f9;font-weight:600">${k}</td><td>${escapeHtml(v)}</td></tr>`
        )
        .join('')}
    </table>
    <h3>Sporočilo</h3>
    <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: FROM,
      to: [INBOX],
      reply_to: email,
      subject: `Povpraševanje: ${name}${company ? ` (${company})` : ''}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error('[kontakt] Resend rejected the request', res.status, await res.text());
    return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
