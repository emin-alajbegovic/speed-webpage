/**
 * Wraps a value that lives outside React — localStorage, the `<html>` class list,
 * scroll position — so components can read it with `useSyncExternalStore`.
 *
 * The alternative (mount, then setState from an effect) renders twice and shows the
 * server value for a frame first, which is what makes theme and locale flash on load.
 *
 * `read` runs on the client only, so it may touch browser globals freely.
 */
export function createBrowserStore<T>(read: () => T, serverValue: T) {
  const listeners = new Set<() => void>();

  return {
    subscribe(onStoreChange: () => void) {
      listeners.add(onStoreChange);
      // Keeps other tabs in sync; same-tab writes go through notify().
      window.addEventListener('storage', onStoreChange);
      return () => {
        listeners.delete(onStoreChange);
        window.removeEventListener('storage', onStoreChange);
      };
    },
    getSnapshot: read,
    getServerSnapshot: () => serverValue,
    /** Call after writing the underlying value so subscribers re-read it. */
    notify() {
      listeners.forEach(listener => listener());
    },
  };
}
