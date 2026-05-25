import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'login',      renderMode: RenderMode.Client },
  { path: 'cadastro',   renderMode: RenderMode.Client },
  { path: 'carrinho',   renderMode: RenderMode.Client },
  { path: 'checkout',   renderMode: RenderMode.Client },
  { path: 'confirmacao', renderMode: RenderMode.Client },
  { path: 'ofertas',          renderMode: RenderMode.Client },
  { path: 'admin',            renderMode: RenderMode.Client },
  { path: 'admin/editar/:id', renderMode: RenderMode.Client },
  { path: '**',               renderMode: RenderMode.Prerender },
];
