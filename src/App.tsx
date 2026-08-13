import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { AnnouncementModal } from "@/components/layout/announcement-modal";
import { Home } from "@/pages/home";
import { useLenis } from "@/hooks/use-lenis";

function App() {
  useLenis();

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
      <AnnouncementModal />
    </BrowserRouter>
  );
}

export default App;
