export const SITE = {
  name: "Sami Olavuo",
  domain: "https://samiolavuo.com",
  tagline: "Fractional Revenue Manager",
  role: "Revenue management itsenäisille hotelleille ja serviced living -operaattoreille",
  email: "sami.olavuo@gmail.com",
  linkedIn: "https://www.linkedin.com/in/sami-olavuo",
} as const;

export const CTA = {
  primary: "Varaa 30 minuutin revenue-kartoitus",
  secondary: "Katso palvelupaketit",
  header: "Varaa kartoitus",
} as const;

export const NAV_ANCHORS = [
  { href: "#kenelle", label: "Kenelle" },
  { href: "#palvelu", label: "Palvelu" },
  { href: "#paketointi", label: "Paketointi" },
  { href: "#kokemus", label: "Kokemus" },
  { href: "#faq", label: "FAQ" },
] as const;

export type ServicePath = {
  title: string;
  description: string;
  focus: string[];
  href: string;
  cta: string;
  price?: string;
};

export const SERVICE_PATHS: ServicePath[] = [
  {
    title: "Revenue Audit",
    description:
      "Kertaluonteinen analyysi nykyisestä hinnoittelusta, kanavista, segmenteistä, kilpailukentästä ja tulospotentiaalista.",
    focus: [
      "Hinnoittelu ja kysyntä",
      "Kanavat ja segmentit",
      "Kilpailukenttä ja tulospotentiaali",
      "90 päivän toimintasuunnitelma",
    ],
    href: "#yhteystiedot",
    cta: "Kysy auditista",
    price: "1 500–3 500 €",
  },
  {
    title: "Revenue Control",
    description:
      "Kevyt jatkuva revenue management -malli pienelle tai stabiilille kohteelle.",
    focus: [
      "Perushinnoittelun ohjaus",
      "Pickup- ja kysyntäseuranta",
      "Forecast ja KPI-raportointi",
      "Kanavien kaupallinen kontrolli",
    ],
    href: "#yhteystiedot",
    cta: "Kysy Revenue Controlista",
    price: "1 200–2 500 €/kk",
  },
  {
    title: "Revenue Growth",
    description:
      "Täysi fractional revenue manager -palvelu kasvuhakuiselle hotellille tai serviced living -operaattorille.",
    focus: [
      "Viikoittainen kaupallinen rytmi",
      "Hinnoittelu, saatavuus ja rajoitukset",
      "Forecast, kanavamix ja segmentit",
      "Johtoa tukeva päätöksenteko",
    ],
    href: "#yhteystiedot",
    cta: "Kysy Revenue Growthista",
    price: "2 500–4 500 €/kk",
  },
];

export const HERO = {
  headline: "Fractional Revenue Manager hotellillesi",
  subheadline: "Kaupallinen tulosohjaus ilman kokoaikaista rekrytointia.",
  body:
    "Autan itsenäisiä hotelleja, boutique-hotelleja ja serviced living -operaattoreita parantamaan hinnoittelua, käyttöastetta, kanavamixia ja ennustettavuutta jatkuvalla revenue management -mallilla.",
  trustLine:
    "Työskentelen osana hotellin kaupallista arkea: seuraan pickupia, kysyntää, forecastia ja kanavamixiä, ja muutan havainnot konkreettisiksi päätöksiksi.",
};

export const HERO_EXPERT_CARD = {
  name: SITE.name,
  role: "Fractional Revenue Manager",
  description:
    "Hotellien, aparthotellien ja serviced living -kohteiden kaupallinen tulosohjaus",
  bullets: [
    "Hinnoittelu & kysynnän hallinta",
    "Forecast & kaupallinen rytmi",
    "Kanavamix & nettotuotto",
  ],
} as const;

export const TARGET_CUSTOMER = {
  headline: "Kenelle tämä on tehty",
  text: "Työskentelen suoraan hotellin tai operaattorin johdon kanssa — ei toimistomallilla, vaan käytännön revenue management -osaamisella.",
  types: [
    "Itsenäiset hotellit",
    "Boutique-hotellit",
    "Aparthotellit",
    "Serviced apartments",
    "Serviced living",
    "Pienet hotelliportfoliot",
  ],
};

export const PROBLEM_SIGNALS = [
  "Hintoja muutetaan liian harvoin tai liian myöhään",
  "Päätökset perustuvat tuntumaan, eivät kysyntädataan",
  "OTA-kanavat ohjaavat liikaa myyntiä ja katetta",
  "Hiljaisiin jaksoihin reagoidaan vasta kun on liian myöhäistä",
  "Korkean kysynnän päivinä potentiaalia jää pöydälle",
  "Ryhmä- ja long-stay-varauksia hyväksytään ilman displacement-analyysiä",
  "Forecast ei ohjaa myyntiä, markkinointia eikä operatiivista suunnittelua",
] as const;

