import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { Home } from "@/pages/home";
import { useLenis } from "@/hooks/use-lenis";

function App() {
  useLenis();

  return (
    <BrowserRouter>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </BrowserRouter>
  );
}

export default App;
