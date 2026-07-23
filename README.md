# 🏃‍♂️ Endurance APP

Aplicación web para organizar y consultar información relacionada con el mundo de la resistencia: deportes, entrenadores y atletas. Está construida con **Astro** y utiliza **Bootstrap** para la interfaz.

> 🚧 Proyecto en desarrollo. Algunas secciones son todavía páginas iniciales y los datos de deportes se cargan desde modelos locales.

## ✨ Funcionalidades actuales

- 🏠 Página de inicio.
- 🏅 Listado de deportes con nombre y descripción.
- 🧑‍🏫 Sección inicial de entrenadores.
- 🏃‍♀️ Ruta preparada para atletas.
- 🧭 Barra de navegación compartida entre las páginas.
- 📦 Modelos separados para usuarios, atletas, entrenadores y deportes.

## 🛠️ Tecnologías

- ⚡ [Astro](https://astro.build/)
- 🎨 [Bootstrap](https://getbootstrap.com/) mediante CDN
- 🟨 JavaScript
- 🟢 Node.js `>=22.12.0`

## 📁 Estructura del proyecto

```text
/
├── public/                 # Archivos públicos y favicon
├── src/
│   ├── components/         # Componentes reutilizables, como la navegación
│   ├── layouts/            # Layout principal de la aplicación
│   ├── models/             # Datos y modelos de dominio
│   ├── pages/              # Rutas de Astro
│   │   ├── deportes/       # Listado de deportes
│   │   └── entrenadores/   # Sección de entrenadores
│   └── services/           # Servicios de acceso a datos
├── astro.config.mjs       # Configuración de Astro
├── package.json            # Dependencias y scripts
└── tsconfig.json           # Configuración de TypeScript
```

## 🚀 Instalación

Necesitas tener instalado Node.js `22.12.0` o una versión superior.

```bash
git clone <url-del-repositorio>
cd enduranceapp-astro
npm install
```

## 💻 Comandos disponibles

Ejecuta los comandos desde la raíz del proyecto:

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo en `http://localhost:4321`. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Previsualiza localmente la compilación de producción. |
| `npm run astro ...` | Ejecuta comandos de la CLI de Astro. |

## 🧭 Rutas principales

- `/` - Página de inicio.
- `/deportes` - Consulta de deportes disponibles.
- `/entrenadores` - Sección de entrenadores.
- `/atletas` - Ruta prevista para atletas.

## 📚 Documentación

Para ampliar el proyecto, consulta la [documentación oficial de Astro](https://docs.astro.build/).
