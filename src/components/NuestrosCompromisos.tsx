import { Award, Shield, Lightbulb } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function NuestrosCompromisos() {
  const compromisos = [
    {
      //icon: Award,
      title: 'Calidad',
      description: 'Estamos comprometidos con la calidad en el servicio con un trato personalizado, especializado, amable y responsable.',
      bgImage: '/assets/calidad.jpg'
    },
    {
      //icon: Shield,
      title: 'Confiabilidad',
      description: 'Estamos conscientes que el cliente requiere de ofrecer credibilidad en sus servicios o productos, por lo que, nuestras pantallas, nuestro equipo técnico y de soporte están para ofrecer la mejor calidad para ofrecer esa seguridad requerida.',
      bgImage: '/assets/confiabilidad.jpg'
    },
    {
      //icon: Lightbulb,
      title: 'Innovación',
      description: 'Contamos con pantallas de 3.9, 2.9 mm y lo último en 2.6 mm Pixel Pitch de 1000 nits con resolución de alta definición para exposición frontal, horizontal, vertical o cenital de forma recta o curva.',
      bgImage: '/assets/innovacion.jpg'
    }
  ];

  return (
    <section id="nuestros-compromisos" className="py-20 bg-gradient-to-br from-[#2a1a5e] to-[#1e3a4c] relative overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#00d4ff] to-transparent opacity-10 transform -skew-x-12"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#2c4f64] text-white px-8 py-3 mb-6 transform -skew-x-6">
            <h2 className="transform skew-x-6 text-white">Nuestros Compromisos</h2>
          </div>
          <p className="text-cyan-200 text-lg max-w-3xl mx-auto">
            Comprometidos con la excelencia en cada proyecto
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {compromisos.map((compromiso, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-cyan-500/30 hover:bg-white/20 transition-all group overflow-hidden relative h-full">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <ImageWithFallback 
                  src={compromiso.bgImage} 
                  alt={compromiso.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a4c]/45 via-[#2a1a5e]/40 to-[#1e3a4c]/50"></div>
              </div>
              
              <CardContent className="p-8 text-center relative z-10">
                {/* <div className="w-20 h-20 bg-[#00d4ff] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <compromiso.icon className="w-10 h-10 text-[#1e3a4c]" />
                </div> */}
                <h3 className="mb-4 text-white">{compromiso.title}</h3>
                <p className="text-white leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-96 overflow-hidden">
                  {compromiso.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}