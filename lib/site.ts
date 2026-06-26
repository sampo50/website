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
      "Nykytilan analyysi ja 90 päivän kaupallinen toimintasuunnitelma. Tiivis mutta syvällinen katsaus hinnoitteluun, forecastingiin, jakelukanaviin ja AI-valmiuteen.",
    focus: [
      "Nykytilan revenue-analyysi",
      "Hinnoittelun ja forecasting-käytäntöjen arviointi",
      "Jakelukanavien ja kaupallisen rakenteen tarkastelu",
      "AI-avusteisen hinnoittelun mahdollisuudet",
      "90 päivän toimintasuunnitelma",
    ],
    href: "/revenue-audit",
    cta: "Tutustu Revenue Auditiin",
    price: "Alkaen 2 900 € + alv",
  },
  {
    title: "Fractional Revenue Manager",
    description:
      "Ulkopuolinen revenue manager kuukausimallilla. Strateginen hinnoittelu, forecasting, kaupallinen analytiikka ja AI-avusteinen päätöksenteko ilman kokoaikaista rekrytointia.",
    focus: [
      "Dynaaminen hinnoittelu ja saatavuuden hallinta",
      "Forecasting ja kaupallinen ennustaminen",
      "AI-avusteinen hinnoittelu ja analytiikka",
      "Jakelukanavien optimointi",
      "Säännölliset revenue-palaverit ja raportointi",
    ],
    href: "/fractional-revenue-manager",
    cta: "Tutustu palveluun",
    price: "Alkaen 1 500 € / kk + alv",
  },
];

export const PACKAGE_COMPARISON = [
  {
    package: "Revenue Audit",
    bestWhen: "Haluat selkeän kuvan nykytilasta ja 90 päivän toimintasuunnitelman",
    includes: "Auditointi, löydökset, hinnoittelun arviointi, forecast-katsaus, jatkotoimenpiteet",
    model: "Kertaprojekti",
    href: "/revenue-audit",
  },
  {
    package: "Fractional Revenue Manager",
    bestWhen: "Haluat jatkuvan revenue managerin ilman kokoaikaista rekrytointia",
    includes: "Hinnoittelu, forecasting, AI-avusteinen analytiikka, jakelustrategia, raportointi",
    model: "Kuukausiveloitus",
    href: "/fractional-revenue-manager",
  },
];

export const SITE_INTRO = {
  headline: "Revenue management, joka vaikuttaa suoraan liikevaihtoon",
  text: "Majoitus- ja serviced living -liiketoiminnassa kaupallinen menestys syntyy oikeasta hinnasta, oikeasta saatavuudesta, oikeasta kanavamixistä ja kyvystä ennakoida kysyntää ennen markkinaa.",
  text2:
    "Autan yrityksiä rakentamaan modernin revenue management -mallin, jossa strateginen hinnoittelu, forecasting, kaupallinen analytiikka ja AI-avusteinen päätöksenteko yhdistyvät käytännön toimenpiteiksi.",
  goal: "Tavoitteena on kasvattaa liikevaihtoa, parantaa kannattavuutta ja vahvistaa yrityksen kilpailukykyä AI-aikakaudella.",
};

export const HERO_TAGLINE =
  "Kasvata majoitusliiketoimintasi tuottoa strategisella hinnoittelulla, forecastingilla ja AI-avusteisella revenue managementilla.";

export const HERO_SUBTAGLINE =
  "Autan majoitus- ja serviced living -yrityksiä tekemään parempia kaupallisia päätöksiä, optimoimaan hinnoittelua ja rakentamaan kilpailuetua datan sekä AI:n avulla.";

export const REVENUE_AUDIT = {
  eyebrow: "Kertaprojekti",
  headline: "Revenue Audit",
  subheadline:
    "Nykytilan analyysi ja 90 päivän kaupallinen toimintasuunnitelma",
  intro:
    "Revenue Audit on tiivis mutta syvällinen katsaus yrityksesi kaupalliseen nykytilaan. Auditissa selvitetään, missä hinnoittelu, saatavuuden hallinta, kysyntäennusteet, jakelukanavat ja kaupallinen päätöksenteko tällä hetkellä seisovat — ja mitä tulee tehdä seuraavaksi liikevaihdon, käyttöasteen ja kannattavuuden parantamiseksi.",
  fitIntro:
    "Revenue Audit sopii erityisesti yrityksille, jotka haluavat tunnistaa nopeasti suurimmat revenue management -mahdollisuudet ja rakentaa selkeän 90 päivän etenemissuunnitelman.",
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
  price: "Alkaen 2 900 € + alv",
  priceNote:
    "Laajemmat kokonaisuudet, useat kohteet tai portfoliot hinnoitellaan erikseen.",
  primaryCta: "Varaa Revenue Audit",
  secondaryCta: "Pyydä arvio yrityksesi tilanteesta",
};

