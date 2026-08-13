import staffMeeting from "@/assets/images/dara images staff meeting.jpg";
import officeLadies from "@/assets/images/dara office ladies.jpg";
import maleResource from "@/assets/images/dara male resource.jpg";
import clientPortrait from "@/assets/brand/photo-client-portrait.jpg";
import consultationClean from "@/assets/brand/photo-consultation-clean.jpg";

export interface GalleryImage {
  src: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: staffMeeting,
    alt: "The Dara Micro Credit team during a staff meeting at the Achimota office",
  },
  {
    src: officeLadies,
    alt: "Dara Micro Credit staff assisting a colleague at her desk",
  },
  {
    src: clientPortrait,
    alt: "A Dara Micro Credit client",
  },
  {
    src: maleResource,
    alt: "Dara Micro Credit relationship officers at the Achimota branch",
  },
  {
    src: consultationClean,
    alt: "A loan consultation session with a Dara Micro Credit officer",
  },
];
