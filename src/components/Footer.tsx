import { Instagram, Phone, Mail, Facebook } from 'lucide-react';

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
          <div></div>
          <div>
            <h4 className="mb-4 text-[#00d4ff]">Contacto</h4>
            <div className="space-y-2 text-gray-300">
              <a className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                5662685200
              </a>
              <a className="flex items-center gap-2" href="mailto:startled7@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="w-4 h-4" />
                startled7@gmail.com
              </a>
              <a className="flex items-center gap-2" href="https://instagram.com/startled2809" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4" />
                @startled2809
              </a>
              <a className="flex items-center gap-2" href="https://facebook.com/startled2809" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-4 h-4" />
                Start Led
              </a>
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