export const FRACTIONAL_RM = {
  eyebrow: "Kuukausimalli",
  headline: "Fractional Revenue Manager",
  subheadline: "Ulkopuolinen revenue manager kuukausimallilla",
  intro:
    "Fractional Revenue Manager on palvelu yrityksille, jotka tarvitsevat kokeneen revenue managerin osaamista, mutta eivät välttämättä kokoaikaista henkilöä omille palkkalistoilleen.",
  intro2:
    "Toimin yrityksesi ulkopuolisena kaupallisena asiantuntijana ja vastaan revenue managementin keskeisistä tehtävistä kuukausiveloitteisesti. Palvelu tuo käyttöösi strategisen hinnoitteluosaamisen, kysynnän ennakoinnin, kaupallisen analytiikan ja AI-avusteisen päätöksenteon ilman rekrytoinnin hitautta tai kiinteän henkilöstökulun riskiä.",
  fitFor: [
    "haluaa kehittää liikevaihtoa ja kannattavuutta jatkuvasti",
    "tarvitsee revenue managerin, mutta ei kokoaikaisesti",
    "haluaa ammattimaisemman hinnoittelun ja forecasting-prosessin",
    "operoi majoitus-, serviced living-, aparthotel-, hotellihuoneisto- tai hospitality-liiketoiminnassa",
    "haluaa parantaa suoravarausten, OTA-kanavien ja jakelustrategian tuottoa",
    "haluaa rakentaa kaupallista kilpailuetua AI-aikakaudella",
    "tarvitsee säännöllisen asiantuntijan johtamaan kaupallista päätöksentekoa datan pohjalta",
  ],
  includes: [
    {
      title: "Dynaaminen hinnoittelu",
      description:
        "Hintojen aktiivinen optimointi kysynnän, sesonkien, tapahtumien, kilpailutilanteen, varaustahdin ja käyttöasteen perusteella.",
    },
    {
      title: "Forecasting ja kaupallinen ennustaminen",
      description:
        "Kysynnän, käyttöasteen, RevPARin, ADR:n, liikevaihdon ja varaustahdin seuranta sekä ennusteiden rakentaminen päätöksenteon tueksi.",
    },
    {
      title: "AI-avusteinen hinnoittelu ja analytiikka",
      description:
        "AI-työkalujen hyödyntäminen hinnoittelun, markkinaseurannan, kilpailija-analyysin, skenaarioiden ja kaupallisen reagointikyvyn parantamisessa.",
    },
    {
      title: "Kaupallinen strategia",
      description:
        "Revenue managementin yhdistäminen myyntiin, markkinointiin, jakeluun, asiakassegmentteihin ja liiketoiminnan tavoitteisiin.",
    },
    {
      title: "Jakelukanavien optimointi",
      description:
        "Kanavamixin, provisiokustannusten, suoravarausten, OTA-kanavien ja saatavuuden hallinnan kehittäminen.",
    },
    {
      title: "Raportointi ja päätöksenteon tuki",
      description:
        "Selkeät kuukausittaiset havainnot, toimenpiteet ja suositukset johdolle tai operatiiviselle tiimille.",
    },
    {
      title: "Revenue-palaverit",
      description:
        "Säännölliset kaupalliset palaverit, joissa käydään läpi tilanne, luvut, riskit, mahdollisuudet ja seuraavat toimenpiteet.",
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
    name: "Essential",
    description:
      "Kevyt kuukausimalli pienemmille toimijoille tai yksittäisille kohteille.",
    includes: [
      "Kuukausittainen revenue-analyysi",
      "Hinnoittelun suositukset",
      "Forecastin läpikäynti",
      "Kanavien ja saatavuuden tarkistus",
      "Yksi revenue-palaveri kuukaudessa",
    ],
    price: "Alkaen 1 500 € / kk + alv",
  },
  {
    name: "Growth",
    description:
      "Aktiivinen revenue management -malli yrityksille, joilla on selkeä kasvutavoite.",
    includes: [
      "Säännöllinen hinnoittelun optimointi",
      "Kysyntä- ja varaustahdin seuranta",
      "Kuukausittainen forecast",
      "Kilpailija- ja markkinaseuranta",
      "AI-avusteisen hinnoittelun kehittäminen",
      "Kaksi revenue-palaveria kuukaudessa",
      "Johdon kaupallinen raportointi",
    ],
    price: "Alkaen 2 900 € / kk + alv",
  },
  {
    name: "Strategic Partner",
    description:
      "Laajempi kumppanuus useamman kohteen, portfolion tai kasvuyhtiön tarpeisiin.",
    includes: [
      "Jatkuva revenue management -ohjaus",
      "Portfolio- ja kohdetason hinnoittelustrategia",
      "Forecast-prosessin rakentaminen",
      "AI-avusteiset kaupalliset mallit ja työkalut",
      "Jakelustrategian kehitys",
      "Suoravarausten ja kanavamixin optimointi",
      "Säännöllinen johtoryhmätason sparraus",
      "Kaupallisten mittareiden ja toimintamallien kehittäminen",
    ],
    price: "Alkaen 4 900 € / kk + alv",
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
  "Revenue Audit tai Fractional Revenue Manager",
  "Majoitus- ja serviced living -yritykset",
  "Hinnoittelu, forecasting ja AI-avusteinen analytiikka",
  "Rajoitettu määrä asiakkaita kerrallaan",
];

export const CLIENT_TYPES = [
  "Serviced apartments",
  "Aparthotels",
  "Boutique-hotellit",
  "Serviced living",
  "Coliving",
  "Hotellihuoneistot",
] as const;
