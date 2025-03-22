
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Routing-serviceTask/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Routing-serviceTask/products"
  },
  {
    "renderMode": 2,
    "route": "/Routing-serviceTask/login"
  },
  {
    "renderMode": 2,
    "route": "/Routing-serviceTask/register"
  },
  {
    "renderMode": 2,
    "route": "/Routing-serviceTask/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 513, hash: 'd231687322f09a2d80ad02e536cef19fb6d3fed50bcc9d40ca744c49374e58c0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1026, hash: '49c8594d51275f8bc43379cb114cfe4fb28de192613bb49306f098272be0337f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 5709, hash: '82d749dc2645c58aef8664657aa753fa7581b14cf9ae4fd976fb400c4ac23f7a', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 23884, hash: '106e4fe3ae44205f847a7d08165e2ff3a05aa6c4858b0cf805b4f18da68e17f7', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 8667, hash: '619bf7c7edc5b758064ac4d8142f597631ebdec7d2a2829a8ed2f82592dc7585', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
