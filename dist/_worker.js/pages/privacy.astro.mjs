globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro } from '../chunks/astro/server_CBvyUju7.mjs';
import { g as $$, $ as $$Layout, a as $$StickyHeader, d as $$FloatingWhatsApp, e as $$Footer } from '../chunks/FloatingWhatsApp_7f_lhg-5.mjs';
import { $ as $$ShieldCheck } from '../chunks/ShieldCheck_hM5ZieHG.mjs';
import { $ as $$FileText } from '../chunks/FileText_PL2fc3x1.mjs';
import { $ as $$CheckCircle2 } from '../chunks/CheckCircle2_B0yVlM4b.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://iptvnederlandse.store");
const $$EyeOff = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EyeOff;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "eye-off", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path> <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path> <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path> <path d="m2 2 20 20"></path> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/EyeOff.astro", void 0);

const $$Astro = createAstro("https://iptvnederlandse.store");
const $$Lock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Lock;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "lock", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect> <path d="M7 11V7a5 5 0 0 1 10 0v4"></path> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/Lock.astro", void 0);

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Privacybeleid & AVG Gegevensbescherming", "description": "Lees het privacybeleid van IPTV Nederlandse. Wij respecteren jouw privacy en hanteren strikte beveiliging en een strikt no-logs beleid." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StickyHeader", $$StickyHeader, {})} ${maybeRenderHead()}<main class="pt-32 pb-24 relative overflow-hidden bg-[#0a0a0f] min-h-screen"> <!-- Ambient background --> <div class="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#7c4ec2]/10 rounded-full blur-3xl pointer-events-none"></div> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <!-- Page Header --> <div class="text-center mb-12 space-y-3"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider"> ${renderComponent($$result2, "ShieldCheck", $$ShieldCheck, { "class": "w-3.5 h-3.5" })}
AVG / GDPR Compliant
</div> <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
Privacybeleid <span class="text-gradient">IPTV Nederlandse</span> </h1> <p class="text-xs sm:text-sm text-gray-400">Laatst bijgewerkt: Januari 2026 • Van toepassing op iptvnederlandse.store</p> </div> <!-- Content Box --> <div class="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 space-y-8 text-sm sm:text-base text-gray-300 leading-relaxed"> <section class="space-y-3"> <h2 class="text-xl font-bold text-white flex items-center gap-2"> ${renderComponent($$result2, "Lock", $$Lock, { "class": "w-5 h-5 text-[#7c4ec2]" })}
1. Inleiding & Gegevensverzameling
</h2> <p>
Bij <strong>IPTV Nederlandse</strong> (iptvnederlandse.store) hechten wij de hoogste waarde aan de bescherming van jouw persoonsgegevens. Dit privacybeleid beschrijft hoe wij omgaan met gegevens wanneer je gebruikmaakt van onze diensten, onze website bezoekt of een <strong>IPTV met abonnement</strong> bij ons afsluit.
</p> <p>
Wij verzamelen uitsluitend de minimale gegevens die strikt noodzakelijk zijn voor de technische levering en activatie van jouw abonnement:
</p> <ul class="list-disc pl-6 space-y-1.5 text-gray-400 text-sm"> <li>Jouw e-mailadres (voor de levering van M3U-afspeellijsten en inloggegevens).</li> <li>Jouw WhatsApp-nummer (indien je kiest voor ondersteuning of levering via WhatsApp).</li> <li>Transactie- en betalingsstatus (verwerkt via beveiligde externe payment gateways; wij slaan geen bank- of creditcardgegevens op).</li> </ul> </section> <section class="space-y-3"> <h2 class="text-xl font-bold text-white flex items-center gap-2"> ${renderComponent($$result2, "EyeOff", $$EyeOff, { "class": "w-5 h-5 text-emerald-400" })}
2. Strikt No-Logs Beleid (Kijkgedrag & Privacy)
</h2> <p>
Wij registreren of bewaren <strong>geen enkel kijkgedrag, stream-geschiedenis of persoonlijke voorkeuren</strong>. Onze streaming servers fungeren uitsluitend als directe data-doorgeefluik met end-to-end SSL/TLS-versleuteling. Jouw kijkactiviteiten blijven volledig privé en anoniem.
</p> </section> <section class="space-y-3"> <h2 class="text-xl font-bold text-white flex items-center gap-2"> ${renderComponent($$result2, "FileText", $$FileText, { "class": "w-5 h-5 text-[#38bdf8]" })}
3. Beveiliging van Gegevens
</h2> <p>
Al het dataverkeer tussen jouw webbrowser en onze servers wordt versleuteld via 256-bit SSL-encryptie. Onze databases worden beschermd door enterprise-grade firewalls en strikte toegangscontroles conform de Europese Algemene Verordening Gegevensbescherming (AVG / GDPR).
</p> </section> <section class="space-y-3"> <h2 class="text-xl font-bold text-white flex items-center gap-2"> ${renderComponent($$result2, "CheckCircle2", $$CheckCircle2, { "class": "w-5 h-5 text-amber-400" })}
4. Jouw Rechten (Inzage, Correctie & Verwijdering)
</h2> <p>
Conform de Europese privacywetgeving heb je te allen tijde het recht om:
</p> <ul class="list-disc pl-6 space-y-1.5 text-gray-400 text-sm"> <li>Inzage te vragen in de gegevens die wij over jou bewaren.</li> <li>Correctie van onjuiste contactgegevens aan te vragen.</li> <li>Volledige verwijdering ('recht op vergetelheid') van jouw accountgegevens te verzoeken na afloop van jouw abonnementsperiode.</li> </ul> <p>
Voor privacyverzoeken kun je direct contact opnemen via <a href="mailto:contact@iptvnederlandse.store" class="text-[#38bdf8] font-bold hover:underline">contact@iptvnederlandse.store</a> of <a href="mailto:support@castvera.com" class="text-[#7c4ec2] font-bold hover:underline">support@castvera.com</a>.
</p> </section> </div> </div> </main> ${renderComponent($$result2, "FloatingWhatsApp", $$FloatingWhatsApp, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/privacy.astro", void 0);

const $$file = "/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Privacy,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
