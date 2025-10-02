# Portfolio - Luca De La Via

Portfolio profesional de Luca De La Via, desarrollador backend especializado en Java y Spring Boot.

## 🚀 Características

- **Diseño moderno y minimalista** con modo oscuro
- **Totalmente responsivo** para todos los dispositivos
- **Optimizado para rendimiento** con Astro
- **Navegación suave** entre secciones
- **Animaciones sutiles** con CSS
- **SEO optimizado** con meta tags apropiados
- **Accesibilidad** mejorada con ARIA labels

## 🛠️ Tecnologías utilizadas

- [Astro](https://astro.build/) - Framework web estático
- CSS3 con variables CSS personalizadas
- JavaScript vanilla para interactividad
- Google Fonts (Inter + Fira Code)

## 📂 Estructura del proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
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

### Colores
Los colores están definidos como variables CSS en `src/styles/global.css`:

```css
:root {
  --bg: #0a0e1a;
  --accent: #58a6ff;
  --text-primary: #f0f6fc;
  /* ... más variables */
}
```

### Contenido
Edita los componentes en `src/components/` para actualizar el contenido:

- **Hero.astro**: Sección principal con introducción
- **About.astro**: Información personal y habilidades
- **Experience.astro**: Experiencia laboral y educación
- **Projects.astro**: Proyectos destacados
- **Contact.astro**: Información de contacto y formulario

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