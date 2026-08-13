import { useEffect, useState } from "react";
import { announcementModal } from "@/data/announcement";

const STORAGE_PREFIX = "dara-announcement-dismissed:";
const OPEN_DELAY_MS = 700;

export function useAnnouncementModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!announcementModal.enabled) return;

    const now = Date.now();
    const start = new Date(announcementModal.startAt).getTime();
    const end = new Date(announcementModal.endAt).getTime();
    if (now < start || now > end) return;

    if (localStorage.getItem(STORAGE_PREFIX + announcementModal.id)) return;

    const timer = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_PREFIX + announcementModal.id, "1");
    setOpen(false);
  };

  const onOpenChange = (next: boolean) => {
    if (next) {
      setOpen(true);
    } else {
      dismiss();
    }
  };

  return { open, onOpenChange, dismiss };
}
