
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/kids-learning/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/kids-learning"
  },
  {
    "renderMode": 2,
    "route": "/kids-learning/category/english"
  },
  {
    "renderMode": 2,
    "route": "/kids-learning/category/maths"
  },
  {
    "renderMode": 2,
    "route": "/kids-learning/category/maths/addition"
  },
  {
    "renderMode": 2,
    "redirectTo": "/kids-learning",
    "route": "/kids-learning/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 933, hash: '619d52ae1b4e9b560758e80f19427246659f1ab4ced64d95bd16b095c964b4d6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: 'c43bd6c03217994eb8a5a9f88dd160a455aab7df0d6db4d1964f86adbb44a500', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6686, hash: 'a2282d5847f796bbd7bbb95d70fa41540f582c6a3756c38de4c1f2a4e3c95fd2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'category/english/index.html': {size: 6698, hash: '836617af75c453d5deb4be47dcbc194f357be5381752a7fcced409ce2d500e0f', text: () => import('./assets-chunks/category_english_index_html.mjs').then(m => m.default)},
    'category/maths/addition/index.html': {size: 15806, hash: '28b99f528ad535c9a09ac3f96ef5e9d1ebabb86a439c7f6c2d8327540a8c94d3', text: () => import('./assets-chunks/category_maths_addition_index_html.mjs').then(m => m.default)},
    'category/maths/index.html': {size: 7104, hash: 'd5ac1054fa31c56ee4683b51857a2bd3df3e4ea5adf6313924e93c80b588f6a0', text: () => import('./assets-chunks/category_maths_index_html.mjs').then(m => m.default)},
    'styles-XGYWNQKT.css': {size: 298, hash: 'mfN65p5Fv34', text: () => import('./assets-chunks/styles-XGYWNQKT_css.mjs').then(m => m.default)}
  },
};
