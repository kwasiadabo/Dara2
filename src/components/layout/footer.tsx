import type { SVGProps } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { footerColumns, socialLinks, contactDetails } from "@/data/footer";
import { FacebookIcon, WhatsAppIcon } from "@/components/layout/social-icons";

const socialIcons: Record<string, React.ComponentType<SVGProps<SVGSVGElement>>> = {
  Facebook: FacebookIcon,
  WhatsApp: WhatsAppIcon,
};

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-4 lg:col-span-2">
            <Logo dark />
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-white/50">
              Fast, transparent micro-lending for Accra's entrepreneurs,
              traders and salaried workers.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-white/40">
                {column.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-white/40">
              Get In Touch
            </h4>
            <ul className="mt-4 flex flex-col gap-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                <span className="text-[14px] text-white/60">{contactDetails.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="text-[14px] text-white/60 transition-colors hover:text-white"
                >
                  {contactDetails.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                <a
                  href={contactDetails.phoneHref}
                  className="text-[14px] text-white/60 transition-colors hover:text-white"
                >
                  {contactDetails.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-[13px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dara Micro Credit. All rights reserved.</p>
          <p>Achimota, Accra – Ghana</p>
        </div>
      </Container>
    </footer>
  );
}
