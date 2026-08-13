import staffMeeting from "@/assets/gallery/staff-meeting.jpg";
import officeLadies from "@/assets/gallery/office-ladies.jpg";
import maleResource from "@/assets/gallery/male-resource.jpg";
import clientPortrait from "@/assets/gallery/client-portrait.jpg";
import consultationClean from "@/assets/gallery/consultation-clean.jpg";
import borrowSmartFlyer from "@/assets/gallery/flyer-borrow-smart.jpg";
import happyCustomerFlyer from "@/assets/gallery/flyer-happy-customer.jpg";
import marketWomenFlyer from "@/assets/gallery/flyer-market-women.jpg";
import officeImageFlyer from "@/assets/gallery/flyer-office-image.jpg";
import coverGraphic from "@/assets/gallery/logo-cover.jpg";
import logoOnStone from "@/assets/gallery/logo-stone.jpg";
import logoOnWood from "@/assets/gallery/logo-wood.jpg";
import logoOnBlue from "@/assets/gallery/logo-blue.jpg";

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
    src: borrowSmartFlyer,
    alt: "Dara Micro Credit promotional flyer: Borrow Smart, Borrow Clear",
  },
  {
    src: officeLadies,
    alt: "Dara Micro Credit staff assisting a colleague at her desk",
  },
  {
    src: happyCustomerFlyer,
    alt: "Dara Micro Credit promotional flyer: You got the business, we've got the funds",
  },
  {
    src: clientPortrait,
    alt: "A Dara Micro Credit client",
  },
  {
    src: marketWomenFlyer,
    alt: "Dara Micro Credit promotional flyer: Need a business loan?",
  },
  {
    src: maleResource,
    alt: "Dara Micro Credit relationship officers at the Achimota branch",
  },
  {
    src: officeImageFlyer,
    alt: "Dara Micro Credit promotional flyer: Get your loan approved swiftly, with no hassle",
  },
  {
    src: consultationClean,
    alt: "A loan consultation session with a Dara Micro Credit officer",
  },
  {
    src: coverGraphic,
    alt: "Dara Micro Credit logo cover graphic",
  },
  {
    src: logoOnStone,
    alt: "Dara Micro Credit logo",
  },
  {
    src: logoOnWood,
    alt: "Dara Micro Credit logo on a wood panel background",
  },
  {
    src: logoOnBlue,
    alt: "Dara Micro Credit logo on a blue background",
  },
];
