import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import {
  Play,
  Calendar,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Badge } from "./ui/badge";

interface Evento {
  id: number;
  titulo: string;
  fecha: string;
  ubicacion: string;
  categoria: string;
  descripcion: string;
  imagenPortada: string;
  fotos: string[];
}

export function Galeria() {
  const [selectedImage, setSelectedImage] = useState<
    string | null
  >(null);
  const [eventoSeleccionado, setEventoSeleccionado] =
    useState<Evento | null>(null);
  const [indiceImagenEvento, setIndiceImagenEvento] =
    useState(0);
  const [videoSeleccionado, setVideoSeleccionado] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const eventos: Evento[] = [
    {
      id: 1,
      titulo: "Evento Corporativo Tech Summit 2024",
      fecha: "15 de Marzo, 2024",
      ubicacion: "Centro de Convenciones",
      categoria: "Corporativo",
      descripcion:
        "Instalación de pantallas LED para conferencia tecnológica con más de 500 asistentes",
      imagenPortada:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGxlZCUyMHNjcmVlbnxlbnwxfHx8fDE3NjA0MjE3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      fotos: [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGxlZCUyMHNjcmVlbnxlbnwxfHx8fDE3NjA0MjE3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzYwNDIxNzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjA0MjE3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pbmFyJTIwYXVkaWVuY2V8ZW58MXx8fHwxNzYwNDIxNzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 2,
      titulo: "Conferencia Internacional de Innovación",
      fecha: "22 de Febrero, 2024",
      ubicacion: "Hotel Grand Plaza",
      categoria: "Conferencia",
      descripcion:
        "Soluciones LED de alta resolución para presentaciones corporativas",
      imagenPortada:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHN0YWdlfGVufDF8fHx8MTc2MDQyMTc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      fotos: [
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHN0YWdlfGVufDF8fHx8MTc2MDQyMTc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1566140967404-b8b3932483f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzU5OTY3ODUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzZXJ2aWNlc3xlbnwxfHx8fDE3NTk4ODk4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 3,
      titulo: "Concierto Música en Vivo",
      fecha: "10 de Abril, 2024",
      ubicacion: "Estadio Municipal",
      categoria: "Entretenimiento",
      descripcion:
        "Pantallas LED gigantes para concierto masivo al aire libre",
      imagenPortada:
        "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzYwNDIxNzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      fotos: [
        "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzYwNDIxNzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwY29uY2VydCUyMGNyb3dkfGVufDF8fHx8MTc2MDQyMTc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwc3RhZ2V8ZW58MXx8fHwxNzYwNDIxNzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 4,
      titulo: "Feria de Negocios ExpoMéxico",
      fecha: "5 de Mayo, 2024",
      ubicacion: "Centro Banamex",
      categoria: "Feria",
      descripcion:
        "Instalación de stands con pantallas LED para exhibición de productos",
      imagenPortada:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkZSUyMHNob3clMjBib290aHxlbnwxfHx8fDE3NjA0MjE3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      fotos: [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkZSUyMHNob3clMjBib290aHxlbnwxfHx8fDE3NjA0MjE3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1464047736614-af63643285bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwaGFsbHxlbnwxfHx8fDE3NjA0MjE3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwc2hvd2Nhc2V8ZW58MXx8fHwxNzU5ODY4Mzk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1690192123455-6337e6db4179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU5OTY3ODUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 5,
      titulo: "Inauguración Centro Comercial Plaza del Sol",
      fecha: "18 de Enero, 2024",
      ubicacion: "Plaza del Sol",
      categoria: "Inauguración",
      descripcion:
        "Pantallas LED digitales para inauguración y señalización comercial",
      imagenPortada:
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBkaWdpdGFsJTIwZGlzcGxheXxlbnwxfHx8fDE3NjA0MjE3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      fotos: [
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBkaWdpdGFsJTIwZGlzcGxheXxlbnwxfHx8fDE3NjA0MjE3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9yZSUyMG9wZW5pbmclMjBldmVudHxlbnwxfHx8fDE3NjA0MjE3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
    {
      id: 6,
      titulo: "Festival de Música Electrónica 2024",
      fecha: "28 de Junio, 2024",
      ubicacion: "Parque Fundidora",
      categoria: "Entretenimiento",
      descripcion:
        "Sistemas LED de última generación para festival con 3 escenarios",
      imagenPortada:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwc3RhZ2V8ZW58MXx8fHwxNzYwNDIxNzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      fotos: [
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwc3RhZ2V8ZW58MXx8fHwxNzYwNDIxNzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwc3RhZ2V8ZW58MXx8fHwxNzYwNDIxNzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzYwNDIxNzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
    },
  ];

  const videos = [
    {
      src: "/videos/presentacion-start-led.mp4",
      poster:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      title: "Presentación START LED",
      description:
        "Conoce nuestras soluciones en pantallas LED",
    },
    {
      src: "/videos/testimonios-clientes.mp4",
      poster:
        "https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=800",
      title: "Testimonios de Clientes",
      description:
        "Lo que nuestros clientes dicen sobre nosotros",
    },
    {
      src: "/videos/instalacion-pantallas.mp4",
      poster:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?w=800",
      title: "Instalación de Pantallas LED",
      description: "Proceso profesional de instalación",
    },
    {
      src: "/videos/proyectos-destacados.mp4",
      poster:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
      title: "Proyectos Destacados",
      description: "Nuestros casos de éxito más recientes",
    },
    {
      src: "/videos/tecnologia-led.mp4",
      poster:
        "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?w=800",
      title: "Tecnología LED de Última Generación",
      description: "Innovación y calidad en cada proyecto",
    },
    {
      src: "/videos/eventos-conferencias.mp4",
      poster:
        "https://images.unsplash.com/photo-1690192123455-6337e6db4179?w=800",
      title: "Eventos y Conferencias",
      description: "Nuestras pantallas LED en acción",
    },
  ];

  return (
    <section id="galeria-eventos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-[#1e3a4c] to-[#2a1a5e] text-white px-8 py-3 mb-6 transform -skew-x-6">
            <h2 className="transform skew-x-6 text-white">Galería</h2>
          </div>
        </div>

        <Tabs
          defaultValue="fotos"
          className="max-w-7xl mx-auto"
        >
          <TabsList className="grid w-full max-w-md mx-auto mb-12 grid-cols-2">
            <TabsTrigger value="fotos">Fotos</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>

          <TabsContent value="fotos">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventos.map((evento) => (
                <Card
                  key={evento.id}
                  className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => {
                    setEventoSeleccionado(evento);
                    setIndiceImagenEvento(0);
                  }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={evento.imagenPortada}
                      alt={evento.titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-[#00d4ff] text-[#1e3a4c] hover:bg-[#00b8e6]">
                        {evento.fotos.length} fotos
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <Badge className="mb-2 bg-gradient-to-r from-[#1e3a4c] to-[#2a1a5e]">
                        {evento.categoria}
                      </Badge>
                      <h3 className="text-white mb-2">
                        {evento.titulo}
                      </h3>
                      <div className="flex items-center gap-4 text-white/80 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{evento.fecha}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{evento.ubicacion}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-video"
                  onClick={() =>
                    setVideoSeleccionado({
                      src: video.src,
                      title: video.title,
                    })
                  }
                >
                  <img
                    src={video.poster}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Overlay con botón de play */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 bg-[#00d4ff] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play
                        className="w-8 h-8 text-[#1e3a4c] ml-1"
                        fill="#1e3a4c"
                      />
                    </div>
                  </div>
                  {/* Título en la parte inferior */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="p-4 text-white">
                      {video.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Modal de Evento Completo */}
        {eventoSeleccionado && (
          <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto">
            <div className="container mx-auto px-4 py-8">
              {/* Header del Modal */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <Badge className="mb-3 bg-gradient-to-r from-[#1e3a4c] to-[#2a1a5e]">
                    {eventoSeleccionado.categoria}
                  </Badge>
                  <h2 className="text-white mb-2">
                    {eventoSeleccionado.titulo}
                  </h2>
                  <p className="text-white/70 mb-4">
                    {eventoSeleccionado.descripcion}
                  </p>
                  <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#00d4ff]" />
                      <span>{eventoSeleccionado.fecha}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#00d4ff]" />
                      <span>
                        {eventoSeleccionado.ubicacion}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setEventoSeleccionado(null)}
                  className="text-white bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-colors ml-4"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Imagen Principal */}
              <div className="relative mb-6 bg-black rounded-lg overflow-hidden">
                <div className="relative aspect-video">
                  <ImageWithFallback
                    src={
                      eventoSeleccionado.fotos[
                        indiceImagenEvento
                      ]
                    }
                    alt={`${eventoSeleccionado.titulo} - Foto ${indiceImagenEvento + 1}`}
                    className="w-full h-full object-contain"
                  />

                  {/* Controles de navegación */}
                  {eventoSeleccionado.fotos.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setIndiceImagenEvento((prev) =>
                            prev === 0
                              ? eventoSeleccionado.fotos
                                  .length - 1
                              : prev - 1,
                          )
                        }
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() =>
                          setIndiceImagenEvento((prev) =>
                            prev ===
                            eventoSeleccionado.fotos.length - 1
                              ? 0
                              : prev + 1,
                          )
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>

                      {/* Contador */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                        {indiceImagenEvento + 1} /{" "}
                        {eventoSeleccionado.fotos.length}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Miniaturas */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {eventoSeleccionado.fotos.map((foto, index) => (
                  <div
                    key={index}
                    onClick={() => setIndiceImagenEvento(index)}
                    className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all ${
                      indiceImagenEvento === index
                        ? "ring-4 ring-[#00d4ff] scale-105"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <ImageWithFallback
                      src={foto}
                      alt={`Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Modal de Video */}
        {videoSeleccionado && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setVideoSeleccionado(null)}
          >
            <div
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex justify-between items-center">
                <h3 className="text-white">
                  {videoSeleccionado.title}
                </h3>
                <button
                  className="text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                  onClick={() => setVideoSeleccionado(null)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="bg-black rounded-lg overflow-hidden">
                <video
                  controls
                  autoPlay
                  className="w-full aspect-video"
                  src={videoSeleccionado.src}
                >
                  <source
                    src={videoSeleccionado.src}
                    type="video/mp4"
                  />
                  Tu navegador no soporta la reproducción de
                  video.
                </video>
              </div>
            </div>
          </div>
        )}

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl max-h-[90vh]">
              <ImageWithFallback
                src={selectedImage}
                alt="Imagen ampliada"
                className="max-w-full max-h-[90vh] object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}