import { Phone, Mail, Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { toast } from 'sonner';
import { useState } from 'react';
import axios from 'axios';

export function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await axios.post('https://startled.com.mx/contacto.php', formData);
    if (response.data.status === 'success') {
      toast.success('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
    } else {
      toast.error('Error al enviar el mensaje. Intenta más tarde.');
    }
  } catch (error) {
    console.error(error);
    toast.error('Error al enviar el mensaje. Intenta más tarde.');
  }
};

  const contactInfo = [
    {
      icon: Phone,
      title: 'WhatsApp',
      details: ['5662685200'],
      link: 'https://wa.me/525662685200'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      details: ['@startled2809'],
      link: 'https://instagram.com/startled2809'
    },
    {
      icon: Facebook,
      title: 'Facebook',
      details: ['Start Led'],
      link: 'https://facebook.com/startled2809'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['startled7@gmail.com'],
      link: 'mailto:startled7@gmail.com'
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#2c4f64] text-white px-8 py-3 mb-6 transform -skew-x-6">
            <h2 className="transform skew-x-6 text-white">CONTÁCTANOS</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Estamos listos para hacer de tu evento una experiencia inolvidable
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#1e3a4c] to-[#2a1a5e] text-white p-8 rounded-lg">
              <h3 className="mb-6 text-white">Información de Contacto</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 hover:bg-white/10 p-3 rounded-lg transition-colors group"
                  >
                    <div className="w-12 h-12 bg-[#00d4ff] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-[#1e3a4c]" />
                    </div>
                    <div>
                      <p className="text-cyan-300 text-sm">{info.title}</p>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-lg">{detail}</p>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-2 border-[#00d4ff]/30">
              <CardContent className="p-6">
                <h3 className="mb-6">Cotizaciones</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block mb-2">Nombre</label>
                    <Input
                      type="text"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      required
                      className="border-gray-300 focus:border-[#00d4ff]"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-gray-300 focus:border-[#00d4ff]"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Teléfono</label>
                    <Input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      required
                      className="border-gray-300 focus:border-[#00d4ff]"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Mensaje</label>
                    <Textarea
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      required
                      rows={4}
                      className="border-gray-300 focus:border-[#00d4ff]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#1e3a4c] hover:bg-[#2c4f64]"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
