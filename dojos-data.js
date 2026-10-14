/**
 * Base de datos oficial de Dojos afiliados a JKS México
 * 8 Dojos oficiales registrados
 */
const DOJOS_MEXICO = [
  {
    id: "dojo-ryokan-principal",
    nombre: "Dojo Ryokan",
    estado: "Veracruz",
    ciudad: "Veracruz, Ver.",
    direccion: "Revillagigedo 1958 entre Lerdo y Juárez Col. Centro Veracruz, Ver.",
    instructor: "L.C.C. Jaime Ortega Sosa",
    grado: "6° Dan JKS, Instructor clase A, Examinador clase B",
    isSedePrincipal: true,
    destacado: true,
    horarios: [
      {
        dias: "Lunes, Miércoles y Viernes",
        detalle: "Todos los grados (6:00 a 7:00 pm, 7:00 a 8:00 pm y 8:00 a 9:00 pm)"
      },
      {
        dias: "Martes y Jueves",
        detalle: "Karate avanzado (8:00 a 9:00 pm)"
      }
    ],
    telefono: "229 129 61 50",
    facebook: "https://www.facebook.com/DojoRyokanJKS",
    mapa: "https://maps.app.goo.gl/QJ74o65gDW9K1mi76"
  },
  {
    id: "dojo-ryokan-samui",
    nombre: "Dojo Ryokan Samui",
    estado: "Veracruz",
    ciudad: "Veracruz, Ver.",
    direccion: "Av. Allende 1640-A entre M. Arista y A. Serdán, Col. Centro, Veracruz, Ver.",
    instructor: "Ing. David Morales Libreros",
    grado: "3° Dan JKS",
    destacado: false,
    horarios: [
      {
        dias: "Lunes, Miércoles y Viernes",
        detalle: "7:00 a 8:00 pm y 8:00 a 9:00 pm"
      }
    ],
    telefono: "229 213 22 03",
    facebook: "https://www.facebook.com/profile.php?id=100063669953075#",
    mapa: "https://maps.app.goo.gl/41KDueYvtpskrvyb7"
  },
  {
    id: "dojo-ryokan-zandaka",
    nombre: "Dojo Ryokan Zandaka",
    estado: "Veracruz",
    ciudad: "Boca del Río, Ver.",
    direccion: "Calle Tulipán 121, Jardines del Virginia, Boca del Río, Veracruz, Ver.",
    instructor: "Capitán Piloto Aviador Marco Antonio Salas Morales",
    grado: "3° Dan JKS, Instructor clase D",
    destacado: false,
    horarios: [
      {
        dias: "Lunes, Miércoles y Viernes",
        detalle: "6:00 a 7:00 pm y 7:00 a 8:00 pm"
      }
    ],
    telefono: "229 960 73 65",
    facebook: "https://www.facebook.com/DojoRyokanZandaka#",
    mapa: "https://maps.app.goo.gl/ha4JuJ6oSz2pqcME6"
  },
  {
    id: "dojo-jks-orizaba",
    nombre: "Academia Japan Karate Shoto Renmei Orizaba",
    estado: "Veracruz",
    ciudad: "Orizaba, Ver.",
    direccion: "Calle 1 Av. 2 Colonia Rafael Alvarado Num. 300, Orizaba, Ver.",
    instructor: "Mtro. Álvaro A. Villegas Sifuentes",
    grado: "3° Dan JKS",
    destacado: false,
    horarios: [
      {
        dias: "Lunes a Jueves",
        turnos: [
          "4:00 a 5:00 pm — Infantil A (3 a 5 años)",
          "5:00 a 6:00 pm — Infantil B (6 a 13 años)",
          "6:00 a 7:00 pm — Juvenil (14 a 17 años)",
          "7:00 a 8:00 pm — Adultos"
        ]
      }
    ],
    telefono: "272 143 5759",
    facebook: "https://www.facebook.com/AcademiaJKSOrizaba/",
    mapa: "https://maps.app.goo.gl/N8yfvtDmwKEHnsch6"
  },
  {
    id: "dojo-sindicato-telefonistas",
    nombre: "Dojo JKS Sindicato de Telefonistas",
    estado: "Veracruz",
    ciudad: "Minatitlán, Ver.",
    direccion: "Calle Constitución No. 6 casi esquina Bulevar Instituto Tecnológico, Col. La Bomba, Minatitlán, Ver.",
    instructor: "Germán Sabino Torrecilla",
    grado: "1° Dan JKS",
    destacado: false,
    horarios: [],
    telefono: "922 122 74 68",
    facebook: null,
    mapa: "https://maps.app.goo.gl/uACmWmwQuYos89tb7"
  },
  {
    id: "dojo-kaizen-xalapa",
    nombre: "Dojo Kaizen",
    estado: "Veracruz",
    ciudad: "Xalapa, Ver.",
    direccion: "Avenida del café #43, Colonia Arboledas de Xalapa, Xalapa, Ver., México",
    instructor: "Fabian Rosas Guevara",
    grado: "2° Dan JKS",
    destacado: false,
    horarios: [
      {
        dias: "Lunes, Miércoles y Viernes",
        detalle: "7:00 a 8:00 pm y 8:00 a 9:00 pm"
      }
    ],
    telefono: "228 306 33 31",
    facebook: "https://www.facebook.com/profile.php?id=100094032651136",
    mapa: "https://maps.app.goo.gl/v3vTzX7AqA9C9b6Q8"
  },
  {
    id: "dojo-ryokan-xalapa",
    nombre: "Dojo Ryokan Xalapa",
    estado: "Veracruz",
    ciudad: "Xalapa, Ver.",
    direccion: "Bonampak 29, Sebastián Lerdo de Tejada, C.P. 91180, Xalapa - Enríquez, Ver. (Instalaciones del Dojo Mokei)",
    instructor: "Edgar Hernández Pérez",
    grado: "1° Dan JKS",
    destacado: false,
    horarios: [
      {
        dias: "Martes, Jueves y Sábado",
        detalle: "4:00 a 5:50 pm"
      }
    ],
    telefono: "228 126 49 30",
    facebook: "https://www.facebook.com/profile.php?id=61579965540715&rdid=0qYAI0RD0juIYdrC&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19obhAW5hc%2F#",
    mapa: "https://maps.app.goo.gl/J2MnzBncEj4P5prc7"
  },
  {
    id: "dojo-seishin-do",
    nombre: "Dojo Seishin Do",
    estado: "Estado de México",
    ciudad: "Chimalhuacán, Edo. Méx.",
    direccion: "Calle Otatli M. 182 L. 19, Barrio Curtidores, Colonia Santa Helena Chimalhuacán, Estado de México, C.P. 56366",
    instructor: "Alfredo Hernández Garrido",
    grado: "4º Dan",
    destacado: false,
    horarios: [],
    telefonos: [
      { tipo: "Tel", numero: "55 58 51 69 77" },
      { tipo: "Cel", numero: "55 85 41 03 65" }
    ],
    telefono: "55 58 51 69 77",
    facebook: null,
    mapa: null
  }
];
