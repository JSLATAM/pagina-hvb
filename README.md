# Hospital Veterinario Bilbao

Sitio web institucional de HVB. El código y la vista previa son públicos y gratuitos.

**Para ver el sitio:** https://jslatam.github.io/pagina-hvb/

El repositorio está en https://github.com/JSLATAM/pagina-hvb

## Desarrollo

```bash
npm install
npm run dev
```

## Validación

```bash
npm run lint
npm run typecheck
npm run build
```

Cada push a `main` actualiza la vista previa en GitHub Pages.

## Configuración

Los datos de contacto, horario, redes y analytics viven en `config/site.ts` y `.env.example`.
Mientras un valor comience con `TODO_`, el sitio lo trata como no confirmado.
