export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Loans", href: "/#loans" },
  { label: "How It Works", href: "/#how-it-works" },
  {
    label: "About Us",
    href: "/#about",
    children: [
      { label: "About Us", href: "/#about" },
      { label: "Our Mission", href: "/#our-mission" },
      { label: "Our Vision", href: "/#our-vision" },
      { label: "Core Values", href: "/#core-values" },
    ],
  },
  { label: "Resources", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];
