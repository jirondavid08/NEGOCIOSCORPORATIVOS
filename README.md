# Negocios Corporativos — sitio web

Rediseño del sitio de Negocios Corporativos (negocioscorporativos.com.ec), construido con Next.js 15 +
Tailwind CSS, listo para desplegar en Vercel desde GitHub.

## Qué incluye

- Home, Servicios, Propiedades (catálogo con filtros), ficha de propiedad, Nosotros, Contacto y Galería.
- Versión en español (`/es`) e inglés (`/en`), con selector de idioma en el header. Francés y alemán quedan
  marcados como "Próximamente" (el sitio anterior los mostraba pero no tenían contenido real traducido).
- Selector de moneda USD/EUR en el header — es referencial: Ecuador opera oficialmente en USD, así que el
  valor en EUR es solo una conversión aproximada para visitantes internacionales, no una tasa en vivo.
- Modal de Ingresar/Registrarse con la misma estructura del sitio anterior. **Es solo interfaz por ahora**:
  no hay backend de usuarios conectado. Para activarlo de verdad hace falta decidir un proveedor de auth
  (por ejemplo Supabase o NextAuth + una base de datos) — avísame cuando quieras y lo conectamos.
- Formulario de contacto funcional vía `/api/contact`. Sin configuración adicional, los envíos quedan
  registrados en los logs de Vercel pero no se manda correo. Para que sí llegue un correo real:
  1. Crea una cuenta gratuita en [resend.com](https://resend.com).
  2. Genera un API key.
  3. Agrégalo en Vercel como variable de entorno `RESEND_API_KEY`.
  Mientras tanto, el botón de WhatsApp flotante y el de la página de contacto son el canal principal.
- Catálogo de propiedades con las 6 propiedades destacadas del sitio actual (`src/lib/properties.ts`).
  Como ya no hay panel de WordPress, para agregar/editar propiedades pídemelo por chat con los datos
  (fotos, precio, m2, ubicación) y actualizo el archivo y vuelvo a desplegar.
- Galería con marcadores de posición — súbeme las fotos reales de los proyectos y las incorporo.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Desplegar

1. Si existe una carpeta oculta `.git` dentro de este proyecto, bórrala primero (fue un intento de
   configuración desde el entorno de trabajo que no se completó del todo). Luego, desde esta carpeta en
   tu Mac (Terminal):

   ```bash
   git init
   git add -A
   git commit -m "Sitio Negocios Corporativos"
   ```

2. Crea un repositorio vacío en GitHub (sin README) y conéctalo:

   ```bash
   git remote add origin https://github.com/TU-USUARIO/negocios-corporativos.git
   git branch -M main
   git push -u origin main
   ```

3. En [vercel.com/new](https://vercel.com/new), importa ese repositorio (Vercel detecta Next.js automáticamente).
4. (Opcional) agrega la variable de entorno `RESEND_API_KEY` para que el formulario de contacto envíe correos.
5. Despliega. Cuando quieras usar el dominio real (negocioscorporativos.com.ec), lo agregas en
   Vercel → Settings → Domains y apuntas los DNS según las instrucciones que te da Vercel.

## Marca

Colores y tipografías tomados del "Manual de Marca Negocios Corporativos" (2023): azul marino `#050a30`
como color principal, con `#1b315b`, `#324149` y `#737373` de apoyo, tipografía Montserrat para texto y
Playfair Display para títulos (como aproximación a Blacker Sans, que no está disponible como fuente web).
