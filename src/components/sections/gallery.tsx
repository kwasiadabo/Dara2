import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryImages } from "@/data/gallery";

export function Gallery() {
  const track = [...galleryImages, ...galleryImages];

  return (
    <section className="overflow-hidden bg-bg py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="A look inside Dara Micro Credit."
          description="Real moments from our Achimota office and the people we work with every day."
          align="center"
          className="mx-auto max-w-2xl"
        />
      </Container>

      <div
        className="group relative mt-16"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <div className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused]">
          {track.map((image, i) => (
            <div
              key={`${image.src}-${i}`}
              className="h-72 w-56 shrink-0 overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-soft-md)] sm:h-80 sm:w-64"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
