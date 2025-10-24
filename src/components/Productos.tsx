import { Card } from './ui/card';
import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Productos() {
  const caracteristicasPanel = [
    {
      titulo: '',
      descripcion: 'Dale vida a tus eventos, exhibiciones o campañas publicitarias con nuestras Pantallas LED de última generación, disponibles en pitch de 3.9, 2.9 y 2.6 mm. Su brillo de 1000 nits ofrece una claridad excepcional y colores intensos, ideales para entornos interiores o exteriores donde la calidad visual marca la diferencia.'
    },
    {
      titulo: '',
      descripcion: 'Diseñadas para una exposición versátil y creativa, pueden instalarse en orientación frontal, horizontal, vertical o cenital, con posibilidad de configuraciones rectas o curvas que se adaptan a cualquier concepto visual. Disponibles desde 1 m² en adelante, permiten crear superficies personalizadas de gran formato con resolución HD profesional.'
    },
    {
      titulo: '',
      descripcion: 'Convierte cualquier espacio en una experiencia visual envolvente con pantallas que cautivan audiencias, potencian tu marca y garantizan el mejor rendimiento en cada presentación.'
    }
  ];

  const caracteristicasBanner = [
    {
      titulo: '',
      descripcion: 'Haz que tu mensaje destaque con nuestro Póster LED de alta definición, ideal para exhibiciones, eventos, ferias o puntos de venta. Su pitch de 2.5 mm garantiza una resolución nítida y colores vibrantes, mientras que su brillo de 800 nits asegura una excelente visibilidad incluso en entornos bien iluminados.'
    },
    {
      titulo: '',
      descripcion: 'Con un diseño moderno y estilizado (64 x 162 cm), este póster es perfecto para anuncios dinámicos, promociones o branding corporativo. Se conecta fácilmente a corriente 120–220 volts, lo que facilita su instalación en cualquier espacio.'
    },
    {
      titulo: '',
      descripcion: 'Lleva tu comunicación visual al siguiente nivel con una pantalla que atrae miradas, impulsa tu marca y transforma cualquier entorno en una experiencia digital impresionante.'
    }
  ];

  return (
    <section id="productos" className="py-20 bg-linear-to-r from-cyan-50 to-blue-200 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#1e3a4c] to-[#2a1a5e] text-white px-8 py-3 mb-6 transform -skew-x-6">
            <h2 className="transform skew-x-6 text-white">Productos</h2>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-none shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Imagen */}
              <div className="relative bg-white p-8 flex items-center justify-center">
                <img
                  src="/assets/Pantallas.jpg"
                  alt="Pantallas LED Modulares"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Información */}
              <div className="bg-gradient-to-br from-[#1e3a4c] to-[#2a1a5e] text-white p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-white mb-6">Pantallas LED de Alta Definición **</h3>
                <h4 className="text-white mb-4 text-sm">Máximo Impacto Visual en Cualquier Espacio</h4>
                <div className="space-y-4">
                  {caracteristicasPanel.map((caracteristica, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <div>
                        {/* <p className="text-white mb-1">{caracteristica.titulo}</p> */}
                        <p className="text-cyan-200 text-sm text-justify">{caracteristica.descripcion}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Segundo Producto - Imagen a la derecha */}
          <Card className="overflow-hidden border-none shadow-2xl mt-12">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Información - Aparece primero */}
              <div className="bg-gradient-to-br from-[#2a1a5e] to-[#1e3a4c] text-white p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-white mb-6">Póster LED P2.5</h3>
                <h4 className="text-white mb-4 text-sm">Impacta con Imagen y Brillo Profesional</h4>

                <div className="space-y-4">
                  {caracteristicasBanner.map((caracteristica, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <div>
                        {/* <p className="text-white mb-1">{caracteristica.titulo}</p> */}
                        <p className="text-cyan-200 text-sm text-justify">{caracteristica.descripcion}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Imagen - Aparece segunda (a la derecha) */}
              <div className="relative bg-white p-8 flex items-center justify-center">
                <ImageWithFallback
                  src="/assets/led-screen-poster-1.jpg"
                  alt="Pantallas LED para Exteriores"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </Card>

          {/* Nota adicional */}
          {/* <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[#1e3a4c]/5 via-[#2a1a5e]/5 to-[#1e3a4c]/5 rounded-lg p-6 max-w-4xl mx-auto border-l-4 border-[#00d4ff]">
              <p className="text-gray-700">
                ** Disponibles en distintos tamaños y resoluciones para adaptarse a las necesidades específicas de cada proyecto.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}