export const SITE = {
  name: "Sami Olavuo",
  domain: "https://samiolavuo.com",
  tagline: "Fractional Revenue Manager",
  role: "Revenue management itsenäisille hotelleille ja serviced living -operaattoreille",
  email: "sami.olavuo@gmail.com",
  linkedIn: "https://www.linkedin.com/in/sami-olavuo",
} as const;

export const SEO = {
  title: "Fractional Revenue Manager | Sami Olavuo",
  description:
    "Fractional revenue management -palvelu itsenäisille hotelleille, boutique-hotelleille, aparthotelleille ja serviced living -operaattoreille. Hinnoittelu, forecast, kanavamix ja kaupallinen tulosohjaus ilman kokoaikaista rekrytointia.",
} as const;

export const FOOTER = {
  line: "Kaupallinen tulosohjaus hotelleille, aparthotelleille ja serviced living -operaattoreille.",
} as const;

export const CTA = {
  primary: "Varaa 30 minuutin revenue-kartoitus",
  secondary: "Katso palvelupaketit",
  header: "Varaa kartoitus",
} as const;

export const CONTACT = {
  heading: "Aloita Revenue Auditilla",
  body: "Auditoinnin jälkeen tiedät, missä nykyinen tulospotentiaali vuotaa, mitkä päätökset vaikuttavat nopeimmin ja kannattaako jatkuva fractional revenue management ottaa käyttöön.",
  cta: CTA.primary,
  direct: {
    email: "[Sähköposti]",
    phone: "[Puhelin]",
    website: "[Verkkosivu]",
  },
} as const;

export const NAV_ANCHORS = [
  { href: "#kenelle", label: "Kenelle" },
  { href: "#palvelu", label: "Palvelu" },
  { href: "#paketointi", label: "Paketointi" },
  { href: "#kokemus", label: "Kokemus" },
  { href: "#faq", label: "FAQ" },
] as const;

export type Package = {
  title: string;
  positioning: string;
  description: string;
  price: string;
  cta: string;
  href: string;
  highlighted?: boolean;
};

export const PACKAGES: Package[] = [
  {
    title: "Revenue Audit",
    positioning:
      "Paras aloituspiste, kun haluat nähdä tulospotentiaalin ennen jatkuvaa yhteistyötä.",
    description:
      "Kertaluonteinen analyysi nykyisestä hinnoittelusta, kanavista, segmenteistä, kilpailukentästä ja kaupallisesta ohjauksesta.",
    price: "1 500–3 500 €",
    cta: "Aloita auditilla",
    href: "#yhteystiedot",
  },
  {
    title: "Revenue Control",
    positioning:
      "Kevyt jatkuva revenue management -malli pienelle tai stabiilille kohteelle.",
    description:
      "Sopii hotellille, joka tarvitsee säännöllistä hinnoittelun, pickupin ja forecastin seurantaa ilman täyttä kaupallista kokonaisvastuuta.",
    price: "1 200–2 500 €/kk",
    cta: "Kysy Revenue Controlista",
    href: "#yhteystiedot",
  },
  {
    title: "Revenue Growth",
    positioning:
      "Täysi fractional revenue manager -palvelu kasvuhakuiselle hotellille tai operaattorille.",
    description:
      "Sopii kohteelle tai pienelle portfoliolle, jossa hinnoittelu, forecast, kanavamix, kampanjat ja kaupallinen rytmi halutaan rakentaa järjestelmällisesti.",
    price: "2 500–4 500 €/kk",
    cta: "Keskustele kasvumallista",
    href: "#yhteystiedot",
    highlighted: true,
  },
];

export type ServicePath = {
  title: string;
  description: string;
  focus: string[];
  href: string;
  cta: string;
  price?: string;
};

export const SERVICE_PATHS: ServicePath[] = PACKAGES.map((pkg) => ({
  title: pkg.title,
  description: pkg.description,
  focus: [],
  href: pkg.href,
  cta: pkg.cta,
  price: pkg.price,
}));

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
  headline: "Kenelle palvelu sopii?",
  text: "Palvelu on rakennettu majoitusoperaattoreille, joilla kaupallinen ohjaus on jo tärkeää, mutta kokoaikainen revenue manager ei ole vielä perusteltu rekrytointi.",
  note: "Sopii erityisesti noin 25–120 huoneen tai yksikön kohteille.",
  types: [
    "Itsenäiset hotellit",
    "Boutique-hotellit",
    "Aparthotellit",
    "Serviced apartment -kohteet",
    "Serviced living -operaattorit",
    "Pienet hotelliportfoliot",
  ],
};

