import staffMeeting from "@/assets/images/dara images staff meeting.jpg";
import officeLadies from "@/assets/images/dara office ladies.jpg";
import maleResource from "@/assets/images/dara male resource.jpg";
import clientPortrait from "@/assets/brand/photo-client-portrait.jpg";
import consultationClean from "@/assets/brand/photo-consultation-clean.jpg";
import borrowSmartFlyer from "@/assets/images/dara flyer.jpg";
import happyCustomerFlyer from "@/assets/images/dara happy customer.jpg";
import marketWomenFlyer from "@/assets/images/dara market women.jpg";
import officeImageFlyer from "@/assets/images/dara office image.jpg";
import coverGraphic from "@/assets/images/dara cover image.jpg";
import logoOnStone from "@/assets/images/dara capital logo .jpg";
import logoOnWood from "@/assets/images/dara woody image.jpg";
import logoOnBlue from "@/assets/images/logo-dara.jpeg";

export interface GalleryImage {
  src: string;
  alt: string;
  /** "contain" keeps flyers/graphics fully visible instead of cropping their text. Default "cover". */
  fit?: "cover" | "contain";
}

export const galleryImages: GalleryImage[] = [
  {
    src: staffMeeting,
    alt: "The Dara Micro Credit team during a staff meeting at the Achimota office",
  },
  {
    src: borrowSmartFlyer,
    alt: "Dara Micro Credit promotional flyer: Borrow Smart, Borrow Clear",
    fit: "contain",
  },
  {
    src: officeLadies,
    alt: "Dara Micro Credit staff assisting a colleague at her desk",
  },
  {
    src: happyCustomerFlyer,
    alt: "Dara Micro Credit promotional flyer: You got the business, we've got the funds",
    fit: "contain",
  },
  {
    src: clientPortrait,
    alt: "A Dara Micro Credit client",
  },
  {
    src: marketWomenFlyer,
    alt: "Dara Micro Credit promotional flyer: Need a business loan?",
    fit: "contain",
  },
  {
    src: maleResource,
    alt: "Dara Micro Credit relationship officers at the Achimota branch",
  },
  {
    src: officeImageFlyer,
    alt: "Dara Micro Credit promotional flyer: Get your loan approved swiftly, with no hassle",
    fit: "contain",
  },
  {
    src: consultationClean,
    alt: "A loan consultation session with a Dara Micro Credit officer",
  },
  {
    src: coverGraphic,
    alt: "Dara Micro Credit logo cover graphic",
    fit: "contain",
  },
  {
    src: logoOnStone,
    alt: "Dara Micro Credit logo",
    fit: "contain",
  },
  {
    src: logoOnWood,
    alt: "Dara Micro Credit logo on a wood panel background",
    fit: "contain",
  },
  {
    src: logoOnBlue,
    alt: "Dara Micro Credit logo on a blue background",
    fit: "contain",
  },
];
