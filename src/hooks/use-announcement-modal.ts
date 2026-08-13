import { useEffect, useState } from "react";
import { announcementModal } from "@/data/announcement";

const STORAGE_PREFIX = "dara-announcement-last-shown:";
const OPEN_DELAY_MS = 700;
const DAY_MS = 24 * 60 * 60 * 1000;

export function useAnnouncementModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!announcementModal.enabled) return;

    const now = Date.now();
    const start = new Date(announcementModal.startAt).getTime();
    const end = new Date(announcementModal.endAt).getTime();
    if (now < start || now > end) return;

    const storageKey = STORAGE_PREFIX + announcementModal.id;
    const lastShown = Number(localStorage.getItem(storageKey));
    const intervalMs = (announcementModal.repeatIntervalDays ?? 2) * DAY_MS;
    if (lastShown && now - lastShown < intervalMs) return;

    const timer = setTimeout(() => {
      setOpen(true);
      localStorage.setItem(storageKey, String(now));
    }, OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => setOpen(false);

  const onOpenChange = (next: boolean) => {
    if (next) {
      setOpen(true);
    } else {
      dismiss();
    }
  };

  return { open, onOpenChange, dismiss };
}
