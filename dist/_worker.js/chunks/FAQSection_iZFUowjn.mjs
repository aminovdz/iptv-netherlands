globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from './astro/server_CBvyUju7.mjs';
import { g as $$, c as $$MessageCircle } from './FloatingWhatsApp_7f_lhg-5.mjs';
import { $ as $$Gift } from './Gift_DI-GtxmP.mjs';
import { $ as $$ShieldCheck } from './ShieldCheck_hM5ZieHG.mjs';

const $$Astro$3 = createAstro("https://iptvnederlandse.store");
const $$Check = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Check;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "check", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 6 9 17l-5-5"></path> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/Check.astro", void 0);

const $$Astro$2 = createAstro("https://iptvnederlandse.store");
const $$ChevronDown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ChevronDown;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "chevron-down", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m6 9 6 6 6-6"></path> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/ChevronDown.astro", void 0);

const $$Astro$1 = createAstro("https://iptvnederlandse.store");
const $$HelpCircle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HelpCircle;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "circle-question-mark", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path> <path d="M12 17h.01"></path> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/HelpCircle.astro", void 0);

const $$Astro = createAstro("https://iptvnederlandse.store");
const $$Trophy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Trophy;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "trophy", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path> <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path> <path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path> <path d="M4 22h16"></path> <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path> <path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/Trophy.astro", void 0);

