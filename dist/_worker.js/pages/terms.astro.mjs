globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro } from '../chunks/astro/server_CBvyUju7.mjs';
import { g as $$, $ as $$Layout, a as $$StickyHeader, d as $$FloatingWhatsApp, e as $$Footer } from '../chunks/FloatingWhatsApp_7f_lhg-5.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://iptvnederlandse.store");
const $$FileCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FileCheck;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "file-check", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path> <path d="M14 2v5a1 1 0 0 0 1 1h5"></path> <path d="m9 15 2 2 4-4"></path> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/FileCheck.astro", void 0);

const $$Terms = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Algemene Voorwaarden", "description": "Lees de algemene voorwaarden van IPTV Nederlandse. Duidelijke afspraken over levering, gebruik en ondersteuning van jouw IPTV abonnement." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StickyHeader", $$StickyHeader, {})} ${maybeRenderHead()}<main class="pt-32 pb-24 relative overflow-hidden bg-[#0a0a0f] min-h-screen"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <!-- Page Header --> <div class="text-center mb-12 space-y-3"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#38bdf8] uppercase tracking-wider"> ${renderComponent($$result2, "FileCheck", $$FileCheck, { "class": "w-3.5 h-3.5" })}
Officiële Bepalingen
</div> <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
Algemene Voorwaarden <span class="text-gradient">IPTV Nederlandse</span> </h1> <p class="text-xs sm:text-sm text-gray-400">Geldig voor alle aankopen op iptvnederlandse.store</p> </div> <!-- Content Box --> <div class="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 space-y-8 text-sm sm:text-base text-gray-300 leading-relaxed"> <section class="space-y-3"> <h2 class="text-xl font-bold text-white">1. Algemeen & Toepasselijkheid</h2> <p>
Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, bestellingen en overeenkomsten gesloten via de website <strong>iptvnederlandse.store</strong>. Door het plaatsen van een bestelling ga je akkoord met deze voorwaarden.
</p> </section> <section class="space-y-3"> <h2 class="text-xl font-bold text-white">2. Digitale Levering & Activatie</h2> <p>
Onze diensten betreffen uitsluitend direct digitaal geleverde media-toegangsgegevens (zoals M3U-afspeellijsten en Xtream Codes). Na ontvangst van een succesvolle betaling wordt het abonnement doorgaans binnen 5 minuten geactiveerd en per WhatsApp of e-mail toegezonden.
</p> </section> <section class="space-y-3"> <h2 class="text-xl font-bold text-white">3. Gebruik & Gelijktijdige Verbindingen</h2> <p>
Standaard accounts zijn bestemd voor persoonlijk gebruik binnen één huishouden. Tenzij expliciet een multi-room abonnement is aangeschaft, is één gelijktijdige streamverbinding per account toegestaan om serveroverbelasting te voorkomen.
</p> </section> <section class="space-y-3"> <h2 class="text-xl font-bold text-white">4. Betalingen & Tarieven</h2> <p>
Alle vermelde prijzen zijn in Euro's (€) en betreffen eenmalige betalingen voor de gekozen abonnementsduur (1, 3, 6 of 12 maanden). Er vindt <strong>geen automatische stilzwijgende verlenging</strong> of onverwachte incasso plaats. Verlenging geschiedt uitsluitend op initiatief van de klant.
</p> </section> <section class="space-y-3"> <h2 class="text-xl font-bold text-white">5. Technische Vereisten & Verantwoordelijkheid</h2> <p>
De gebruiker is zelf verantwoordelijk voor een stabiele internetverbinding (minimaal 25 Mbps voor Full HD en 50 Mbps voor 4K streaming) en een compatibel apparaat met geschikte mediaspeler-applicatie.
</p> </section> <section class="space-y-3"> <h2 class="text-xl font-bold text-white">6. Contact & Support</h2> <p>
Voor vragen over deze voorwaarden kun je contact opnemen via <a href="mailto:contact@iptvnederlandse.store" class="text-[#38bdf8] font-bold hover:underline">contact@iptvnederlandse.store</a> of onze WhatsApp helpdesk op <a href="https://wa.me/18036582620" class="text-emerald-400 font-bold hover:underline">+1 (803) 658-2620</a>.
</p> </section> </div> </div> </main> ${renderComponent($$result2, "FloatingWhatsApp", $$FloatingWhatsApp, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/terms.astro", void 0);

const $$file = "/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Terms,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
