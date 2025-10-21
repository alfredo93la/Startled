import { Instagram, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1e3a4c] to-[#2a1a5e] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="mb-4 text-[#00d4ff]">START LED</h3>
            <p className="text-gray-300">
              Renta de pantallas de gran formato. Tecnología LED de vanguardia para tus eventos.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-[#00d4ff]">Contacto</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                5662685200
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                startled7@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                @startled2809
              </p>
              <p className="flex items-center gap-2">
                <Facebook className="w-4 h-4" />
                Start Led
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4 text-[#00d4ff]">Nuestro Compromiso</h4>
            <p className="text-gray-300">
              Calidad, Confiabilidad e Innovación en cada proyecto.
            </p>
            <div className="mt-4 p-4 bg-white/10 rounded-lg">
              <p className="text-sm text-cyan-200">
                SOMOS TU SOCIO COMERCIAL PARA EL ÉXITO DE TU EVENTO
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cyan-500/30 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} START LED. Todos los derechos reservados.
          </p>
          <p className="text-sm text-cyan-300 mt-2">
            SABEMOS QUE CADA PIXEL CUENTA Y CADA CLIENTE IMPORTA
          </p>
        </div>
      </div>
    </footer>
  );
}
