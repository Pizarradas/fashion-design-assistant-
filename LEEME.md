# Estilo de Jose: web descargable

## Abrirla
Descomprime la carpeta y haz doble clic en `index.html`. Se abre en cualquier navegador moderno, sin instalar nada.

- **Funciona sin conexión:** todo el contenido, las imágenes, las pestañas, los filtros, el scroll suave y las animaciones. GSAP y Lenis van dentro de la carpeta `vendor/`.
- **Necesita conexión:**
  - Las tipografías Syne e Inter se cargan de Google Fonts. Sin conexión se usan fuentes del sistema con las mismas medidas, así que el diseño no se descoloca.
  - Los enlaces a las tiendas.

Si prefieres servirla en local, ejecuta `python3 -m http.server` dentro de la carpeta y abre http://localhost:8000.

## Qué hay dentro
| Ruta | Contenido |
|---|---|
| `index.html` | La página completa: contenido, estilos propios y datos de las combinaciones |
| `css/syx.css` | Sistema de diseño SYX (tema example-03) |
| `css/lenis.css` | Estilos base de Lenis |
| `js/syx-tabs.local.js` | Pestañas de SYX, en versión de script clásico para que funcionen con doble clic |
| `js/orquestador.js` | Plantilla del orquestador de la skill GSAP + Lenis |
| `js/movimiento.js` | Animaciones de la página |
| `vendor/gsap/`, `vendor/lenis/` | GSAP 3.15.1 (ScrollTrigger y SplitText) y Lenis 1.3.27, con sus licencias |
| `img/` | Ilustraciones de los looks y las combinaciones |
| `fonts/` | Fuentes que trae el tema SYX |
| `GRID-SPEC.md` | Especificación de la retícula (skill Grid System) |
| `movimiento.perfil` | Perfil de movimiento elegido (gsap+lenis) |

## Diferencias con la versión publicada
- En la versión publicada, GSAP y Lenis se cargan desde el CDN jsDelivr. Aquí van en `vendor/`.
- En la versión publicada, las pestañas se cargan como módulo ES (`js/syx-tabs.js`). Aquí se usa `js/syx-tabs.local.js`, porque los navegadores bloquean los módulos abiertos desde `file://`.

El resto es idéntico.
