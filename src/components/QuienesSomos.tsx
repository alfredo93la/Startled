import { ImageWithFallback } from './figma/ImageWithFallback';

export function QuienesSomos() {
  return (
    <section id="quienes-somos" className="py-20 bg-white relative overflow-hidden">
      {/* Diagonal background accent */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-[#1e3a4c] to-[#2a1a5e] transform -skew-y-2"></div>
      
      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-block bg-[#2c4f64] text-white px-8 py-3 mb-6 transform -skew-x-6">
                <h2 className="transform skew-x-6 text-white">¿Quiénes somos?</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                START LED es una empresa especializada en transformar experiencias visuales en la industria de eventos corporativos, de entretenimiento y espectáculos, con el arrendamiento de <strong>pantallas Led</strong> en gran formato y con tecnología de vanguardia.
              </p>
            </div>
            
            <div className="hidden md:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1740968984962-29087e16ceff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBsZWQlMjBzY3JlZW4lMjBkaXNwbGF5fGVufDF8fHx8MTc1OTk3NTM0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Pantalla LED corporativa"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573147367786-a5a227916f0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWQlMjB2aWRlbyUyMHdhbGwlMjBkaXNwbGF5fGVufDF8fHx8MTc1OTk3NTQ1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Pantalla LED Video Wall"
                className="rounded-lg shadow-xl"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <div className="inline-block bg-[#2c4f64] text-white px-8 py-3 mb-6 transform -skew-x-6">
                <h3 className="transform skew-x-6 text-white">Nuestra Misión</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                Transformar cada uno de los eventos de nuestros clientes, en una experiencia visual inolvidable que despierte emoción, inspiración y conexión en sus expectantes alcanzando los objetivos deseados y coadyuvando con el potencial que les caracteriza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}