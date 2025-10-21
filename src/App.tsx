import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { QuienesSomos } from "./components/QuienesSomos";
import { NuestrosCompromisos } from "./components/NuestrosCompromisos";
import { TiposPantallas } from "./components/TiposPantallas";
import { Galeria } from "./components/Galeria";
import { Contacto } from "./components/Contacto";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <QuienesSomos />
        <NuestrosCompromisos />
        <TiposPantallas />
        <Galeria />
        <Contacto />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}