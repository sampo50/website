export const SITE = {
  name: "Sami Olavuo",
  domain: "https://samiolavuo.com",
  tagline: "Hospitality Revenue Performance",
  email: "sami.olavuo@gmail.com",
  linkedIn: "https://www.linkedin.com/in/sami-olavuo",
} as const;

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
    href: "/revenue-audit",
    cta: "Tutustu Revenue Auditiin",
    price: "1 500-3 500 €",
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
    href: "/fractional-revenue-manager#packages",
    cta: "Tutustu Revenue Controliin",
    price: "1 200-2 500 €/kk",
  },
  {
    title: "Revenue Growth",
    description:
      "Taysi fractional revenue manager -palvelu kasvuhakuiselle hotellille tai serviced living -operaattorille.",
    focus: [
      "Viikoittainen kaupallinen rytmi",
      "Hinnoittelu, saatavuus ja rajoitukset",
      "Forecast, kanavamix ja segmentit",
      "Johtoa tukeva paatoksenteko",
    ],
    href: "/fractional-revenue-manager",
    cta: "Tutustu Revenue Growthiin",
    price: "2 500-4 500 €/kk",
  },
];

export const PACKAGE_COMPARISON = [
  {
    package: "Revenue Audit",
    bestWhen: "Haluat selkean kuvan nykytilasta ja 90 paivan toimintasuunnitelman",
    includes: "Analyysi, loydokset, hinnoittelu, kanavat, segmentit, jatkotoimenpiteet",
    model: "Kertaprojekti",
    href: "/revenue-audit",
  },
  {
    package: "Revenue Control",
    bestWhen: "Tarvitset kevyen jatkuvan mallin pienelle tai vakaalle kohteelle",
    includes: "Hinnoittelu, seuranta, forecast, kanavakontrolli, raportointi",
    model: "Kuukausiveloitus",
    href: "/fractional-revenue-manager#packages",
  },
  {
    package: "Revenue Growth",
    bestWhen: "Haluat tayden fractional revenue manager -mallin kasvun tueksi",
    includes: "Hinnoittelu, forecast, jakelustrategia, viikoittainen ohjaus, kaupallinen tuki",
    model: "Kuukausiveloitus",
    href: "/fractional-revenue-manager",
  },
];

export const SITE_INTRO = {
  headline: "Kaupallinen tulosohjaus ilman kokoaikaista rekrytointia",
  text: "Autan itsenaisia hotelleja, boutique-hotelleja ja serviced living -operaattoreita parantamaan hinnoittelua, kayttoastetta, kanavamixia ja ennustettavuutta jatkuvalla revenue management -mallilla.",
  text2:
    "Sopii erityisesti 25-120 huoneen hotelleille, serviced apartment -kohteille, aparthotelleille ja pienille hotelliportfolioille.",
  goal: "Tavoitteena on rakentaa jatkuva kaupallinen rytmi, jossa kysynta, hinnat ja kanavat ohjautuvat ajoissa eivatka vasta liian myohaan.",
};

export const HERO_TAGLINE =
  "Fractional Revenue Manager hotellillesi";

export const HERO_SUBTAGLINE =
  "Kasvata tuottoa strategisella hinnoittelulla, paremmalla forecastilla ja jatkuvalla revenue management -mallilla.";

export const PROBLEM_SIGNALS = [
  "Hintoja muutetaan liian harvoin tai liian myohaan",
  "Paatokset perustuvat tuntumaan, eivat kysyntadataan",
  "OTA-kanavat ohjaavat liikaa myyntia ja katetta",
  "Hiljaisiin jaksoihin reagoidaan vasta kun on liian myohaista",
  "Korkean kysynnan paivina potentiaalia jaa poydalle",
  "Ryhmä- ja long-stay-varauksia hyvaksytaan ilman displacement-analyysia",
  "Forecast ei ohjaa myyntia, markkinointia eika operatiivista suunnittelua",
] as const;

