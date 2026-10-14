# 🥋 Sitio Web Oficial - JKS Karate-Do México & Japón

Página web profesional y responsiva para el Dojo (Japan Karate Shoto Federation / JKS México). Desarrollada con un stack nativo y optimizado de **HTML5, CSS3 y JavaScript moderno**.

---

## 🚀 Despliegue Inmediato (Sin Comandos en el Servidor)

Este proyecto está diseñado para funcionar **100% de manera estática**, sin requerir instalación de `Node.js`, `npm`, bases de datos ni ejecución de comandos en el servidor.

### ¿Cómo subirlo a tu Hosting / Servidor?

1. **Vía cPanel / Administrador de Archivos**:
   - Ingresa a tu cPanel o panel de control del hosting.
   - Abre el **Administrador de Archivos** (`File Manager`).
   - Ve a la carpeta raíz de tu dominio (generalmente `public_html` o `www`).
   - Sube todos los archivos y carpetas del proyecto (`index.html`, `css/`, `js/`, `assets/`) o sube el archivo `.zip` y descomprímelo ahí mismo.
   - ¡Listo! Tu sitio estará inmediatamente en línea.

2. **Vía FTP (FileZilla / WinSCP)**:
   - Conéctate a tu servidor con tus credenciales FTP.
   - Arrastra y suelta el contenido de la carpeta `dojoV1` dentro del directorio `public_html`.

3. **Vía GitHub Pages / Vercel / Netlify (Opcional)**:
   - Puedes arrastrar la carpeta directamente a Netlify Drop o subirla a un repositorio de GitHub y habilitar GitHub Pages.

---

## 📂 Estructura del Proyecto

```
dojoV1/
├── index.html                  # Estructura semántica principal y metadatos SEO
├── css/
│   ├── style.css               # Sistema de diseño, tokens, layouts y responsividad
│   └── animations.css          # Animaciones de scroll, microinteracciones y efectos
├── js/
│   ├── app.js                  # Lógica interactiva (menú, modales, FAQ, buscador, tabs)
│   ├── dojos-data.js           # Base de datos editable de Dojos en México
│   └── instructores-data.js    # Base de datos editable de Instructores (México y Japón)
└── README.md                   # Este archivo de instrucciones
```

---

## 📑 Secciones Incluidas

1. **Header & Hero**: Barra de navegación sticky con efecto blur, logotipo JKS tradicional, llamado a la acción y estadísticas.
2. **Conócenos**: Filosofía del Karate Shotokan, Misión formativa y los **5 Preceptos del Dojo Kun** con caracteres Kanji tradicionales.
3. **Dojos México**: Directorio interactivo de dojos con **buscador en tiempo real** por nombre/ciudad y **filtros rápidos por estado** (CDMX, Jalisco, Nuevo León, Querétaro, Puebla, etc.), enlace directo a WhatsApp y Google Maps.
4. **Instructores México**: Cuadrícula de instructores nacionales con sus grados Dan y botón para abrir modal interactivo con biografía y logros.
5. **JKS Japón**: Información sobre la sede mundial en **Sugamo, Tokio**, el legado de Tetsuhiko Asai Shihan y los estándares técnicos internacionales.
6. **Instructores Japón**: Perfiles y trayectoria de los maestros legendarios del Honbu Dojo (Masao Kagawa Shihan 9° Dan, Tetsuhiko Asai, Kousaku Yokota, etc.).
7. **JKS en el Mundo**: Pestañas interactivas para explorar la presencia de la federación en América, Europa, Asia y África.
8. **Contacto, Afiliación y FAQ**: Acordeón interactivo de preguntas frecuentes y formulario para aspirantes o dojos que deseen afiliarse.
9. **Footer**: Enlaces rápidos, datos de la sede central y derechos reservados.

---

## ✏️ ¿Cómo agregar o modificar Dojos e Instructores?

No necesitas modificar el código HTML para agregar más dojos o instructores:

- **Para agregar/editar Dojos**: Abre el archivo `js/dojos-data.js` y edita o agrega objetos al arreglo `DOJOS_MEXICO`.
- **Para agregar/editar Instructores**: Abre el archivo `js/instructores-data.js` y modifica las secciones `mexico` o `japon`.

Los cambios se reflejarán automáticamente en el diseño y en los filtros del sitio web.
