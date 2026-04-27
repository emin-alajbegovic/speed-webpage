import { loadFleetImages } from '@/lib/fleet-image-loader';
import Fleet from './Fleet';

export default function FleetWrapper() {
  const galleryImages = loadFleetImages();
  return <Fleet galleryImages={galleryImages} />;
}