export const SOLUTION_AREAS = [
  {
    title: "Hinnoittelu ja kysynnan hallinta",
    description:
      "Paivittainen pickup-seuranta, dynaaminen hinnoittelu, korkean kysynnan paivien optimointi, hiljaisten jaksojen toimenpiteet seka minimiyopymisten ja saatavuusrajoitusten hallinta.",
  },
  {
    title: "Forecast ja raportointi",
    description:
      "90/180/365 paivan forecast, kuukausittainen revenue-raportti, KPI-seuranta seka selkea paatosloki: mita muutettiin, miksi ja mita seurataan seuraavaksi.",
  },
  {
    title: "Jakelustrategia",
    description:
      "OTA-kanavien optimointi, suoran myynnin kaupallinen tuki, kampanjoiden seuranta, hintapariteetin valvonta ja kanavakohtaisen nettotuoton arviointi.",
  },
  {
    title: "Serviced living -optimointi",
    description:
      "Lyhyiden ja pitkien varausten tasapainotus, corporate- ja long-stay-kysynnan hinnoittelu seka kayttoasteen, vaihtokustannusten ja kassavirran yhteensovittaminen.",
  },
] as const;

export const REVENUE_AUDIT = {
  eyebrow: "Kertaprojekti",
  headline: "Revenue Audit",
  subheadline:
    "Nykytilan analyysi ja 90 päivän kaupallinen toimintasuunnitelma",
  intro:
    "Revenue Audit on tiivis mutta syvällinen katsaus yrityksesi kaupalliseen nykytilaan. Auditissa selvitetään, missä hinnoittelu, saatavuuden hallinta, kysyntäennusteet, jakelukanavat ja kaupallinen päätöksenteko tällä hetkellä seisovat — ja mitä tulee tehdä seuraavaksi liikevaihdon, käyttöasteen ja kannattavuuden parantamiseksi.",
  fitIntro:
    "Auditoinnin jalkeen tiedat, missa nykyinen tulospotentiaali vuotaa, mitka paatokset vaikuttavat nopeimmin ja kannattaako jatkuva fractional revenue management ottaa kayttoon.",
  fitFor: [
    "haluaa parantaa hinnoittelua ja kaupallista suorituskykyä",
    "kokee, että nykyinen hinnoittelu perustuu liikaa tuntumaan",
    "haluaa hyödyntää dataa ja AI-avusteista hinnoittelua paremmin",
    "tarvitsee ulkopuolisen asiantuntijan näkemyksen nykytilasta",
    "suunnittelee kasvua, konseptin kehittämistä tai jakelustrategian uudistamista",
    "haluaa valmistautua AI-aikakauden kovenevaan kilpailuun",
  ],
  areas: [
    {
      title: "Hinnoittelu ja revenue management",
      description:
        "Nykyiset hinnat, hintarakenteet, sesonkiajattelu, kysyntäpiikit, minimiöiden käyttö, dynaamisen hinnoittelun taso ja mahdolliset tulovuodot.",
    },
    {
      title: "Forecasting ja kysynnän ennakointi",
      description:
        "Kuinka hyvin tulevaa kysyntää, käyttöastetta, markkinatilannetta ja varaustahdin muutoksia seurataan.",
    },
    {
      title: "Jakelukanavat ja kaupallinen näkyvyys",
      description:
        "OTA-kanavat, omat verkkosivut, suoravaraukset, kanavakohtainen kannattavuus, provisiokustannukset ja kanavamix.",
    },
    {
      title: "Kilpailijatilanne ja markkinapositio",
      description:
        "Miten yritys asemoituu suhteessa kilpailijoihin hinnan, arvon, saatavuuden ja kaupallisen houkuttelevuuden näkökulmasta.",
    },
    {
      title: "AI-valmius kaupallisessa tekemisessä",
      description:
        "Miten AI:ta voidaan hyödyntää hinnoittelussa, analytiikassa, kysyntäennusteissa, kilpailijaseurannassa ja päätöksenteon nopeuttamisessa.",
    },
  ],
  deliverables: [
    "Nykytilan revenue-analyysi",
    "Keskeiset löydökset ja tulovuodot",
    "Hinnoittelun ja forecasting-käytäntöjen arviointi",
    "Jakelukanavien ja kaupallisen rakenteen tarkastelu",
    "AI-avusteisen hinnoittelun mahdollisuuksien arviointi",
    "90 päivän toimintasuunnitelma",
    "Suositellut jatkotoimenpiteet",
    "Yhteinen läpikäyntipalaveri",
  ],
  benefits:
    "Revenue Audit auttaa tekemään parempia kaupallisia päätöksiä nopeammin. Tavoitteena ei ole pelkkä raportti, vaan selkeä suunnitelma siitä, miten liikevaihtoa, käyttöastetta ja kannattavuutta voidaan kehittää käytännössä. Saat ulkopuolisen revenue management -näkemyksen ilman pitkää sitoutumista.",
  price: "1 500-3 500 €",
  priceNote:
    "Laajemmat kokonaisuudet, useat kohteet tai portfoliot hinnoitellaan erikseen.",
  primaryCta: "Varaa Revenue Audit",
  secondaryCta: "Pyydä arvio yrityksesi tilanteesta",
};

