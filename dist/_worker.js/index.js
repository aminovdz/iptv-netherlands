globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BY2ZO5Ud.mjs';
import { manifest } from './manifest_BLFfcswq.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/compare/_slug_.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/disclaimer.astro.mjs');
const _page5 = () => import('./pages/dmca.astro.mjs');
const _page6 = () => import('./pages/guides/_slug_.astro.mjs');
const _page7 = () => import('./pages/guides.astro.mjs');
const _page8 = () => import('./pages/landing-v2.astro.mjs');
const _page9 = () => import('./pages/landing-v3.astro.mjs');
const _page10 = () => import('./pages/locations/_city_.astro.mjs');
const _page11 = () => import('./pages/privacy.astro.mjs');
const _page12 = () => import('./pages/referral.astro.mjs');
const _page13 = () => import('./pages/refund.astro.mjs');
const _page14 = () => import('./pages/terms.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/compare/[slug].astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/disclaimer.astro", _page4],
    ["src/pages/dmca.astro", _page5],
    ["src/pages/guides/[slug].astro", _page6],
    ["src/pages/guides/index.astro", _page7],
    ["src/pages/landing-v2.astro", _page8],
    ["src/pages/landing-v3.astro", _page9],
    ["src/pages/locations/[city].astro", _page10],
    ["src/pages/privacy.astro", _page11],
    ["src/pages/referral.astro", _page12],
    ["src/pages/refund.astro", _page13],
    ["src/pages/terms.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
