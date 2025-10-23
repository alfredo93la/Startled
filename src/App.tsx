import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { QuienesSomos } from "./components/QuienesSomos";
import { NuestrosCompromisos } from "./components/NuestrosCompromisos";
import { Productos } from "./components/Productos";
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
        <Productos />
        <Galeria />
        <Contacto />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}