const $$PricingCard = createComponent(($$result, $$props, $$slots) => {
  const pricingPlans = [
    {
      name: "12 Maanden + IBO Player",
      duration: "12 Maanden",
      price: "\u20AC35",
      originalPrice: "\u20AC69",
      period: "/ jaar",
      badge: "Beste Keuze & Meest Populair",
      isPopular: true,
      bonus: "Gratis IBO Player Activatie (t.w.v. \u20AC15)",
      description: "Het complete all-in-one pakket met maximale korting en gratis professionele app-activatie.",
      features: [
        "Volledige toegang tot 4K & FHD Streams",
        "Anti-Freeze Serververbinding (99.9% Uptime)",
        "Live Sport & Eredivisie zonder haperingen",
        "Elektronische Programmagids (EPG)",
        "Gratis IBO Player Activatie Bonus",
        "Directe activatie binnen 5 minuten",
        "Directe M3U & Xtream Codes Levering",
        "VIP 24/7 WhatsApp & Telegram Ondersteuning"
      ],
      ctaText: "Activeer 12 Maanden Deal",
      whatsappMsg: "Hallo IPTV Nederlandse, ik wil graag het 12 Maanden + IBO Player Pakket voor \u20AC35 bestellen."
    },
    {
      name: "6 Maanden Pakket",
      duration: "6 Maanden",
      price: "\u20AC20",
      originalPrice: "\u20AC39",
      period: "/ 6 mnd",
      badge: "Populair",
      isPopular: false,
      bonus: null,
      description: "Ideaal voor een half jaar zorgeloos kijken in haarscherpe 4K kwaliteit.",
      features: [
        "Volledige toegang tot 4K & FHD Streams",
        "Anti-Freeze Serververbinding",
        "Live Sport & Eredivisie uitzendingen",
        "Elektronische Programmagids (EPG)",
        "Compatibel met alle IPTV apps",
        "Directe activatie binnen 5 minuten",
        "Ondersteuning voor alle schermen",
        "24/7 WhatsApp Klantenservice"
      ],
      ctaText: "Bestel 6 Maanden",
      whatsappMsg: "Hallo IPTV Nederlandse, ik wil graag het 6 Maanden Pakket voor \u20AC20 bestellen."
    },
    {
      name: "3 Maanden Pakket",
      duration: "3 Maanden",
      price: "\u20AC10",
      originalPrice: "\u20AC19",
      period: "/ kwartaal",
      badge: null,
      isPopular: false,
      bonus: null,
      description: "Uitstekende flexibele optie voor een heel seizoen aan entertainment.",
      features: [
        "Volledige toegang tot 4K & FHD Streams",
        "Anti-Freeze Technologie",
        "Live Sport & Voetbalwedstrijden",
        "Elektronische Programmagids (EPG)",
        "Compatibel met Smart TV & Mobiel",
        "Directe activatie binnen 5 minuten",
        "Snelle M3U configuratie",
        "24/7 WhatsApp Ondersteuning"
      ],
      ctaText: "Bestel 3 Maanden",
      whatsappMsg: "Hallo IPTV Nederlandse, ik wil graag het 3 Maanden Pakket voor \u20AC10 bestellen."
    },
    {
      name: "1 Maand Pakket",
      duration: "1 Maand",
      price: "\u20AC5",
      originalPrice: "\u20AC9",
      period: "/ maand",
      badge: "Flexibel Instappen",
      isPopular: false,
      bonus: null,
      description: "Ontdek onze serverkwaliteit en ervaar de snelheid zonder langdurige verplichtingen.",
      features: [
        "Volledige toegang tot 4K & FHD Streams",
        "Anti-Freeze Technologie",
        "Live Sport & Eredivisie",
        "Elektronische Programmagids (EPG)",
        "Ondersteuning voor alle apps",
        "Directe activatie binnen 5 minuten",
        "Instant accountverificatie",
        "Standaard Klantenservice"
      ],
      ctaText: "Bestel 1 Maand",
      whatsappMsg: "Hallo IPTV Nederlandse, ik wil graag het 1 Maand Pakket voor \u20AC5 bestellen."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="pricing" class="py-20 md:py-28 relative overflow-hidden bg-[#0a0a0f]"> <!-- Ambient lighting --> <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#7c4ec2]/10 rounded-full blur-3xl pointer-events-none"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <!-- Section Header --> <div class="text-center max-w-3xl mx-auto mb-16 space-y-4"> <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e94560]/15 border border-[#e94560]/30 text-xs font-bold text-[#ff758f] uppercase tracking-wider">
Transparante Tarieven
</div> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
Kies Jouw <span class="text-gradient">IPTV met Abonnement</span> </h2> <p class="text-base sm:text-lg text-gray-400">
Directe activatie zonder verborgen kosten of automatische verlengingen. Start vandaag en geniet direct van ultra-stabiele 4K streaming.
</p> </div> <!-- Pricing Cards Grid (12-Month First Prominently Displayed) --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"> ${pricingPlans.map((plan) => renderTemplate`<div${addAttribute(`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${plan.isPopular ? "glass-card-glow border-2 border-[#e94560] shadow-2xl shadow-[#e94560]/20 lg:-translate-y-3" : "glass-card hover:border-white/20 hover:bg-white/[0.06]"}`, "class")}>  ${plan.badge && renderTemplate`<div${addAttribute(`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold tracking-wide uppercase shadow-lg ${plan.isPopular ? "bg-gradient-to-r from-[#e94560] to-[#7c4ec2] text-white shadow-[#e94560]/40" : "bg-white/10 text-gray-200 border border-white/10 backdrop-blur-md"}`, "class")}> ${plan.badge} </div>`} <div> <!-- Plan Header --> <div class="mb-5 text-center"> <h3 class="text-xl font-bold text-white mb-2">${plan.name}</h3> <p class="text-xs text-gray-400 min-h-[36px]">${plan.description}</p> </div> <!-- Price Tag --> <div class="text-center py-4 mb-4 border-y border-white/10 bg-white/[0.02] rounded-xl"> <div class="flex items-baseline justify-center gap-2"> <span class="text-xs text-gray-500 line-through">${plan.originalPrice}</span> <span class="text-4xl font-extrabold text-white tracking-tight">${plan.price}</span> <span class="text-xs text-gray-400 font-medium">${plan.period}</span> </div> <span class="text-[11px] text-emerald-400 font-semibold mt-1 block">Eenmalige betaling • Geen stilzwijgende verlenging</span> </div> <!-- Bonus Banner for 12-Month Plan --> ${plan.bonus && renderTemplate`<div class="mb-6 p-3 rounded-xl bg-gradient-to-r from-[#7c4ec2]/30 to-[#e94560]/30 border border-[#e94560]/40 flex items-center gap-2.5 text-xs text-white font-bold"> ${renderComponent($$result, "Gift", $$Gift, { "class": "w-4 h-4 text-amber-400 shrink-0" })} <span>${plan.bonus}</span> </div>`} <!-- Features List --> <ul class="space-y-3 mb-8 text-xs text-gray-300"> ${plan.features.map((feature) => renderTemplate`<li class="flex items-start gap-2.5"> <div${addAttribute(`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.isPopular ? "bg-[#e94560] text-white" : "bg-emerald-500/20 text-emerald-400"}`, "class")}> ${renderComponent($$result, "Check", $$Check, { "class": "w-2.5 h-2.5 stroke-[3]" })} </div> <span>${feature}</span> </li>`)} </ul> </div> <!-- Action CTA --> <div class="space-y-3 pt-2"> <a${addAttribute(`https://wa.me/18036582620?text=${encodeURIComponent(plan.whatsappMsg)}`, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`w-full py-3.5 px-4 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg ${plan.isPopular ? "bg-gradient-to-r from-[#e94560] to-[#7c4ec2] text-white hover:scale-105 shadow-[#e94560]/30" : "bg-white/10 hover:bg-white/20 text-white border border-white/10"}`, "class")}${addAttribute(`Bestel ${plan.name}`, "aria-label")}> ${renderComponent($$result, "MessageCircle", $$MessageCircle, { "class": "w-4 h-4" })} <span>${plan.ctaText}</span> </a> <div class="flex items-center justify-center gap-1.5 text-[11px] text-gray-400"> ${renderComponent($$result, "ShieldCheck", $$ShieldCheck, { "class": "w-3.5 h-3.5 text-emerald-400" })} <span>Directe Activatie & Klantenservice</span> </div> </div> </div>`)} </div> <!-- Payment Methods Trust Footer --> <div class="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"> <div class="space-y-1"> <h4 class="text-sm font-bold text-white">Veilige & Flexibele Betaalmethoden</h4> <p class="text-xs text-gray-400">Betaal eenvoudig via Bancontact, Visa/Mastercard of ontvang 10% extra korting met Crypto (BTC / USDT).</p> </div> <div class="flex flex-wrap items-center justify-center gap-2"> <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-xs">Bancontact</span> <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-xs">Creditcard</span> <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-emerald-400 font-bold text-xs">Crypto (-10%)</span> </div> </div> </div> </section>`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/src/components/PricingCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$FAQSection = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "Wat is IPTV met abonnement en hoe werkt het precies?",
      answer: "IPTV staat voor Internet Protocol Television. In plaats van traditionele kabel of satelliet ontvang je tv-streams direct via je internetverbinding. Met een abonnement van IPTV Nederlandse krijg je toegang tot onze high-speed anti-freeze servers, waardoor je op je Smart TV, smartphone, tablet of computer kunt genieten van live televisie, sport en films in 4K en FHD kwaliteit."
    },
    {
      question: "Hoe snel wordt mijn IPTV abonnement geactiveerd na betaling?",
      answer: "Vrijwel direct! Ons geautomatiseerde systeem verwerkt je bestelling onmiddellijk. Binnen 5 minuten na afronding van je betaling ontvang je jouw persoonlijke M3U-afspeellijst, EPG-link en Xtream Codes inloggegevens via e-mail en WhatsApp."
    },
    {
      question: "Welke veilige betaalmethoden worden geaccepteerd?",
      answer: "Je kunt jouw bestelling eenvoudig en veilig afronden met alle gangbare creditcards (Visa/Mastercard), Bancontact of discreet via Crypto (zoals Bitcoin of USDT), waarbij je profiteert van 10% extra korting. De inloggegevens worden direct na betaling klaargezet."
    },
    {
      question: "Wat houdt de gratis IBO Player bonus in bij het 12-maanden pakket?",
      answer: "Bij aankoop van ons 12-maanden abonnement (\u20AC35,-) verzorgen wij de volledige activatie van de premium IBO Player applicatie (t.w.v. \u20AC15,-) kosteloos voor jou. IBO Player staat bekend als \xE9\xE9n van de snelste en meest gebruiksvriendelijke mediaspelers voor Samsung, LG en Android Smart TV's."
    },
    {
      question: "Welke apparaten en apps zijn compatibel met jullie service?",
      answer: "Onze IPTV streams zijn compatibel met alle gangbare apparaten: Samsung en LG Smart TV's, Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android telefoons/tablets, Windows PC's, Mac en MAG-mediaspelers. Je kunt populaire apps gebruiken zoals IBO Player, IPTV Smarters Pro, TiviMate, Smart IPTV en XCIPTV."
    },
    {
      question: "Wat is het retourbeleid bij IPTV Nederlandse?",
      answer: "Voor alle details omtrent ons herroepings- en retourbeleid verwijzen we je graag naar onze offici\xEBle retourbeleid pagina. Mocht je vragen hebben over jouw bestelling, dan staat onze klantenservice 24/7 klaar via WhatsApp om je direct te assisteren."
    },
    {
      question: "Heb ik een VPN nodig om IPTV te gebruiken?",
      answer: "Nee, in de meeste gevallen is een VPN niet nodig omdat onze streams via beveiligde, versleutelde protocollen lopen. Onze service is echter 100% compatibel met alle bekende VPN-diensten mocht je extra privacy op prijs stellen."
    },
    {
      question: "Blijven de streams soepel werken tijdens drukke Eredivisie sportwedstrijden?",
      answer: "Ja! Wij maken gebruik van dedicated Europese servers met load balancing en geavanceerde Anti-Freeze technologie. Hierdoor blijft de stream stabiel op 60 frames per seconde, zelfs tijdens piekmomenten en grote live wedstrijden."
    },
    {
      question: "Hoe kan ik contact opnemen voor ondersteuning of installatiehulp?",
      answer: "Onze klantenservice is 24/7 bereikbaar via WhatsApp (+1 803 658 2620), Telegram (@castvera_com) en per e-mail via support@castvera.com of contact@iptvnederlandse.store. We helpen je graag stap voor stap bij de installatie."
    }
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return renderTemplate(_a || (_a = __template(["", '<section id="faq" class="py-20 md:py-28 relative overflow-hidden bg-[#0a0a0f]"> <!-- FAQ JSON-LD Structured Data Schema --> <script type="application/ld+json">', '<\/script> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <!-- Section Header --> <div class="text-center mb-16 space-y-4"> <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#38bdf8] uppercase tracking-wider"> ', '\nVeelgestelde Vragen\n</div> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">\nAlles over Jouw <span class="text-gradient">IPTV met Abonnement</span> </h2> <p class="text-base sm:text-lg text-gray-400">\nHeb je vragen over de werking, installatie of betaling? Hier vind je direct antwoord op de meest gestelde vragen.\n</p> </div> <!-- FAQ Accordion List --> <div class="space-y-4"> ', ' </div> <!-- Still have questions? Help Card --> <div class="mt-12 p-6 rounded-2xl glass-card-glow border border-[#7c4ec2]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"> <div> <h4 class="text-base font-bold text-white">Staat jouw vraag er niet tussen?</h4> <p class="text-xs text-gray-300 mt-1">Ons deskundige team staat klaar om je binnen enkele minuten te helpen via WhatsApp.</p> </div> <a href="https://wa.me/18036582620?text=Hallo%20IPTV%20Nederlandse,%20ik%20heb%20een%20vraag%20over%20jullie%20IPTV%20abonnement." target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-900/40 shrink-0 transition-all"> ', " <span>Chat Direct op WhatsApp</span> </a> </div> </div> </section>"])), maybeRenderHead(), unescapeHTML(JSON.stringify(faqSchema)), renderComponent($$result, "HelpCircle", $$HelpCircle, { "class": "w-3.5 h-3.5 text-[#38bdf8]" }), faqs.map((faq, index) => renderTemplate`<details class="glass-card rounded-2xl group border border-white/10 transition-all duration-200 open:border-[#7c4ec2]/50 open:bg-white/[0.04]"> <summary class="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none focus:outline-none focus:ring-2 focus:ring-[#7c4ec2] rounded-2xl"> <h3 class="text-base sm:text-lg font-bold text-white group-hover:text-[#d1b3ff] transition-colors pr-4"> ${faq.question} </h3> <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-open:rotate-180 transition-transform duration-300"> ${renderComponent($$result, "ChevronDown", $$ChevronDown, { "class": "w-4 h-4 text-gray-400 group-open:text-[#e94560]" })} </div> </summary> <div class="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-4"> <p>${faq.answer}</p> </div> </details>`), renderComponent($$result, "MessageCircle", $$MessageCircle, { "class": "w-4 h-4" }));
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/src/components/FAQSection.astro", void 0);

export { $$Trophy as $, $$Check as a, $$PricingCard as b, $$FAQSection as c };
