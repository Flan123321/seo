# 🎯 SEO Programmatic Site

Un sitio web Next.js que genera automáticamente **69 páginas de aterrizaje SEO-optimizadas** a partir de 8 nichos diferentes.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Servidor de producción
npm run start
```

Abre [http://localhost:3000](http://localhost:3000) para ver el sitio.

## 📊 Estadísticas

- **69 páginas estáticas** generadas automáticamente
- **8 nichos** diferentes
- **1 template universal** que sirve todos los nichos
- **100% SEO optimizado** con meta tags, Open Graph, y JSON-LD
- **TypeScript** para type safety
- **Responsive** en mobile, tablet y desktop

## 🏗️ Arquitectura

### Nichos Incluidos

1. 👨‍🍳 **Conversiones de Cocina** (30 páginas)
2. 🌙 **Significado de Sueños** (5 páginas)
3. 🔧 **Códigos de Error** (5 páginas)
4. 🚗 **Neumáticos de Autos** (5 páginas)
5. 💪 **Suplementos Deportivos** (5 páginas)
6. 🌿 **Plantas Medicinales** (5 páginas)
7. 📱 **Repuestos de Celulares** (5 páginas)
8. ✨ **Numerología Angelical** (5 páginas)

### Estructura del Proyecto

```
seo-programatic/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout raíz
│   ├── page.tsx           # Homepage
│   └── [slug]/            # Páginas dinámicas
│       └── page.tsx       # Template universal
├── components/            # Componentes reutilizables
│   ├── Header.tsx
│   ├── DynamicDataGrid.tsx  # ⭐ Componente clave
│   └── CTAButton.tsx
├── lib/
│   └── data.ts           # Agregación de datos
├── types/
│   └── index.ts          # Interfaces TypeScript
└── data/                 # JSON con contenido
    ├── conversiones-cocina.json
    ├── suenos-animales-parte1.json
    └── ... (8 archivos total)
```

## ✨ Características

### SEO Optimizado
- ✅ Meta tags dinámicos por página
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ JSON-LD structured data
- ✅ Breadcrumbs
- ✅ URLs limpias y semánticas

### Rendimiento
- ✅ Static Site Generation (SSG)
- ✅ Todas las páginas pre-renderizadas
- ✅ Carga ultra-rápida
- ✅ Core Web Vitals optimizados

### Escalabilidad
- ✅ Un template sirve todos los nichos
- ✅ Agregar nuevas páginas = agregar JSON
- ✅ De 69 a 10,000+ páginas sin cambiar código

## 🎨 Componente Clave: DynamicDataGrid

El componente `DynamicDataGrid` es la magia que hace que esto funcione:

```typescript
// Renderiza CUALQUIER estructura de datos
<DynamicDataGrid data={page.dynamic_data} />
```

Funciona para:
- Conversiones de cocina (from_unit, to_unit, ingredient)
- Sueños (animal, connotacion, numero_suerte)
- Códigos de error (marca, codigo_error, solucion_rapida)
- ¡Y cualquier otro nicho que agregues!

## 📈 Cómo Escalar

### Opción 1: Expandir Nichos Existentes

Edita los archivos JSON en `/data` y agrega más entradas:

```json
{
  "slug": "nueva-conversion",
  "primary_keyword": "keyword long-tail",
  "seo_title": "Título SEO optimizado",
  "meta_description": "Descripción persuasiva",
  "search_intent": "Informacional",
  "dynamic_data": {
    "campo1": "valor1",
    "campo2": "valor2"
  },
  "hook_intro": "Texto único que engancha",
  "monetization_focus": "Producto a vender"
}
```

### Opción 2: Agregar Nuevos Nichos

1. Crea nuevo archivo JSON en `/data`
2. Importa en `lib/data.ts`
3. Agrega configuración a `NICHES` array
4. Run `npm run build`

## 🚀 Deployment

### Vercel (Recomendado)

```bash
vercel deploy
```

### Netlify

```bash
npm run build
# Sube la carpeta /out
```

### Cualquier Host Estático

La carpeta `/out` contiene HTML estático listo para deploy.

## 📝 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linter
- `npm run type-check` - Verificar tipos TypeScript

## 🎯 Próximos Pasos

1. ✅ Sitio construido y funcionando
2. 🔄 Agregar más contenido JSON
3. 💰 Integrar links de afiliados
4. 📊 Configurar Google Analytics
5. 🗺️ Generar sitemap.xml
6. 🤖 Configurar robots.txt
7. 🚀 Deploy a producción

## 📚 Documentación

- Ver `RESUMEN-NICHOS-GENERADOS.md` para estrategia completa
- Ver `.gemini/antigravity/brain/.../walkthrough.md` para detalles técnicos
- Ver `.gemini/antigravity/brain/.../implementation_plan.md` para arquitectura

## 🎓 Stack Tecnológico

- **Next.js 15** - Framework React
- **TypeScript** - Type safety
- **CSS Modules** - Estilos scoped
- **Static Site Generation** - Pre-renderizado

## 📄 Licencia

MIT

---

**¿Listo para dominar Google con SEO programático?** 🚀

Construido con ❤️ usando Next.js y TypeScript