export const PROBLEM_SIGNALS = [
  "Hintoja muutetaan liian harvoin tai liian myöhään",
  "Päätökset perustuvat tuntumaan, eivät kysyntädataan",
  "OTA-kanavat ohjaavat liikaa myyntiä ja katetta",
  "Hiljaisiin jaksoihin reagoidaan vasta, kun pickup on jo pysähtynyt",
  "Korkean kysynnän päivinä potentiaalia jää pöydälle",
  "Ryhmä- ja long-stay-varauksia hyväksytään ilman displacement-analyysiä",
  "Forecast ei ohjaa myyntiä, markkinointia eikä operatiivista suunnittelua",
] as const;

export const PROBLEM_INSIGHT =
  "Usein tulos ei vuoda yhdestä suuresta virheestä, vaan pienistä päivittäisistä päätöksistä: hinnasta, saatavuudesta, rajoituksista, kanavista ja segmenteistä.";

export const SOLUTION = {
  headline: "Ulkoinen revenue manager, joka tuo hotellillesi kaupallisen rytmin",
  body:
    "Toimin hotellin ulkoistettuna revenue managerina. Hinnoittelu, saatavuus, rajoitukset, kampanjat, segmentit ja jakelukanavat ohjataan järjestelmällisesti datan, kysynnän ja liiketoimintatavoitteiden perusteella.",
  goal:
    "Tavoitteena on rakentaa toimintamalli, jossa johto näkee ajoissa missä kysyntä vahvistuu, missä ollaan jäljessä ja mitä päätöksiä seuraavaksi tarvitaan.",
  comparison: {
    before: [
      "Hintapäätökset tehdään reaktiivisesti",
      "Forecast jää raportiksi",
      "Kanavamixiä seurataan, mutta ei aktiivisesti ohjata",
      "Hiljaisiin jaksoihin herätään liian myöhään",
    ],
    after: [
      "Pickup ja kysyntä ohjaavat päätöksiä viikoittain",
      "Forecast tukee myyntiä, markkinointia ja operatiivista suunnittelua",
      "Kanavia arvioidaan nettotuoton perusteella",
      "Hiljaisiin ja korkean kysynnän jaksoihin valmistaudutaan ajoissa",
    ],
  },
} as const;

export const SOLUTION_AREAS = [
  {
    title: "Hinnoittelu ja kysynnän hallinta",
    bullets: [
      "Päivittäinen pickup-seuranta",
      "Dynaaminen hinnoittelu",
      "Korkean kysynnän päivien optimointi",
      "Hiljaisten jaksojen toimenpiteet",
      "Minimiyöpymisten ja saatavuusrajoitusten hallinta",
    ],
  },
  {
    title: "Forecast ja raportointi",
    bullets: [
      "90/180/365 päivän forecast",
      "Kuukausittainen revenue-raportti",
      "KPI-seuranta",
      "Selkeä päätösloki: mitä muutettiin, miksi ja mitä seurataan seuraavaksi",
    ],
  },
  {
    title: "Jakelustrategia",
    bullets: [
      "OTA-kanavien optimointi",
      "Suoran myynnin kaupallinen tuki",
      "Kampanjoiden seuranta",
      "Hintapariteetin valvonta",
      "Kanavakohtaisen nettotuoton arviointi",
    ],
  },
  {
    title: "Serviced living -optimointi",
    bullets: [
      "Lyhyiden ja pitkien varausten tasapainotus",
      "Corporate- ja long-stay-kysynnän hinnoittelu",
      "Käyttöasteen, vaihtokustannusten ja kassavirran yhteensovittaminen",
    ],
  },
] as const;

export const PROCESS_HEADING = "Näin yhteistyö alkaa";

export const PROCESS_STEPS = [
  {
    title: "30 minuutin kartoitus",
    description:
      "Käydään läpi kohteen nykytilanne, tavoitteet, järjestelmät ja kaupalliset haasteet.",
  },
  {
    title: "Revenue Audit",
    description:
      "Analysoidaan hinnoittelu, kanavat, segmentit, kysyntäkalenteri, kilpailukenttä ja tulospotentiaali.",
  },
  {
    title: "Toimenpidesuunnitelma",
    description:
      "Saat selkeän priorisoidun näkymän siihen, missä tulos vuotaa ja mitä kannattaa korjata ensin.",
  },
  {
    title: "Jatkuva revenue management",
    description:
      "Tarvittaessa auditista jatketaan viikoittaiseen kaupalliseen tulosohjaukseen.",
  },
];

