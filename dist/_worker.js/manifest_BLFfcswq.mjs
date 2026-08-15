globalThis.process ??= {}; globalThis.process.env ??= {};
import { p as decodeKey } from './chunks/astro/server_CBvyUju7.mjs';
import './chunks/astro-designed-error-pages_BHS1tY79.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_8xUDQJcN.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/Mc/Documents/antigravity/IPTV%20netherlands/","cacheDir":"file:///Users/Mc/Documents/antigravity/IPTV%20netherlands/node_modules/.astro/","outDir":"file:///Users/Mc/Documents/antigravity/IPTV%20netherlands/dist/","srcDir":"file:///Users/Mc/Documents/antigravity/IPTV%20netherlands/src/","publicDir":"file:///Users/Mc/Documents/antigravity/IPTV%20netherlands/public/","buildClientDir":"file:///Users/Mc/Documents/antigravity/IPTV%20netherlands/dist/","buildServerDir":"file:///Users/Mc/Documents/antigravity/IPTV%20netherlands/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"guides/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.B8z089_k.css"}],"routeData":{"route":"/guides","isIndex":true,"type":"page","pattern":"^\\/guides\\/?$","segments":[[{"content":"guides","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/guides/index.astro","pathname":"/guides","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.B8z089_k.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.B8z089_k.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.B8z089_k.css"}],"routeData":{"route":"/disclaimer","isIndex":false,"type":"page","pattern":"^\\/disclaimer\\/?$","segments":[[{"content":"disclaimer","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/disclaimer.astro","pathname":"/disclaimer","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.B8z089_k.css"}],"routeData":{"route":"/dmca","isIndex":false,"type":"page","pattern":"^\\/dmca\\/?$","segments":[[{"content":"dmca","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dmca.astro","pathname":"/dmca","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.B8z089_k.css"}],"routeData":{"route":"/landing-v2","isIndex":false,"type":"page","pattern":"^\\/landing-v2\\/?$","segments":[[{"content":"landing-v2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/landing-v2.astro","pathname":"/landing-v2","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.B8z089_k.css"}],"routeData":{"route":"/landing-v3","isIndex":false,"type":"page","pattern":"^\\/landing-v3\\/?$","segments":[[{"content":"landing-v3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/landing-v3.astro","pathname":"/landing-v3","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.B8z089_k.css"}],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.B8z089_k.css"}],"routeData":{"route":"/referral","isIndex":false,"type":"page","pattern":"^\\/referral\\/?$","segments":[[{"content":"referral","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/referral.astro","pathname":"/referral","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.B8z089_k.css"}],"routeData":{"route":"/refund","isIndex":false,"type":"page","pattern":"^\\/refund\\/?$","segments":[[{"content":"refund","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/refund.astro","pathname":"/refund","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.B8z089_k.css"}],"routeData":{"route":"/terms","isIndex":false,"type":"page","pattern":"^\\/terms\\/?$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.astro","pathname":"/terms","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.B8z089_k.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://iptvnederlandse.store","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/guides/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/guides/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/guides/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/guides/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/compare/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/disclaimer.astro",{"propagation":"none","containsHead":true}],["/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/dmca.astro",{"propagation":"none","containsHead":true}],["/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/landing-v2.astro",{"propagation":"none","containsHead":true}],["/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/landing-v3.astro",{"propagation":"none","containsHead":true}],["/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/locations/[city].astro",{"propagation":"none","containsHead":true}],["/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/privacy.astro",{"propagation":"none","containsHead":true}],["/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/referral.astro",{"propagation":"none","containsHead":true}],["/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/refund.astro",{"propagation":"none","containsHead":true}],["/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/terms.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/compare/[slug]@_@astro":"pages/compare/_slug_.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/disclaimer@_@astro":"pages/disclaimer.astro.mjs","\u0000@astro-page:src/pages/dmca@_@astro":"pages/dmca.astro.mjs","\u0000@astro-page:src/pages/guides/[slug]@_@astro":"pages/guides/_slug_.astro.mjs","\u0000@astro-page:src/pages/guides/index@_@astro":"pages/guides.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/landing-v2@_@astro":"pages/landing-v2.astro.mjs","\u0000@astro-page:src/pages/landing-v3@_@astro":"pages/landing-v3.astro.mjs","\u0000@astro-page:src/pages/locations/[city]@_@astro":"pages/locations/_city_.astro.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"pages/privacy.astro.mjs","\u0000@astro-page:src/pages/referral@_@astro":"pages/referral.astro.mjs","\u0000@astro-page:src/pages/refund@_@astro":"pages/refund.astro.mjs","\u0000@astro-page:src/pages/terms@_@astro":"pages/terms.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BLFfcswq.mjs","/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_6h8YS4xs.mjs","/Users/Mc/Documents/antigravity/IPTV netherlands/.astro/content-assets.mjs":"chunks/content-assets_XqCgPAV2.mjs","/Users/Mc/Documents/antigravity/IPTV netherlands/.astro/content-modules.mjs":"chunks/content-modules_Bvq7llv8.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_C5CWj-rc.mjs","/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.B8z089_k.css","/favicon.svg","/og-image.svg","/robots.txt","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/index.js","/_worker.js/noop-entrypoint.mjs","/_worker.js/renderers.mjs","/images/guide-ip-tv-abonnement.svg","/images/guide-ip-tv-kopen.svg","/images/guide-iptv-abbo-kopen.svg","/_worker.js/_astro/_slug_.B8z089_k.css","/_worker.js/chunks/AlertCircle_IsMEJC5_.mjs","/_worker.js/chunks/ArrowLeft_C9nM3NAM.mjs","/_worker.js/chunks/CTASection_BIp9D6LU.mjs","/_worker.js/chunks/CheckCircle2_B0yVlM4b.mjs","/_worker.js/chunks/Clock_CDbXE4Pl.mjs","/_worker.js/chunks/ContactForm_CHfVc5m8.mjs","/_worker.js/chunks/FAQSection_iZFUowjn.mjs","/_worker.js/chunks/FileText_PL2fc3x1.mjs","/_worker.js/chunks/FloatingWhatsApp_7f_lhg-5.mjs","/_worker.js/chunks/Gift_DI-GtxmP.mjs","/_worker.js/chunks/Share2_CzCuaPnU.mjs","/_worker.js/chunks/ShieldCheck_hM5ZieHG.mjs","/_worker.js/chunks/SocialPopup_BaYILefn.mjs","/_worker.js/chunks/Sparkles_NOg4rkZ0.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_BY2ZO5Ud.mjs","/_worker.js/chunks/_astro_assets_CqveeNPw.mjs","/_worker.js/chunks/_astro_content_De3-IZV3.mjs","/_worker.js/chunks/_astro_data-layer-content_C5CWj-rc.mjs","/_worker.js/chunks/astro-designed-error-pages_BHS1tY79.mjs","/_worker.js/chunks/astro_BhQE2VhR.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/consts_DBS1dnOp.mjs","/_worker.js/chunks/content-assets_XqCgPAV2.mjs","/_worker.js/chunks/content-modules_Bvq7llv8.mjs","/_worker.js/chunks/noop-middleware_8xUDQJcN.mjs","/_worker.js/chunks/parse_CKDs5fGw.mjs","/_worker.js/chunks/path_BgNISshD.mjs","/_worker.js/chunks/remote_CVXTZJrr.mjs","/_worker.js/chunks/render-context_BslJ-3IF.mjs","/_worker.js/chunks/sharp_6h8YS4xs.mjs","/_worker.js/pages/404.astro.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/pages/contact.astro.mjs","/_worker.js/pages/disclaimer.astro.mjs","/_worker.js/pages/dmca.astro.mjs","/_worker.js/pages/guides.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/landing-v2.astro.mjs","/_worker.js/pages/landing-v3.astro.mjs","/_worker.js/pages/privacy.astro.mjs","/_worker.js/pages/referral.astro.mjs","/_worker.js/pages/refund.astro.mjs","/_worker.js/pages/terms.astro.mjs","/_worker.js/chunks/astro/server_CBvyUju7.mjs","/_worker.js/pages/compare/_slug_.astro.mjs","/_worker.js/pages/guides/_slug_.astro.mjs","/_worker.js/pages/locations/_city_.astro.mjs","/guides/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"b47gyZGHkzoGuwte1VioXcgXttNciV6IYTJWgqOrhjE=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
