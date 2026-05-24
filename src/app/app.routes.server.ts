import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'carrinho',    renderMode: RenderMode.Client },
  { path: 'checkout',   renderMode: RenderMode.Client },
  { path: 'confirmacao', renderMode: RenderMode.Client },
  { path: 'ofertas',    renderMode: RenderMode.Client },
  { path: '**',         renderMode: RenderMode.Prerender },
];
