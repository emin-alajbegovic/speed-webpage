import { loadFleetImages } from '@/lib/fleet-image-loader';
import FleetClient from './FleetClient';

export default function FleetClientWrapper() {
  const galleryImages = loadFleetImages();
  return <FleetClient galleryImages={galleryImages} />;
}
