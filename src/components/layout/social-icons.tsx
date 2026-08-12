import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 9.5h2.5V6.2c-.43-.06-1.9-.2-3.62-.2-3.58 0-6.03 2.24-6.03 6.36v3.14H4v3.7h2.85V22h3.8v-2.8h2.85l.45-3.7h-3.3v-2.75c0-1.07.29-1.8 1.85-1.8Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <line x1="7.8" y1="10.5" x2="7.8" y2="16.2" />
      <circle cx="7.8" cy="7.6" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.6 16.2v-3.4c0-1.3.9-2.3 2.2-2.3 1.3 0 2 .9 2 2.3v3.4" />
      <line x1="11.6" y1="10.5" x2="11.6" y2="16.2" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.4 17.6 4 20l2.5-2.3A8 8 0 1 1 12 20a8 8 0 0 1-5.6-2.4Z" />
      <path d="M9 9.8c0 3 2.6 5.4 5.4 5.4.9 0 1-.6 1-1.1s-.1-.7-.5-1l-1.2-.9c-.3-.2-.6-.2-.9.1l-.4.5c-.2.2-.4.2-.7 0-.9-.5-1.8-1.4-2.3-2.3-.2-.3-.2-.5 0-.7l.5-.4c.3-.3.3-.6.1-.9L9.9 7.3c-.3-.4-.5-.5-1-.5-.5 0-1.1.1-1.1 1a5 5 0 0 0 1.2 2Z" />
    </svg>
  );
}
