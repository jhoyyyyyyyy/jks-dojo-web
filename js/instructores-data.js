/**
 * Base de datos de Instructores de JKS México y JKS Japón (Honbu Dojo Tokio)
 */
const INSTRUCTORES_DATA = {
  mexico: [
    {
      id: "inst-mx-1",
      nombre: "L.C.C. Jaime Ortega Sosa",
      grado: "6to Dan JKS",
      foto: "src/img/Jaime.jpg",
      titulos: [
        "6to Dan JKS",
        "Instructor clase A",
        "Examinador clase B",
        "Instructor en jefe / Director técnico",
        "Branch Leader"
      ]
    },
    {
      id: "inst-mx-2",
      nombre: "Dr. Jacobo Gómez Scagno",
      grado: "5to Dan JKS",
      foto: "src/img/Jacobo.jpg",
      titulos: [
        "5to Dan JKS",
        "Instructor B",
        "Examinador D"
      ]
    },
    {
      id: "inst-mx-3",
      nombre: "Mtro. Álvaro A. Villegas Sifuentes",
      grado: "3° Dan JKS",
      foto: "src/img/Álvaro.jpg",
      titulos: [
        "3° Dan JKS",
        "Maestría en Ciencias Aplicadas a la Actividad Física",
        "Lic. En Educación Física, Deporte y Recreación",
        "Diplomado por la Federación Mexicana de Karate"
      ]
    },
    {
      id: "inst-mx-4",
      nombre: "Ing. David Morales Libreros",
      grado: "3º Dan JKS",
      foto: "src/img/David.webp",
      titulos: [
        "3º Dan JKS"
      ]
    },
    {
      id: "inst-mx-5",
      nombre: "Capitán Piloto Aviador Marco Antonio Salas Morales",
      grado: "3º Dan JKS",
      foto: "src/img/Marco.webp",
      titulos: [
        "3º Dan JKS",
        "Instructor clase D"
      ]
    },
    {
      id: "inst-mx-7",
      nombre: "L.C.C. Edith García Paredes",
      grado: "3er Dan JKS",
      foto: "src/img/Edith.webp",
      titulos: [
        "3er Dan JKS",
        "Instructor clase D"
      ]
    },
    {
      id: "inst-mx-6",
      nombre: "Pablo Hernán Gómez Ruiz",
      grado: "3er Dan JKS",
      foto: "src/img/Pablo.webp",
      titulos: [
        "3er Dan JKS",
        "Instructor clase C"
      ]
    },
    {
      id: "inst-mx-10",
      nombre: "Instructor Alfredo Hernández Garrido",
      grado: "4º Dan",
      foto: "src/img/Alfredo.webp",
      titulos: [
        "4º Dan"
      ]
    },
    {
      id: "inst-mx-8",
      nombre: "Instructor Fabián Rosas Guevara",
      grado: "2º Dan JKS",
      foto: "src/img/Fabian.jpg",
      titulos: [
        "2º Dan JKS"
      ]
    },
    {
      id: "inst-mx-9",
      nombre: "Instructor Germán Sabino Torrecilla",
      grado: "1º Dan JKS",
      foto: "src/img/Germán.jpg",
      titulos: [
        "1º Dan JKS"
      ]
    }
  ],
  japon: [
    {
      id: "inst-jp-1",
      nombre: "KAGAWA Masao",
      grado: "9th Dan",
      foto: "src/img/KAGAWA Masao.jpg",
      titulos: [
        "Chief Instructor",
        "9th Dan",
        "Place of birth: Osaka",
        "Education: Teikyo University"
      ]
    },
    {
      id: "inst-jp-2",
      nombre: "ISHIMINE Minoru",
      grado: "6th Dan",
      foto: "src/img/ISHIMINE Minoru.jpg",
      titulos: [
        "Director",
        "6th Dan",
        "Place of birth: Okinawa",
        "Education: Okinawa Kokusai University"
      ]
    },
    {
      id: "inst-jp-3",
      nombre: "KANAYAMA Kosho",
      grado: "7th Dan",
      foto: "src/img/KANAYAMA Kosho.jpg",
      titulos: [
        "General Manager",
        "7th Dan",
        "Place of birth: Osaka",
        "Education: Teikyo University"
      ]
    },
    {
      id: "inst-jp-4",
      nombre: "YAMAGUCHI Takashi",
      grado: "7th Dan",
      foto: "src/img/YAMAGUCHI Takashi.jpg",
      titulos: [
        "Chief of International Department",
        "7th Dan",
        "Place of birth: Ibaraki",
        "Education: Teikyo University"
      ]
    },
    {
      id: "inst-jp-5",
      nombre: "INADA Yasuhisa",
      grado: "6th Dan",
      foto: "src/img/INADA Yasuhisa.jpg",
      titulos: [
        "Headquarters Instructor",
        "6th Dan",
        "Place of birth: Saitama",
        "Education: Teikyo University"
      ]
    },
    {
      id: "inst-jp-6",
      nombre: "MAKITA Takuya",
      grado: "6th Dan",
      foto: "src/img/MAKITA Takuya.jpg",
      titulos: [
        "Deputy Secretary General",
        "6th Dan",
        "Place of birth: Nagano",
        "Education: Teikyo University"
      ]
    },
    {
      id: "inst-jp-7",
      nombre: "MATSUE Hajime",
      grado: "5th Dan",
      foto: "src/img/MATSUE Hajime.jpg",
      titulos: [
        "Deputy Secretary General",
        "5th Dan",
        "Place of birth: Shizuoka",
        "Education: Waseda University"
      ]
    },
    {
      id: "inst-jp-8",
      nombre: "KAGAWA Hideyoshi",
      grado: "5th Dan",
      foto: "src/img/KAGAWA Hideyoshi.jpg",
      titulos: [
        "Headquarters Instructor",
        "5th Dan",
        "Place of birth: Tokyo",
        "Education: Teikyo University"
      ]
    },
    {
      id: "inst-jp-9",
      nombre: "OKAMOTO Saori",
      grado: "5th Dan",
      foto: "src/img/OKAMOTO Saori.jpg",
      titulos: [
        "Headquarters Instructor",
        "5th Dan",
        "Place of birth: Aichi",
        "Education: Teikyo University"
      ]
    },
    {
      id: "inst-jp-10",
      nombre: "WATANABE Daisuke",
      grado: "5th Dan",
      foto: "src/img/WATANABE Daisuke.jpg",
      titulos: [
        "Headquarters Instructor",
        "5th Dan",
        "Place of birth: Tochigi",
        "Education: Teikyo University"
      ]
    },
    {
      id: "inst-jp-11",
      nombre: "ARIMOTO Koji",
      grado: "5th Dan",
      foto: "src/img/ARIMOTO Koji.jpg",
      titulos: [
        "Headquarters Instructor",
        "5th Dan",
        "Place of birth: Okayama",
        "Education: Teikyo University"
      ]
    },
    {
      id: "inst-jp-12",
      nombre: "TOYAMA Shohei",
      grado: "5th Dan",
      foto: "src/img/TOYAMA Shohei.jpg",
      titulos: [
        "Headquarters Instructor",
        "5th Dan",
        "Place of birth: Nagasaki",
        "Education: Teikyo University"
      ]
    },
    {
      id: "inst-jp-13",
      nombre: "NAKAGAWA Seiya",
      grado: "2nd Dan",
      foto: "src/img/NAKAGAWA Seiya.jpg",
      titulos: [
        "Instructors course trainee",
        "2nd Dan",
        "Place of birth: Ishikawa",
        "Education: Teikyo University"
      ]
    }
  ]
};
