import { LazyMotion, domAnimation } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { AnnouncementModal } from "@/components/layout/announcement-modal";
import { Home } from "@/pages/home";
import { useLenis } from "@/hooks/use-lenis";

function App() {
  useLenis();

  return (
    <LazyMotion features={domAnimation} strict>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <WhatsAppFab />
      <AnnouncementModal />
    </LazyMotion>
  );
}

export default App;
