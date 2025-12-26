
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/amor',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/amor"
  },
  {
    "renderMode": 2,
    "route": "/amor/texto"
  },
  {
    "renderMode": 2,
    "redirectTo": "/amor",
    "route": "/amor/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 589, hash: '7276e40d62ee9bdd6d3a5e66255fcc0f9425a2a3f2396cabf324018eb9d67f93', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 946, hash: '2935bbf55e7d81a1c8c6bbc8aeb685e422bd85cb6af2a947f6dbd16f3c890f2e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'texto/index.html': {size: 5706, hash: 'e76cce3874a00e5f89bed52525cd8d40f8a14ad2c1e60e2b226811d1822771dc', text: () => import('./assets-chunks/texto_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6940, hash: 'b56bd45e27b123782cda0649c7df15e22715b02d5c2575e094f37ee4b5b31e25', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YILLCOEH.css': {size: 31, hash: 'C9AZ2GEY0pg', text: () => import('./assets-chunks/styles-YILLCOEH_css.mjs').then(m => m.default)}
  },
};