export const CREDIBILITY = {
  headline: "Kokemusta hotellien kaupallisesta tulosohjauksesta",
  body:
    "Olen erikoistunut majoitusliiketoiminnan kaupalliseen ohjaukseen: hinnoitteluun, kysynnän hallintaan, forecastiin, kanavamixiin ja revenue management -prosessien rakentamiseen.",
  profile: {
    name: SITE.name,
    role: "Fractional Revenue Manager",
    tagline:
      "Kaupallinen tulosohjaus hotelleille, aparthotelleille ja serviced living -operaattoreille",
  },
  bullets: [
    "Revenue management -prosessien rakentaminen",
    "Hinnoittelun ja saatavuuden optimointi",
    "Forecast- ja raportointimallien kehittäminen",
    "OTA- ja suoramyynnin kaupallinen ohjaus",
    "Serviced living-, long-stay- ja corporate-kysynnän optimointi",
  ],
  caseStudy: {
    title: "Esimerkkicase: boutique-hotelli, 48 huonetta",
    text:
      "Lähtötilanteessa hinnoittelu päivittyi epäsäännöllisesti, korkean kysynnän päivät jäivät osin alihinnoitelluiksi ja hiljaisiin jaksoihin reagoitiin liian myöhään. Työssä rakennettiin kysyntäkalenteri, pickup-seuranta, hintaportaat ja selkeä viikoittainen päätösmalli.",
  },
} as const;

export const PROOF_BULLETS = [...CREDIBILITY.bullets];

export const FAQ_ITEMS = [
  {
    question: "Korvaako palvelu kokoaikaisen revenue managerin?",
    answer:
      "Ei kaikissa tilanteissa. Palvelu sopii erityisesti kohteille, joissa tarvitaan säännöllistä kaupallista ohjausta, mutta kokoaikainen rekrytointi ei ole vielä perusteltu.",
  },
  {
    question: "Tarvitaanko hotellilla RMS-järjestelmä?",
    answer:
      "Ei välttämättä. Palvelu voidaan aloittaa nykyisillä järjestelmillä, kunhan saatavilla on riittävästi dataa varauksista, hinnoista, segmenteistä ja kanavista.",
  },
  {
    question: "Kuinka nopeasti tuloksia voidaan nähdä?",
    answer:
      "Ensimmäiset havainnot syntyvät usein auditin aikana. Jatkuvassa mallissa vaikutus riippuu kysyntätilanteesta, nykyisestä hinnoittelusta, kanavamixistä ja siitä, kuinka nopeasti päätökset voidaan viedä käytäntöön.",
  },
  {
    question: "Onko palvelu vain hotelleille?",
    answer:
      "Ei. Palvelu sopii myös aparthotel-, serviced apartment- ja serviced living -operaattoreille.",
  },
  {
    question: "Mistä yhteistyö kannattaa aloittaa?",
    answer:
      "Useimmissa tapauksissa Revenue Audit on paras ensimmäinen vaihe. Sen jälkeen tiedetään, missä tulospotentiaali vuotaa ja onko jatkuvalle fractional revenue management -mallille perustetta.",
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
  goal: SOLUTION.goal,
};
export const PACKAGE_COMPARISON = PACKAGES.map((pkg) => ({
  package: pkg.title,
  bestWhen: pkg.positioning,
  includes: pkg.description,
  model: pkg.price.includes("/kk") ? "Kuukausiveloitus" : "Kertaprojekti",
  href: pkg.href,
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
    includes: [
      "Pickup- ja kysyntäseuranta",
      "Hinnoittelun suositukset",
      "Forecastin läpikäynti",
      "Kanavien ja saatavuuden tarkistus",
      "Kuukausittainen revenue-raportti",
    ],
    price: "1 200–2 500 €/kk",
  },
  {
    name: "Revenue Growth",
    description:
      "Täysi fractional revenue manager -palvelu kasvuhakuiselle hotellille tai serviced living -operaattorille.",
    includes: [
      "Viikoittainen hinnoittelun optimointi",
      "90/180/365 päivän forecast",
      "Kanavamixin ja nettotuoton ohjaus",
      "Korkean ja hiljaisen kysynnän toimenpiteet",
      "Revenue-palaverit johdolle tai tiimille",
      "Päätösloki ja kaupallinen raportointi",
    ],
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
  areas: SOLUTION_AREAS.map((a) => ({
    title: a.title,
    bullets: [...a.bullets],
  })),
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
  subheadline: SOLUTION.body,
  intro: SOLUTION.headline,
  intro2: SOLUTION.body,
  intro3: SOLUTION.goal,
  fitFor: [
    "haluaa kehittää liikevaihtoa ja kannattavuutta jatkuvasti",
    "tarvitsee revenue managerin, mutta ei kokoaikaisesti",
    "operoi 25–120 huoneen hotellissa tai pienessä portfoliossa",
    "haluaa parantaa suoravarausten, OTA-kanavien ja kanavamixin tuottoa",
    "tarvitsee säännöllisen asiantuntijan johtamaan kaupallista päätöksentekoa",
  ],
  includes: SOLUTION_AREAS.map((a) => ({
    title: a.title,
    bullets: [...a.bullets],
  })),
  impact: SOLUTION.goal,
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