export const SOLUTION = {
  headline: "Mitä teen käytännössä",
  paragraphs: [
    "Toimin ulkoistettuna revenue managerina, joka tuo hotellillenne viikoittaisen kaupallisen rytmin.",
    "Hinnoittelu, saatavuus, rajoitukset, kampanjat, segmentit ja jakelukanavat ohjataan järjestelmällisesti datan, kysynnän ja liiketoimintatavoitteiden perusteella.",
    "Tavoite ei ole tehdä satunnaisia hintamuutoksia, vaan rakentaa toimintamalli, jossa johto näkee ajoissa missä kysyntä vahvistuu, missä ollaan jäljessä ja mitä päätöksiä seuraavaksi tarvitaan.",
  ],
};

export const SOLUTION_AREAS = [
  {
    title: "Hinnoittelu ja kysynnän hallinta",
    description:
      "Päivittäinen pickup-seuranta, dynaaminen hinnoittelu, korkean kysynnän päivien optimointi, hiljaisten jaksojen toimenpiteet sekä minimiyöpymisten ja saatavuusrajoitusten hallinta.",
  },
  {
    title: "Forecast ja raportointi",
    description:
      "90/180/365 päivän forecast, kuukausittainen revenue-raportti, KPI-seuranta sekä selkeä päätösloki: mitä muutettiin, miksi ja mitä seurataan seuraavaksi.",
  },
  {
    title: "Jakelustrategia",
    description:
      "OTA-kanavien optimointi, suoran myynnin kaupallinen tuki, kampanjoiden seuranta, hintapariteetin valvonta ja kanavakohtaisen nettotuoton arviointi.",
  },
  {
    title: "Serviced living -optimointi",
    description:
      "Lyhyiden ja pitkien varausten tasapainotus, corporate- ja long-stay-kysynnän hinnoittelu sekä käyttöasteen, vaihtokustannusten ja kassavirran yhteensovittaminen.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    title: "Revenue-kartoitus",
    description:
      "30 minuutin kartoitus nykytilasta, tavoitteista ja siitä, mikä palvelumalli sopii kohteeseen.",
  },
  {
    title: "Revenue Audit",
    description:
      "Valinnainen kertaluonteinen analyysi, joka tuottaa selkeän kuvan nykytilasta ja 90 päivän toimintasuunnitelman.",
  },
  {
    title: "Käyttöönotto",
    description:
      "Hinnoittelun, forecastin, raportoinnin ja kanavien ohjauksen rakenne sovitetaan kohteeseen ja tiimiin.",
  },
  {
    title: "Viikoittainen ohjaus",
    description:
      "Jatkuva kaupallinen rytmi: hinnoittelu, saatavuus, segmentit ja kanavat päivitetään datan mukaan.",
  },
  {
    title: "Raportointi ja kehitys",
    description:
      "Kuukausittainen yhteenveto, päätösloki ja seuraavat toimenpiteet — ei pelkkää raportointia, vaan ohjausta.",
  },
];

export const PROOF_BULLETS = [
  "Revenue-strategian vastuu noin 12 M€ monikohdeportfoliosta",
  "Noin 7 % vuosittainen parannus keskeisissä revenue KPI:issa",
  "Yli 300 000 € vuosittainen kaupallinen mahdollisuus tunnistettu",
  "Käytännön kokemus forecastingista, Power BI:stä, SQL:stä ja raportoinnista",
  "Työskentely hinnoittelun, operatiivin, talouden ja johdon välillä",
];

export const FAQ_ITEMS = [
  {
    question: "Mikä ero on Revenue Auditilla ja jatkuvalla palvelulla?",
    answer:
      "Revenue Audit on kertaluonteinen analyysi ja toimintasuunnitelma. Revenue Control ja Revenue Growth ovat jatkuvaa fractional revenue management -työtä, jossa vastaan hinnoittelusta, forecastista ja kaupallisesta ohjauksesta kuukausittain.",
  },
  {
    question: "Kuinka monta asiakasta otat kerrallaan?",
    answer:
      "Työskentelen rajoitetun määrän kohteita kerrallaan, jotta jokaiselle jää riittävästi aikaa ja vastuuta. Tämä ei ole massapalvelu.",
  },
  {
    question: "Tarvitseeko hotellilla olla RMS tai channel manager?",
    answer:
      "Ei välttämättä heti. Aloitan nykytilasta ja järjestelmäympäristöstä. Työkalut voidaan ottaa käyttöön tai kehittää vaiheittain tarpeen mukaan.",
  },
  {
    question: "Voiko aloittaa auditilla ilman sitoutumista jatkuvaan palveluun?",
    answer:
      "Kyllä. Revenue Audit on itsenäinen vaihtoehto. Sen jälkeen näette selkeästi, kannattaako jatkuva fractional revenue management ottaa käyttöön.",
  },
  {
    question: "Miten hinnoittelu määräytyy?",
    answer:
      "Hinta riippuu kohteen koosta, huonemäärästä, datan saatavuudesta ja siitä, kuinka paljon käytännön työtä palvelu sisältää. Hinnat sivulla ovat suuntaa-antavia.",
  },
];

