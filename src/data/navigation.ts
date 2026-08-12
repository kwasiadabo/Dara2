export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Loans", href: "/#loans" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About Us", href: "/#about" },
  { label: "Resources", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];
