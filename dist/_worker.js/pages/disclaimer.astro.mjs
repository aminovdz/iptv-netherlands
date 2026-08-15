globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro } from '../chunks/astro/server_CBvyUju7.mjs';
import { g as $$, $ as $$Layout, a as $$StickyHeader, d as $$FloatingWhatsApp, e as $$Footer } from '../chunks/FloatingWhatsApp_7f_lhg-5.mjs';
import { $ as $$AlertCircle } from '../chunks/AlertCircle_IsMEJC5_.mjs';
import { $ as $$CheckCircle2 } from '../chunks/CheckCircle2_B0yVlM4b.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://iptvnederlandse.store");
const $$Info = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Info;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "info", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <path d="M12 16v-4"></path> <path d="M12 8h.01"></path> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/Info.astro", void 0);

const $$Astro = createAstro("https://iptvnederlandse.store");
const $$Shield = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Shield;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "shield", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/Shield.astro", void 0);

const $$Disclaimer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Disclaimer & Juridische Kennisgeving", "description": "Lees de offici\xEBle disclaimer van IPTV Nederlandse aangaande dienstverlening, internetverbindingen en hardwarecompatibiliteit." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StickyHeader", $$StickyHeader, {})} ${maybeRenderHead()}<main class="pt-32 pb-24 relative overflow-hidden bg-[#0a0a0f] min-h-screen"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <!-- Page Header --> <div class="text-center mb-12 space-y-3"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-amber-400 uppercase tracking-wider"> ${renderComponent($$result2, "Info", $$Info, { "class": "w-3.5 h-3.5" })}
Juridische Mededeling
</div> <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
Disclaimer <span class="text-gradient">IPTV Nederlandse</span> </h1> <p class="text-xs sm:text-sm text-gray-400">Belangrijke informatie over onze dienstverlening</p> </div> <!-- Content Box --> <div class="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 space-y-8 text-sm sm:text-base text-gray-300 leading-relaxed"> <section class="space-y-3"> <h2 class="text-xl font-bold text-white flex items-center gap-2"> ${renderComponent($$result2, "AlertCircle", $$AlertCircle, { "class": "w-5 h-5 text-amber-400" })}
1. Informatieve Aard & Aansprakelijkheid
</h2> <p>
De informatie op deze website (<strong>iptvnederlandse.store</strong>) wordt met de grootst mogelijke zorg samengesteld. Desondanks kunnen wij geen garanties geven omtrent de volledige foutloosheid of continue ononderbroken beschikbaarheid van externe netwerkinfrastructuren.
</p> </section> <section class="space-y-3"> <h2 class="text-xl font-bold text-white flex items-center gap-2"> ${renderComponent($$result2, "Shield", $$Shield, { "class": "w-5 h-5 text-[#38bdf8]" })}
2. Handelsmerken & Merknamen
</h2> <p>
Alle productnamen, logo's, merken en geregistreerde handelsmerken van hardware en besturingssystemen (zoals Samsung, LG, Android, Apple, Windows, Fire TV) die op deze website worden genoemd ter aanduiding van apparaatcompatibiliteit, zijn het eigendom van hun respectievelijke eigenaren. Het gebruik van deze namen impliceert geen enkele affiliatie, sponsoring of goedkeuring door de desbetreffende merkhouders.
</p> </section> <section class="space-y-3"> <h2 class="text-xl font-bold text-white flex items-center gap-2"> ${renderComponent($$result2, "CheckCircle2", $$CheckCircle2, { "class": "w-5 h-5 text-emerald-400" })}
3. Netwerk- en Internetsnelheid
</h2> <p>
Streamingprestaties in 4K UHD en Full HD zijn afhankelijk van de kwaliteit en stabiliteit van de lokale internetverbinding en de configuratie van de lokale router van de eindgebruiker. Wij raden bekabelde ethernetverbindingen (LAN) of 5GHz Wi-Fi aan voor de beste kijkervaring.
</p> </section> </div> </div> </main> ${renderComponent($$result2, "FloatingWhatsApp", $$FloatingWhatsApp, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/disclaimer.astro", void 0);

const $$file = "/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/disclaimer.astro";
const $$url = "/disclaimer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Disclaimer,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