// Legacy exports for sub-pages
export const HERO_TAGLINE = HERO.headline;
export const HERO_SUBTAGLINE = HERO.subheadline;
export const HERO_PROOF_STRIP = TARGET_CUSTOMER.types.slice(0, 4);
export const CLIENT_TYPES = TARGET_CUSTOMER.types;
export const SITE_INTRO = {
  headline: HERO.subheadline,
  text: HERO.body,
  text2: HERO.trustLine,
  goal: SOLUTION.paragraphs[2],
};
export const PACKAGE_COMPARISON = SERVICE_PATHS.map((s) => ({
  package: s.title,
  bestWhen: s.description,
  includes: s.focus.join(", "),
  model: s.price?.includes("/kk") ? "Kuukausiveloitus" : "Kertaprojekti",
  href: s.href,
}));

export type FractionalTier = {
  name: string;
  description: string;
  includes: string[];
  price: string;
};

export const FRACTIONAL_TIERS: FractionalTier[] = [
  {
    name: "Revenue Control",
    description:
      "Kevyt jatkuva revenue management -malli pienelle tai stabiilille kohteelle.",
    includes: SERVICE_PATHS[1].focus,
    price: "1 200–2 500 €/kk",
  },
  {
    name: "Revenue Growth",
    description:
      "Täysi fractional revenue manager -palvelu kasvuhakuiselle hotellille tai serviced living -operaattorille.",
    includes: SERVICE_PATHS[2].focus,
    price: "2 500–4 500 €/kk",
  },
];

export const REVENUE_AUDIT = {
  eyebrow: "Kertaprojekti",
  headline: "Revenue Audit",
  subheadline: "Nykytilan analyysi ja 90 päivän toimintasuunnitelma",
  intro:
    "Revenue Audit on tiivis mutta syvällinen katsaus kohteen kaupalliseen nykytilaan — hinnoittelu, kanavat, segmentit ja tulospotentiaali.",
  fitIntro:
    "Auditoinnin jälkeen tiedät, missä nykyinen tulospotentiaali vuotaa, mitkä päätökset vaikuttavat nopeimmin ja kannattaako jatkuva fractional revenue management ottaa käyttöön.",
  fitFor: [
    "haluaa parantaa hinnoittelua ja kaupallista suorituskykyä",
    "kokee, että nykyinen hinnoittelu perustuu liikaa tuntumaan",
    "tarvitsee ulkopuolisen asiantuntijan näkemyksen nykytilasta",
    "suunnittelee kasvua tai jakelustrategian uudistamista",
    "haluaa selkeän 90 päivän toimintasuunnitelman ennen jatkuvaa palvelua",
  ],
  areas: SOLUTION_AREAS.map((a) => ({ title: a.title, description: a.description })),
  deliverables: [
    "Nykytilan revenue-analyysi",
    "Keskeiset löydökset ja tulovuodot",
    "Hinnoittelun ja forecasting-käytäntöjen arviointi",
    "Jakelukanavien tarkastelu",
    "90 päivän toimintasuunnitelma",
    "Yhteinen läpikäyntipalaveri",
  ],
  benefits:
    "Tavoitteena ei ole pelkkä raportti, vaan selkeä suunnitelma siitä, miten liikevaihtoa, käyttöastetta ja kannattavuutta voidaan kehittää käytännössä.",
  price: "1 500–3 500 €",
  priceNote: "Useat kohteet tai portfoliot hinnoitellaan erikseen.",
  primaryCta: CTA.primary,
  secondaryCta: "Pyydä arvio tilanteesta",
};

export const FRACTIONAL_RM = {
  eyebrow: "Kuukausimalli",
  headline: "Fractional Revenue Manager",
  subheadline: SOLUTION.paragraphs[0],
  intro: SOLUTION.paragraphs[0],
  intro2: SOLUTION.paragraphs[1],
  intro3: SOLUTION.paragraphs[2],
  fitFor: [
    "haluaa kehittää liikevaihtoa ja kannattavuutta jatkuvasti",
    "tarvitsee revenue managerin, mutta ei kokoaikaisesti",
    "operoi 25–120 huoneen hotellissa tai pienessä portfoliossa",
    "haluaa parantaa suoravarausten, OTA-kanavien ja kanavamixin tuottoa",
    "tarvitsee säännöllisen asiantuntijan johtamaan kaupallista päätöksentekoa",
  ],
  includes: SOLUTION_AREAS.map((a) => ({ title: a.title, description: a.description })),
  impact: SOLUTION.paragraphs[2],
  impact2:
    "Päätöksiä tehdään datan, markkinan ja strategian pohjalta — ei pelkästään historiallisen käyttöasteen tai kilpailijoiden hintojen mukaan.",
  whyNow:
    "Kysyntäsignaalit, kanavat ja hinnoittelu muuttuvat nopeammin kuin ennen. Ilman järjestelmällistä mallia reagoidaan liian myöhään.",
  whyNow2:
    "Fractional-malli tuo senior-tason osaamisen ilman kokoaikaista rekrytointia.",
  outcome:
    "Saat käyttöösi kokeneen revenue managerin, joka vastaa hinnoittelusta, forecastista ja kaupallisesta ohjauksesta käytännössä.",
  primaryCta: CTA.primary,
  secondaryCta: CTA.header,
};
