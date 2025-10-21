import { Card } from './ui/card';
import { CheckCircle2 } from 'lucide-react';
import pantallasImage from 'figma:asset/03db662aaf3974ff7b7a7a32fa7aa6a483ee8b78.png';

export function TiposPantallas() {
  const caracteristicas = [
    {
      titulo: 'Diseño modular y ultradelgado',
      descripcion: 'Los paneles se ensamblan fácilmente para formar pantallas de gran formato sin interrupciones visuales.'
    },
    {
      titulo: 'Alta resolución y brillo',
      descripcion: 'Imágenes nítidas y colores vibrantes incluso en entornos con alta iluminación.'
    },
    {
      titulo: 'Versatilidad de instalación',
      descripcion: 'Aptas para montaje fijo o estructuras móviles, perfectas para escenarios, centros comerciales, salas de control y publicidad digital.'
    }
  ];

  return (
    <section id="tipos-pantallas" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos diagonales */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00d4ff]/10 to-transparent transform rotate-45 translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#2a1a5e]/5 to-transparent transform -rotate-12 -translate-x-48 translate-y-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#1e3a4c] to-[#2a1a5e] text-white px-8 py-3 mb-6 transform -skew-x-6">
            <h2 className="transform skew-x-6 text-white">Pantallas LED Modulares de Alta Resolución</h2>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-none shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Imagen */}
              <div className="relative bg-white p-8 flex items-center justify-center">
                <img
                  src={pantallasImage}
                  alt="Pantallas LED Modulares"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Información */}
              <div className="bg-gradient-to-br from-[#1e3a4c] to-[#2a1a5e] text-white p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-white mb-6">Descripción General</h3>
                <p className="text-cyan-100 mb-8 leading-relaxed">
                  Nuestras pantallas LED modulares ofrecen una calidad de imagen excepcional y una estructura 
                  ligera y resistente, ideal para aplicaciones en interiores y exteriores. Diseñadas con tecnología 
                  avanzada, permiten una instalación rápida, mantenimiento frontal o posterior, y una combinación 
                  flexible de módulos para adaptarse a cualquier tamaño o formato.
                </p>

                <div className="space-y-4">
                  {caracteristicas.map((caracteristica, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white mb-1">{caracteristica.titulo}</p>
                        <p className="text-cyan-200 text-sm">{caracteristica.descripcion}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Nota adicional */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[#1e3a4c]/5 via-[#2a1a5e]/5 to-[#1e3a4c]/5 rounded-lg p-6 max-w-4xl mx-auto border-l-4 border-[#00d4ff]">
              <p className="text-gray-700">
                Disponibles en distintos tamaños y resoluciones para adaptarse a las necesidades específicas de cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
