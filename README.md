# Portfolio - Luca De La Via

Portfolio profesional minimalista de Luca De La Via, desarrollador backend especializado en Java y Spring Boot.

## 🚀 Características

- **Diseño minimalista y moderno** con tema oscuro y efectos de galaxia
- **Fondo animado de galaxia** con estrellas que parpadean aleatoriamente
- **Tipografía unificada** con efectos granulados en todos los títulos
- **Totalmente responsivo** para todos los dispositivos
- **Optimizado para rendimiento** con Astro
- **Descarga directa de CV** en formato PDF
- **Navegación centrada** sin elementos redundantes
- **Footer ultra-minimalista** integrado con el fondo cósmico
- **SEO optimizado** con meta tags apropiados
- **Accesibilidad** mejorada con ARIA labels

## 🛠️ Tecnologías utilizadas

- [Astro](https://astro.build/) - Framework web estático
- CSS3 con animaciones keyframe avanzadas
- Efectos de gradiente radial para simulación de estrellas
- JavaScript vanilla para interactividad
- Google Fonts (Inter + Fira Code)

## 📂 Estructura del proyecto

```
/
├── public/
│   ├── favicon.svg
│   └── Curriculum Vitae Luca De La Via.pdf
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Education.astro
│   │   ├── Projects.astro
│   │   └── Contact.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── scripts/
│   │   └── site.js
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

## 🚀 Comandos disponibles

| Comando                | Acción                                      |
| :--------------------- | :------------------------------------------ |
| `npm install`          | Instala las dependencias                   |
| `npm run dev`          | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`        | Construye el sitio de producción en `./dist/` |
| `npm run preview`      | Previsualiza la construcción localmente, antes del despliegue |

## 🎨 Personalización

### Efectos Visuales
- **Fondo de galaxia**: Sistema de 4 capas de estrellas con animaciones aleatorias
- **Efectos granulados**: Todos los títulos tienen un efecto shimmer con `background-clip: text`
- **Animaciones suaves**: Transiciones fluidas y parpadeo aleatorio de estrellas

### Colores
Los colores están definidos como variables CSS en `src/styles/global.css`:

```css
:root {
  --bg: #0a0e1a;
  --accent: #58a6ff;
  --text-primary: #f0f6fc;
  --violet: #8b5cf6;
  /* ... más variables */
}
```

### Contenido
Edita los componentes en `src/components/` para actualizar el contenido:

- **Hero.astro**: Sección principal minimalista con descarga de CV
- **About.astro**: Información personal y habilidades
- **Experience.astro**: Experiencia laboral detallada
- **Education.astro**: Formación académica
- **Projects.astro**: Proyectos destacados
- **Contact.astro**: Formulario de contacto compacto

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Pantallas grandes (1200px+)

## ⚡ Rendimiento

- Carga rápida con Astro
- Imágenes optimizadas
- CSS minificado en producción
- JavaScript minimal

## 🔧 Desarrollo

1. Clona el repositorio
2. Instala las dependencias: `npm install`
3. Inicia el servidor de desarrollo: `npm run dev`
4. Abre `http://localhost:4321` en tu navegador

## 🚀 Despliegue

El sitio puede desplegarse en cualquier plataforma que soporte sitios estáticos:

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## 📞 Contacto

- **Email**: lucadelavia@gmail.com
- **LinkedIn**: [linkedin.com/in/lucadelavia](https://linkedin.com/in/lucadelavia)
- **GitHub**: [github.com/lucadelavia](https://github.com/lucadelavia)

---

Desarrollado con ❤️ por Luca De La Via