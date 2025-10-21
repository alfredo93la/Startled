import { Button } from './ui/button';
import heroImage from 'figma:asset/d3191688b876e4c6dc96182b46436a9f396331eb.png';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url('/assets/hero.png')` }}
      ></div>
      
      {/* Gradient Overlay - Más transparente para ver mejor la imagen */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a4c]/60 via-[#2a1a5e]/50 to-[#1e3a4c]/60"></div>
      
      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#00d4ff]/10 to-transparent transform skew-x-12"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h1 className="text-5xl md:text-6xl uppercase tracking-tight text-white">
            SABEMOS QUE CADA PIXEL CUENTA Y CADA CLIENTE IMPORTA
          </h1>
          <p className="text-xl md:text-2xl text-cyan-200">
            Renta de pantallas de gran formato
          </p>
          <div className="space-y-4">
            <p className="text-lg md:text-xl">
              Transformamos experiencias visuales en la industria de eventos corporativos, de entretenimiento y espectáculos.
            </p>
            <p className="text-2xl md:text-3xl text-cyan-300">
              SOMOS TU SOCIO COMERCIAL PARA EL ÉXITO DE TU EVENTO
            </p>
          </div>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-[#00d4ff] text-[#1e3a4c] hover:bg-[#00b8e6] text-lg px-8 shadow-xl shadow-cyan-500/50"
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  );
}