export const FRACTIONAL_RM = {
  eyebrow: "Kuukausimalli",
  headline: "Fractional Revenue Manager",
  subheadline: "Kaupallinen tulosohjaus ilman kokoaikaista rekrytointia",
  intro:
    "Toimin ulkoistettuna revenue managerina, joka tuo hotellillenne viikoittaisen kaupallisen rytmin.",
  intro2:
    "Hinnoittelu, saatavuus, rajoitukset, kampanjat, segmentit ja jakelukanavat ohjataan jargestelmallisesti datan, kysynnan ja liiketoimintatavoitteiden perusteella.",
  intro3:
    "Tavoite ei ole tehda satunnaisia hintamuutoksia, vaan rakentaa toimintamalli, jossa johto nakee ajoissa missa kysynta vahvistuu, missa ollaan jaljessa ja mita paatoksia seuraavaksi tarvitaan.",
  fitFor: [
    "haluaa kehittaa liikevaihtoa ja kannattavuutta jatkuvasti",
    "tarvitsee revenue managerin, mutta ei kokoaikaisesti",
    "haluaa ammattimaisemman hinnoittelun ja forecasting-prosessin",
    "operoi itsenaisessa hotellissa, boutique-hotellissa, serviced apartment -kohteessa tai pienessa hotellisalkussa",
    "haluaa parantaa suoravarausten, OTA-kanavien ja jakelustrategian tuottoa",
    "tarvitsee saannollisen asiantuntijan johtamaan kaupallista päätöksentekoa datan pohjalta",
  ],
  includes: [
    {
      title: "Hinnoittelu ja kysynnan hallinta",
      description:
        "Paivittainen pickup-seuranta, dynaaminen hinnoittelu, korkean kysynnan paivien optimointi, hiljaisten jaksojen toimenpiteet seka minimiyopymisten ja saatavuusrajoitusten hallinta.",
    },
    {
      title: "Forecast ja raportointi",
      description:
        "90/180/365 paivan forecast, kuukausittainen revenue-raportti, KPI-seuranta seka selkea paatosloki: mita muutettiin, miksi ja mita seurataan seuraavaksi.",
    },
    {
      title: "Jakelustrategia",
      description:
        "OTA-kanavien optimointi, suoran myynnin kaupallinen tuki, kampanjoiden seuranta, hintapariteetin valvonta ja kanavakohtaisen nettotuoton arviointi.",
    },
    {
      title: "Serviced living -optimointi",
      description:
        "Lyhyiden ja pitkien varausten tasapainotus, corporate- ja long-stay-kysynnan hinnoittelu seka kayttoasteen, vaihtokustannusten ja kassavirran yhteensovittaminen.",
    },
  ],
  impact:
    "Fractional Revenue Manager ei ole pelkkä hinnaston päivittäjä. Palvelun ytimessä on kaupallinen vaikutus: miten jokainen päätös hinnoittelusta, saatavuudesta, kanavista ja kysynnän ennakoinnista tukee yrityksen kasvua ja kannattavuutta.",
  impact2:
    "Tavoitteena on rakentaa yritykselle järjestelmällinen revenue management -malli, jossa päätöksiä tehdään datan, markkinan ja strategian pohjalta — ei pelkästään historiallisen käyttöasteen tai kilpailijoiden hintojen mukaan.",
  whyNow:
    "AI muuttaa majoitus- ja serviced living -alan kaupallista kilpailua nopeasti. Yritykset, jotka osaavat hyödyntää dataa, automaatiota ja AI-avusteista analytiikkaa, pystyvät reagoimaan markkinaan nopeammin, hinnoittelemaan tarkemmin ja tunnistamaan kysyntäsignaaleja ennen kilpailijoita.",
  whyNow2:
    "Palvelun avulla yrityksesi saa käyttöönsä modernin revenue management -ajattelun ja työkalut, joiden avulla menestyminen ei perustu arvailuun vaan jatkuvaan kaupalliseen optimointiin.",
  outcome:
    "Saat käyttöösi senior-tason revenue management -osaamisen ilman kokoaikaista rekrytointia. Palvelu auttaa yritystä tekemään nopeampia, tarkempia ja kannattavampia päätöksiä hinnoittelusta, kysynnästä, jakelusta ja kaupallisesta kasvusta.",
  primaryCta: "Osta Fractional Revenue Manager -palvelu",
  secondaryCta: "Varaa kartoituspuhelu",
};

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
      "Pickup- ja kysyntaseuranta",
      "Hinnoittelun suositukset",
      "Forecastin lapikaynti",
      "Kanavien ja saatavuuden tarkistus",
      "Kuukausittainen revenue-raportti",
    ],
    price: "1 200-2 500 €/kk",
  },
  {
    name: "Revenue Growth",
    description:
      "Taysi fractional revenue manager -palvelu kasvuhakuiselle hotellille tai serviced living -operaattorille.",
    includes: [
      "Viikoittainen hinnoittelun optimointi",
      "90/180/365 paivan forecast",
      "Kanavamixin ja nettotuoton ohjaus",
      "Korkean ja hiljaisen kysynnan toimenpiteet",
      "Revenue-palaverit johdolle tai tiimille",
      "Paatosloki ja kaupallinen raportointi",
    ],
    price: "2 500-4 500 €/kk",
  },
];

export const PROOF_BULLETS = [
  "Revenue-strategian vastuu noin 12 M€ monikohdeportfoliosta",
  "Noin 7 % vuosittainen parannus keskeisissä revenue KPI:issa",
  "Yli 300 000 € vuosittainen kaupallinen mahdollisuus tunnistettu",
  "Käytännön kokemus forecastingista, Power BI:stä, SQL:stä ja raportoinnista",
  "Työskentely hinnoittelun, operatiivin, talouden ja johdon välillä",
];

export const HERO_PROOF_STRIP = [
  "Itsenaiset hotellit ja boutique-hotellit",
  "Serviced living ja aparthotellit",
  "25-120 huonetta tai pieni portfolio",
  "Jatkuva kaupallinen rytmi ilman rekrytointia",
];

export const CLIENT_TYPES = [
  "Serviced apartments",
  "Aparthotels",
  "Boutique-hotellit",
  "Serviced living",
  "Coliving",
  "Hotellihuoneistot",
] as const;
