import { ImageWithFallback } from './figma/ImageWithFallback';

export function QuienesSomos() {
  return (
    <section id="quienes-somos" className="py-20 bg-linear-to-r from-cyan-50 to-blue-200 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 pt-8">
        <div className="max-w-6xl mx-auto">
          {/* Quiénes Somos - Imagen con texto superpuesto */}
          <div className="relative w-full mb-16 rounded-lg overflow-hidden shadow-xl">
            <ImageWithFallback
              src="/assets/led_screen0.jpg"
              alt="Pantalla LED corporativa"
              className="w-full h-[500px] object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a4c]/95 via-[#2a1a5e]/90 to-transparent"></div>
            
            {/* Contenido superpuesto */}
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 md:px-16 max-w-3xl">
                <div className="inline-block bg-[#00d4ff] text-[#1e3a4c] px-8 py-3 mb-6 transform -skew-x-6 shadow-lg">
                  <h2 className="transform skew-x-6">¿Quiénes somos?</h2>
                </div>
                <p className="text-white text-lg leading-relaxed text-justify drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  START LED es una empresa especializada en transformar experiencias visuales en la industria de eventos corporativos, de entretenimiento y espectáculos, con el arrendamiento de <strong>pantallas Led</strong> en gran formato y con tecnología de vanguardia.
                </p>
              </div>
            </div>
          </div>

          {/* Nuestra Misión - Imagen con texto superpuesto */}
          <div id="nuestra-mision" className="relative w-full rounded-lg overflow-hidden shadow-xl">
            <ImageWithFallback
              src="/assets/led_screen1.png"
              alt="Pantalla LED Video Wall"
              className="w-full h-[500px] object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#1e3a4c]/95 via-[#2a1a5e]/90 to-transparent"></div>
            
            {/* Contenido superpuesto */}
            <div className="absolute inset-0 flex items-center justify-end">
              <div className="px-8 md:px-16 max-w-3xl text-right">
                <div className="inline-block bg-[#00d4ff] text-[#1e3a4c] px-8 py-3 mb-6 transform -skew-x-6 shadow-lg">
                  <h3 className="transform skew-x-6">Nuestra Misión</h3>
                </div>
                <p className="text-white text-lg leading-relaxed text-justify drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  Transformar cada uno de los eventos de nuestros clientes, en una experiencia visual inolvidable que despierte emoción, inspiración y conexión en sus expectantes alcanzando los objetivos deseados y coadyuvando con el potencial que les caracteriza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}