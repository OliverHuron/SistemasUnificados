// Sistemas institucionales de la Facultad de Contaduría y Ciencias Administrativas (SIAF).
// tag: "administracion" | "finanzas" | "servicios" — etiqueta usada por los filtros.
// area: "administracion-finanzas" | "servicios-atencion" — agrupación de las secciones de la página.
// status: "operativo" | "mantenimiento"
let systems = [
  {
    id: "patrimonio",
    name: "Patrimonio",
    description: "Inventario y control de los bienes patrimoniales de la Facultad.",
    tag: "administracion",
    area: "administracion-finanzas",
    status: "operativo",
    url: "patrimonio.siafsystem.online",
    ctaLabel: "Ingresar",
    previewImage: "/previews/patrimonio.jpg",
  },
  {
    id: "nominas",
    name: "Nóminas",
    description: "Consulta y administración de nóminas del personal.",
    tag: "finanzas",
    area: "administracion-finanzas",
    status: "operativo",
    url: "[URL del sistema]",
    ctaLabel: "Ingresar",
    previewImage: null,
  },
  {
    id: "solicitudes",
    name: "Solicitudes",
    description: "Registro y seguimiento de solicitudes internas de las áreas.",
    tag: "servicios",
    area: "servicios-atencion",
    status: "operativo",
    url: "[URL del sistema]",
    ctaLabel: "Ingresar",
    previewImage: null,
  },
  {
    id: "chatbot-whatsapp",
    name: "Chatbot WhatsApp",
    description: "Atención automatizada por WhatsApp para la comunidad de la FCCA.",
    tag: "servicios",
    area: "servicios-atencion",
    status: "operativo",
    url: "[Número o enlace wa.me]",
    ctaLabel: "Abrir",
    previewImage: null,
  },
];

function list() {
  return systems;
}

function findById(id) {
  return systems.find((s) => s.id === id) || null;
}

module.exports = { list, findById };
