
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/amor/',
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
    'index.csr.html': {size: 590, hash: 'af57d07e5512ab3b93b7f80ef5142f99cf287e263686fa9d0718681366095c61', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 947, hash: 'ec92d5a08f26c4f02478912595fd6d2272672efa563b1add6d09ae9917fecb5c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6941, hash: '9963c0165f6133ebe42040e4e219eb5c8492e0413f0a308f02ccdb9ab8a078f5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'texto/index.html': {size: 5707, hash: '7c28b349cc7e3433be8364ff97b1b24ae47201fb4e5fe7c9a8f1755eca33cef4', text: () => import('./assets-chunks/texto_index_html.mjs').then(m => m.default)},
    'styles-YILLCOEH.css': {size: 31, hash: 'C9AZ2GEY0pg', text: () => import('./assets-chunks/styles-YILLCOEH_css.mjs').then(m => m.default)}
  },
};
