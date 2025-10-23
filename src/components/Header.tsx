import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a4c] via-[#2a1a5e] to-[#1e3a4c]"></div>

      <div className="container mx-auto px-4 py-3 relative z-10">
        <div className="flex items-center justify-between">
          <div
            className="cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <img
              src="/assets/logo.png"
              alt="START LED"
              className="h-12 md:h-16 drop-shadow-2xl"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => scrollToSection("quienes-somos")}
              className="text-white hover:text-[#00d4ff] transition-all duration-300 hover:scale-105 relative group"
            >
              ¿Quiénes somos?
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d4ff] transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("nuestra-mision")}
              className="text-white hover:text-[#00d4ff] transition-all duration-300 hover:scale-105 relative group"
            >
              Misión
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d4ff] transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("nuestros-compromisos")}
              className="text-white hover:text-[#00d4ff] transition-all duration-300 hover:scale-105 relative group"
            >
              Compromisos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d4ff] transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("productos")}
              className="text-white hover:text-[#00d4ff] transition-all duration-300 hover:scale-105 relative group"
            >
              Productos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d4ff] transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("galeria-eventos")}
              className="text-white hover:text-[#00d4ff] transition-all duration-300 hover:scale-105 relative group"
            >
              Galería
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d4ff] transition-all group-hover:w-full"></span>
            </button>
          </nav>

          <Button
            onClick={() => scrollToSection("contacto")}
            className="hidden md:inline-flex bg-[#00d4ff] text-[#1e3a4c] hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/50"
          >
            Contáctanos
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 flex flex-col gap-4 pb-4">
            <button
              onClick={() => scrollToSection("quienes-somos")}
              className="text-left text-white hover:text-[#00d4ff] transition-colors py-2 border-b border-white/20"
            >
              ¿Quiénes somos?
            </button>
            <button
              onClick={() => scrollToSection("nuestra-mision")}
              className="text-left text-white hover:text-[#00d4ff] transition-colors py-2 border-b border-white/20"
            >
              Misión
            </button>
            <button
              onClick={() => scrollToSection("nuestros-compromisos")}
              className="text-left text-white hover:text-[#00d4ff] transition-colors py-2 border-b border-white/20"
            >
              Compromisos
            </button>
            <button
              onClick={() => scrollToSection("productos")}
              className="text-left text-white hover:text-[#00d4ff] transition-colors py-2 border-b border-white/20"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection("galeria-eventos")}
              className="text-left text-white hover:text-[#00d4ff] transition-colors py-2 border-b border-white/20"
            >
              Galería
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="w-full bg-[#00d4ff] text-[#1e3a4c] hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/50 mt-2"
            >
              Contáctanos
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}