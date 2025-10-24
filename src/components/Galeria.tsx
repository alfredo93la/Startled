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
      titulo: 'ANIDIGRAF',
      fecha: '',
      ubicacion: '',
      categoria: 'Eventos',
      descripcion: 'Instalación de pantallas LED para eventos',
      imagenPortada: '/assets/galeria/images/Anidigraf/01.jpeg',
      fotos: [
        '/assets/galeria/images/Anidigraf/01.jpeg',
        '/assets/galeria/images/Anidigraf/02.jpeg'
      ]
    },
    {
      id: 2,
      titulo: 'AstraZeneca',
      fecha: '',
      ubicacion: '',
      categoria: 'Eventos',
      descripcion: 'Instalación de pantallas LED para eventos',
      imagenPortada: '/assets/galeria/images/AstraZeneca/01.jpg',
      fotos: [
        '/assets/galeria/images/AstraZeneca/01.jpg'
      ]
    },
    {
      id: 3,
      titulo: 'Dos Equis',
      fecha: '',
      ubicacion: '',
      categoria: 'Eventos',
      descripcion: 'Instalación de pantallas LED para eventos',
      imagenPortada: '/assets/galeria/images/DosEquis/01.jpg',
      fotos: [
        '/assets/galeria/images/DosEquis/01.jpg',
        '/assets/galeria/images/DosEquis/02.jpg',
        '/assets/galeria/images/DosEquis/03.jpg'
      ]
    },
    {
      id: 4,
      titulo: 'ITESM',
      fecha: '',
      ubicacion: '',
      categoria: 'Eventos',
      descripcion: 'Instalación de pantallas LED para eventos',
      imagenPortada: '/assets/galeria/images/ITESM/01.jpg',
      fotos: [
        '/assets/galeria/images/ITESM/01.jpg',
        '/assets/galeria/images/ITESM/02.jpg'
      ]
    },
    {
      id: 5,
      titulo: 'Nissan',
      fecha: '',
      ubicacion: '',
      categoria: 'Eventos',
      descripcion: 'Instalación de pantallas LED para eventos',
      imagenPortada: '/assets/galeria/images/Nissan/01.jpg',
      fotos: [
        '/assets/galeria/images/Nissan/01.jpg'
      ]
    },
    {
      id: 6,
      titulo: 'Pharmatech',
      fecha: '',
      ubicacion: '',
      categoria: 'Eventos',
      descripcion: 'Instalación de pantallas LED para eventos',
      imagenPortada: '/assets/galeria/images/Pharmatech/01.jpg',
      fotos: [
        '/assets/galeria/images/Pharmatech/01.jpg',
        '/assets/galeria/images/Pharmatech/02.jpg',
        '/assets/galeria/images/Pharmatech/03.jpg',
        '/assets/galeria/images/Pharmatech/04.jpg',
      ]
    },
    {
      id: 7,
      titulo: 'Roche',
      fecha: '',
      ubicacion: '',
      categoria: 'Eventos',
      descripcion: 'Instalación de pantallas LED para eventos',
      imagenPortada: '/assets/galeria/images/Roche/01.jpg',
      fotos: [
        '/assets/galeria/images/Roche/01.jpg',
        '/assets/galeria/images/Roche/02.jpg'
      ]
    },
    {
      id: 8,
      titulo: 'Tecate',
      fecha: '',
      ubicacion: '',
      categoria: 'Eventos',
      descripcion: 'Instalación de pantallas LED para eventos',
      imagenPortada: '/assets/galeria/images/Tecate/01.jpg',
      fotos: [
        '/assets/galeria/images/Tecate/01.jpg'
      ]
    },
    {
      id: 9,
      titulo: 'Varios Eventos',
      fecha: '',
      ubicacion: '',
      categoria: 'Eventos',
      descripcion: 'Instalación de pantallas LED para eventos',
      imagenPortada: '/assets/galeria/images/Varios/01.jpg',
      fotos: [
        '/assets/galeria/images/Varios/01.jpg',
        '/assets/galeria/images/Varios/02.jpg',
        '/assets/galeria/images/Varios/03.jpg',
        '/assets/galeria/images/Varios/04.jpg',
        '/assets/galeria/images/Varios/05.jpg',
        '/assets/galeria/images/Varios/06.jpg',
        '/assets/galeria/images/Varios/07.jpg',
        '/assets/galeria/images/Varios/08.jpg',
        '/assets/galeria/images/Varios/09.jpg',
        '/assets/galeria/images/Varios/10.jpg',
        '/assets/galeria/images/Varios/11.jpg',
        '/assets/galeria/images/Varios/12.jpg',
        '/assets/galeria/images/Varios/13.jpg',
        '/assets/galeria/images/Varios/14.jpg',
        '/assets/galeria/images/Varios/15.jpg',
        '/assets/galeria/images/Varios/16.jpg',
        '/assets/galeria/images/Varios/17.jpg',
        '/assets/galeria/images/Varios/18.jpg'
      ]
    },
    {
      id: 10,
      titulo: 'Banners',
      fecha: '',
      ubicacion: '',
      categoria: 'Banners',
      descripcion: 'Diseño e impresión de banners personalizados',
      imagenPortada: '/assets/galeria/images/Banners/01.jpg',
      fotos: [
        '/assets/galeria/images/Banners/01.jpg',
        '/assets/galeria/images/Banners/02.jpg',
        '/assets/galeria/images/Banners/03.jpg',
        '/assets/galeria/images/Banners/04.jpg'
      ]
    }
  ];

  const videos = [
    {
      src: '/assets/galeria/videos/01.mp4',
      poster: '/assets/galeria/videos/posters/01.png',
      title: '',
      description: ''
    },
    {
      src: '/assets/galeria/videos/02.mp4',
      poster: '/assets/galeria/videos/posters/02.png',
      title: '',
      description: ''
    },
    {
      src: '/assets/galeria/videos/03.mp4',
      poster: '/assets/galeria/videos/posters/03.png',
      title: '',
      description: ''
    },
    {
      src: '/assets/galeria/videos/04.mp4',
      poster: '/assets/galeria/videos/posters/04.png',
      title: '',
      description: ''
    },
    {
      src: '/assets/galeria/videos/05.mp4',
      poster: '/assets/galeria/videos/posters/05.png',
      title: '',
      description: ''
    },
    {
      src: '/assets/galeria/videos/06.mp4',
      poster: '/assets/galeria/videos/posters/06.png',
      title: '',
      description: ''
    },
    {
      src: '/assets/galeria/videos/07.mp4',
      poster: '/assets/galeria/videos/posters/07.png',
      title: '',
      description: ''
    },
    {
      src: '/assets/galeria/videos/08.mp4',
      poster: '/assets/galeria/videos/posters/08.png',
      title: '',
      description: ''
    },
    {
      src: '/assets/galeria/videos/09.mp4',
      poster: '/assets/galeria/videos/posters/09.png',
      title: '',
      description: ''
    },
    {
      src: '/assets/galeria/videos/10.mp4',
      poster: '/assets/galeria/videos/posters/10.png',
      title: '',
      description: ''
    },
    {
      src: '/assets/galeria/videos/11.mp4',
      poster: '/assets/galeria/videos/posters/11.png',
      title: '',
      description: ''
    }
  ];
  return (
    <section id="galeria-eventos" className="py-20 bg-gradient-to-br from-[#2a1a5e] to-[#1e3a4c]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#00d4ff] text-[#1e3a4c] px-8 py-3 mb-6 transform -skew-x-6 shadow-lg">
            <h2 className="transform skew-x-6">Galería</h2>
          </div>
        </div>

        <Tabs
          defaultValue="fotos"
          className="max-w-7xl mx-auto"
        >
          <TabsList className="grid w-full max-w-md mx-auto mb-12 grid-cols-2 bg-sky-300">
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
                      {/* <div className="flex items-center gap-4 text-white/80 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{evento.fecha}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{evento.ubicacion}</span>
                        </div>
                      </div> */}
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
                  {/* <p className="text-white/70 mb-4">
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
                  </div> */}
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