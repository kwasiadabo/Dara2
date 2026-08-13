import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { announcementModal } from "@/data/announcement";
import { useAnnouncementModal } from "@/hooks/use-announcement-modal";
import { cn } from "@/lib/utils";

export function AnnouncementModal() {
  const { open, onOpenChange, dismiss } = useAnnouncementModal();

  if (!announcementModal.enabled) return null;

  const { image, eyebrow, header, content, footer } = announcementModal;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-50 bg-ink/55 backdrop-blur-sm",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
          )}
        />
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 flex max-h-[88vh] w-[calc(100%-2rem)] max-w-[600px] -translate-x-1/2 -translate-y-1/2 flex-col",
            "overflow-hidden rounded-[1.75rem] bg-white shadow-[var(--shadow-soft-xl)] focus:outline-none",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-bottom-2",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          )}
        >
          <div className="overflow-y-auto">
            {image ? (
              <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-bg-soft">
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
              </div>
            ) : null}

            <div className="p-8 sm:p-10">
              {eyebrow ? <Eyebrow className="mb-5">{eyebrow}</Eyebrow> : null}

              <Dialog.Title className="text-[26px] font-extrabold leading-[1.15] tracking-tight text-ink sm:text-[30px]">
                {header}
              </Dialog.Title>
              <Dialog.Description className="mt-3.5 text-[16px] leading-relaxed text-ink-soft">
                {content}
              </Dialog.Description>

              {footer ? (
                <div className="mt-9 flex flex-col gap-3.5">
                  {footer.primaryAction || footer.secondaryAction ? (
                    <div className="flex flex-col gap-3.5 sm:flex-row">
                      {footer.primaryAction ? (
                        <Button
                          variant="primary"
                          size="lg"
                          className="flex-1"
                          onClick={dismiss}
                          asChild
                        >
                          <a href={footer.primaryAction.href}>{footer.primaryAction.label}</a>
                        </Button>
                      ) : null}
                      {footer.secondaryAction ? (
                        <Button
                          variant="outline"
                          size="lg"
                          className="flex-1"
                          onClick={dismiss}
                          asChild
                        >
                          <a href={footer.secondaryAction.href}>{footer.secondaryAction.label}</a>
                        </Button>
                      ) : null}
                    </div>
                  ) : null}
                  {footer.note ? (
                    <p className="text-center text-[13px] text-muted">{footer.note}</p>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>

          <Dialog.Close
            aria-label="Close announcement"
            className={cn(
              "absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200",
              image
                ? "bg-ink/40 text-white hover:bg-ink/60"
                : "bg-bg-soft text-ink-soft hover:bg-border hover:text-ink",
            )}
          >
            <X className="h-4.5 w-4.5" strokeWidth={2.25} />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
