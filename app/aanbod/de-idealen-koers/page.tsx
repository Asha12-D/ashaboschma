import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import AutoPlayVideo from '@/components/AutoPlayVideo';
import { WACHTLIJST_URL } from '@/lib/links';

const beschrijving =
  'Een leiderschapsprogramma voor vrouwen die moederen en meer rust, energie en leiderschap willen nemen over hun betekenisvolle leven.';

export const metadata: Metadata = {
  title: { absolute: 'De Idealen Koers · Asha Boschma' },
  description: beschrijving,
  alternates: {
    canonical: '/aanbod/de-idealen-koers',
  },
  openGraph: {
    title: 'De Idealen Koers · Asha Boschma',
    description: beschrijving,
    url: '/aanbod/de-idealen-koers',
    siteName: 'Asha Boschma',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/fotos/web/og-idealen-koers.jpg',
        width: 1200,
        height: 630,
        alt: 'De Idealen Koers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/fotos/web/og-idealen-koers.jpg'],
  },
};

const btnPrimary =
  'inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity';
const btnSecondary =
  'inline-block bg-secundair-kleur text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity';
const btnAccent =
  'inline-block bg-accent text-tekst font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity';
const btnOutline =
  'inline-block border border-primair text-primair font-bold px-8 py-3 rounded-full hover:bg-primair/5 transition-colors';
const btnOutlineWit =
  'inline-block border border-wit text-wit font-bold px-8 py-3 rounded-full hover:bg-wit/10 transition-colors';

const koersPunten = [
  'In een kleine groep begeleid ik je van verlangen naar dromen naar idealen',
  'Zes live sessies en een warme community',
  'Kennis en praktische tools uit ACT, transitiekunde en matrescentie',
  'Precies genoeg structuur voor houvast, met ruimte voor stilte, reflectie en beweging',
];

const showBubble = true;
const gedachte = 'en die boerderij met moestuin kopen en een wereldreis met je gezin.';

const painPoints = [
  'Je hebt veel om voor te zorgen en soms voelt het alsof je altijd aanstaat.',
  'Vermoeidheid houdt je nog tegen het leven te leiden dat je je kinderen graag voorleeft.',
  'Je ervaart financiële druk waardoor je suffe bullshit job je tegen het randje van burn out laat aanhikken.',
  'Je wilt stiekem alles tegelijk; die nieuwe carrièrestap, thuis aanwezig zijn, leuke partner en liefste vriendin zijn.',
];

const processSteps = [
  {
    title: 'Verlangen',
    text: 'Waar verlang je naar?',
    circle: 'bg-primair text-wit',
    icon: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />,
  },
  {
    title: 'Dromen en wensen',
    text: 'Jouw creatiekracht inzetten.',
    circle: 'bg-primair text-wit',
    icon: <path d="M12 3l2.2 5.6L20 9.3l-4.4 3.8L17 19l-5-3.1L7 19l1.4-5.9L4 9.3l5.8-.7L12 3z" />,
  },
  {
    title: 'Ideaal',
    text: 'Jouw kompas voor je leven',
    circle: 'bg-primair text-wit ring-4 ring-accent',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
      </>
    ),
  },
];

const kompasSteps = [
  {
    title: 'Stap 1: Naar binnen keren',
    description:
      'Focus op rust, ademruimte en overzicht. Je leert patronen herkennen en doorbreken die jou uitputten.',
  },
  {
    title: 'Stap 2: Dat wat ertoe doet',
    description:
      'Niet de verwachtingen van anderen, maar jouw waarden en dromen voorop stellen. Je voelt hoe je koers zich ontvouwt en verzamelt moed voor de keuzes die je maakt.',
  },
  {
    title: 'Stap 3: Kleine, haalbare stappen',
    description:
      'Met steun van de groep en ritme in de 35 dagen, merk jij hoe je dagelijks meer energie hebt, meer plezier in je gezin ervaart en ga je van ploeteren naar koesteren.',
  },
];

const nodigItems = [
  {
    title: 'Meer tijd en energie',
    description:
      'Geen avonden meer uitgeput op de bank maar voldaan → je krijgt tot 5 uur per week terug omdat je minder verdwaalt in scrollen/schermen en je tijd leert indelen die écht bij je waarden passen.',
  },
  {
    title: 'Rust in je hoofd en lijf',
    description:
      'Van overleven naar opladen: door helderheid en koers, voel je je fysiek en mentaal sterker. Je hebt weer energie om met je kinderen te spelen, projecten aan te pakken en écht aanwezig te zijn.',
  },
  {
    title: 'Zelfvertrouwen in je keuzes',
    description:
      'Je weet wat belangrijk is en durft "nee" te zeggen zonder schuldgevoel. Dat levert je minder twijfel en meer vrijheid in je dagelijks leven op.',
  },
];

const scenarioChecklist = [
  'Ik maak keuzes die passen bij mijn waarden en bij mijn gezin, zonder schuldgevoel',
  'Ik ben een voorbeeld voor mijn kinderen door trouw te zijn aan mijn idealen.',
  'Ik voel me gedragen door een club vrouwen die mij begrijpen en steunen.',
  'Ik leid mijn leven met vertrouwen en richting en dat voelt eindelijk als echt leven',
];

const voorJouAls = [
  'Je voelt dat je als vrouw meer wilt dan ploeteren en overleven, en je verlangt naar rust, energie en richting.',
  'Je bereid bent eerlijk naar jezelf te kijken en kleine stappen te zetten om te leven volgens je waarden en idealen.',
  'Je het belangrijk vindt om niet alleen voor je kinderen te zorgen, maar ook voor je eigen innerlijke leiderschap en toekomst.',
  "Je nieuwsgierig bent naar het leven achter de 'wat als ik... dan...'",
];

const nietVoorJouAls = [
  'Je op zoek bent naar snelle oplossingen zonder innerlijk werk te willen doen.',
  'Je geen tijd of energie wilt investeren in je persoonlijke groei en liever in je oude patronen blijft functioneren.',
  'Je behoefte hebt aan opvoedtips, slaapcoaching en eetmethodes. In dit programma staat niet de pedagogiek maar persoonlijk leiderschap centraal; jij dus. Ik noem dat zelfopvoeding.',
];

const testimonials = [
  {
    quote:
      "Je leerde me een belangrijk inzicht over perfectionisme: dat dat altijd gaat over vermijden. Dat heeft me enorm veel inzicht gegeven. Je maakte me weer bewuster van taal (waar zeg ik 'moeten' of 'vinden') en je hield me een waardevolle spiegel voor die me aan het denken zetten over mijn vraagstuk.",
    name: 'Moeder · 1-op-1 coaching',
  },
  {
    quote:
      'Het heerlijke kampvuur van Asha gaf mij een uurtje reflectie om te her-ijken voor deze zomer. Wat ik deze zomer wil laten? Wat mij helpt om mijn eigen relaxte koers te varen? Wat doet mijn eigen vuur branden? Er ontstond stiekem een "game plan" om deze zomer relaxter door te komen.',
    name: 'Moeder · deelnemer Vonk van verlangen',
  },
  {
    quote:
      'Leuk en verrassend om zo virtueel samen te komen. Het was echt even tijd voor mezelf om mijn innerlijk weer aan te wakkeren. Dankjewel Asha ✨🙌🔥✨',
    name: 'Moeder · deelnemer Vonk van verlangen',
  },
];

const routeSteps = [
  {
    foto: '12',
    stap: 'Stap 1: Koesteren',
    title: 'Rust en aandacht',
    description:
      'Eerst vertragen: ruimte maken voor jezelf en je gezin, herstellen van vermoeidheid en in kaart brengen waar je nu staat.',
  },
  {
    foto: '11',
    stap: 'Stap 2: Oriënteren',
    title: 'Waarden en koers',
    description:
      'Onderzoek wat echt belangrijk voor je is en wat je richting geeft in je keuzes als vrouw, moeder en leider van je eigen leven.',
  },
  {
    foto: '20',
    stap: 'Stap 3: Experimenteren',
    title: 'Kleine stappen',
    description:
      'In kleine stappen in beweging komen, zonder perfectie: een gesprek, een moment voor jezelf, dat nieuwe recept dat je wilde koken.',
  },
  {
    foto: '23',
    stap: 'Stap 4: Ritme',
    title: 'Seizoenen en rituelen',
    description:
      'Een ritme creëren dat bij jou past, met rituelen die je door de seizoenen heen ondersteunen en je energie voeden in plaats van uitputten.',
  },
  {
    foto: '15',
    stap: 'Stap 5: Schakelen',
    title: 'Doorgaan en bijsturen',
    description:
      'Koers houden als het tegenzit: flexibel bijsturen en trouw blijven aan je ideaal, zonder jezelf kwijt te raken.',
  },
];

const rijtjeItems = [
  {
    title: '6 live sessies in Deventer met mij als jouw begeleider',
    description:
      'Zes weken lang komen we wekelijks samen op dinsdagavond (20:00–21:30) in Deventer. De data van de volgende ronde volgen binnenkort. Ik begeleid je stap voor stap van verlangen → droom → wens → ideaal. We werken met inzichten uit transitiekunde, ACT en matrescentie, zodat je niet blijft hangen in denken, maar ook gaat voelen en handelen.',
  },
  {
    title: 'Een fijne groep van max. 10 vrouwen',
    description:
      'Een kleine groep vrouwen waarin je gezien en gehoord wordt. Je deelt, leert en groeit samen, met vrouwen die net als jij zoeken naar rust, richting en betekenis.',
  },
  {
    title: 'Wisdom of the crowds',
    description:
      'Het idee achter "wisdom of the crowds" is dat de gezamenlijke kennis van een groep vaak meer waard is dan het oordeel van één expert. Zo werkt ook deze groep: naast mijn begeleiding leer je van de ervaringen, inzichten en vragen van de andere vrouwen. Je herkent jezelf in elkaar, vindt steun en inspiratie, en ontdekt dat veel antwoorden die je zoekt al in de kring aanwezig zijn. Ook tussen de sessies door blijf je met elkaar verbonden, zodat je nooit het gevoel hebt dat je er alleen voor staat.',
  },
  {
    title: 'Praktische tools en haalbaarheid',
    description:
      'Geen dikke readers, maar kleine opdrachten en reflecties die je makkelijk kunt doen in je volle bestaan. Alles gericht op het maken van keuzes die echt bij jou passen.',
  },
];

const honderdDagen = [
  {
    title: 'Rust en energie in je dagelijks leven',
    description:
      'Je vindt rust en energie terug zodat je niet continue 1-0 achterloopt voor je gevoel, maar weer vanuit kracht en ontspanning aanwezig kunt zijn.',
  },
  {
    title: 'Een heldere koers',
    description:
      'In 35 dagen ontwikkel je een duidelijke richting, gebaseerd op je waarden en idealen, zodat je weet waar je voor staat én waar je naartoe beweegt.',
  },
  {
    title: 'Koesterjaren i.p.v. zware tropenjaren',
    description:
      'Je leert jezelf opnieuw opvoeden vanuit innerlijk leiderschap, waardoor je niet langer overleeft maar ruimte maakt voor rust, energie en liefdevolle keuzes.',
  },
  {
    title: 'Leiderschap van binnenuit',
    description:
      'Je doorbreekt patronen en leert keuzes maken die écht bij je passen, zonder concessies aan je moederschap of je ambities.',
  },
  {
    title: 'Energie die blijft stromen',
    description:
      'Je verbindt je idealen aan je dagelijks leven zodat wat jij belangrijk vindt ook zichtbaar wordt in hoe je leeft en moeder bent.',
  },
  {
    title: 'Samen groeien',
    description:
      'Je doet dit niet alleen, maar samen met een veilige groep gelijkgestemde vrouwen die begrijpen wat jij doormaakt. Samen vieren we de stappen, delen we de struggles en stimuleren we elkaars idealen.',
  },
];

const maanden = [
  {
    naam: 'Week 1-2',
    actief: 1,
    description:
      'Jij stapt in en plant de 6 sessies in Deventer in je agenda. Komende zes weken gaan we aan de slag en we starten bij je verlangens.',
  },
  {
    naam: 'Week 3-4',
    actief: 2,
    description:
      'Naast dat we elkaar in Deventer ontmoeten, reserveer je een uur per week in je agenda (of 10 minuten per dag). We gaan van verlangens naar je dromen en wensen… Het wordt spannend, confronterend en leuk!',
  },
  {
    naam: 'Week 5-6',
    actief: 3,
    description:
      'Jouw idealen zijn geboren. We hebben samen zes weken gereisd (35 dagen). We verbinden wat voor jou belangrijk is aan jouw wensen aan wat de wereld nodig heeft. Het valt allemaal samen en joeeeeee, dat geeft energie.',
  },
];

const alsJeVoelt = [
  'Je patronen te doorbreken die je tegenhouden',
  'Ruimte te scheppen zodat handelen haalbaar wordt',
  'Ondersteuning ervaren zodat je niet alleen hoeft te ploeteren',
];

const faq = [
  {
    vraag: 'Ik ben bang dat ik tijd tekort kom',
    antwoord:
      'Precies daarom is dit programma zo ingericht: gerichte lives en concrete acties. Geen extra to-do\'s, maar juist minder.',
  },
  {
    vraag: 'Fysiek afspreken past niet in mijn agenda',
    antwoord:
      'Toch weet ik uit ervaring dat samenkomen op een vaste plek, in het centrum van Deventer, juist rust en verbinding geeft: je hoeft niets te regelen, alleen aanwezig te zijn. Om deze reden heb ik de groep ook klein gehouden. Ik hoop dat je jezelf deze ruimte gunt.',
  },
  {
    vraag: 'Ik weet al wat ik wil',
    antwoord:
      'Super! En is het gelukt om ook in actie te komen vanuit rust? Daar ligt de werkelijke transitie naar wat jij wilt. Je kunt nu stoppen met in cirkels draaien.',
  },
];

export default function IdealenKoersPage() {
  return (
    <>
      {/* Hero */}
      <div className="hero-section" style={{ backgroundImage: "url('/fotos/portret.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl leading-tight">
            Leid je leven vanuit je idealen. Zonder te hoeven kiezen tussen moederschap
            of ambitie.
          </h1>
          <p className="text-white/80 max-w-xl text-lg leading-relaxed mb-2">
            Voor vrouwen die moeder zijn en hun eigen koers gaan varen.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#waarom" className="hero-btn-outline">
              Lees meer
            </a>
            <a href={WACHTLIJST_URL} className="hero-btn">
              Dat ben ik
            </a>
          </div>
        </div>
      </div>

      {/* Nieuwe definitie van ambitie */}
      <section id="waarom" className="max-w-5xl mx-auto px-6 py-20">
        <div className="two-col">
          <div className="col-text">
            <p className="text-tekst/80 leading-relaxed mb-8 reveal">
              Van ploeteren naar koesteren: een ontbijt zonder haast, een peuter die je hand
              vasthoudt tijdens een boswandeling en het gevoel dat jouw idealen er mogen zijn.
            </p>
            <p className="text-sm md:text-base font-bold uppercase tracking-wide text-primair/70 mb-3 reveal">
              Je hebt een nieuwe definitie van ambitie nodig
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primair mb-6 reveal">
              Veel vrouwen die moeder geworden zijn, vragen zich af wie ze nu geworden zijn.
            </h2>
            <p className="text-tekst/80 leading-relaxed reveal">
              Je hebt energie en zin om je talent in te zetten voor datgene dat je belangrijk vindt
              voor de toekomstige generatie en onze aarde. Meer tijd met je kinderen wanneer je dat
              wenst en juist een werkomgeving waarin jij kan floreren. Je wilt je kinderen een leven
              voorleven waar jij zelf energie van krijgt.
            </p>
          </div>
          <div className="col-image">
            <img src="/fotos/web/29.jpg" alt="Moeder met baby in een bloemenveld" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Pijnpunten */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="two-col flip">
          <div className="col-text">
            <p className="text-sm md:text-base font-bold uppercase tracking-wide text-primair/70 mb-3 reveal">
              Je blijft alleen hier tegenaanlopen
            </p>
            <div className="space-y-6">
              {painPoints.map((point, i) => (
                <div key={i}>
                  <p className="text-lg font-bold text-tekst reveal">{point}</p>
                  {showBubble && i === painPoints.length - 1 && (
                    <div className="relative mt-8 ml-8 inline-block max-w-[17rem] -rotate-2 transition-transform duration-300 hover:rotate-1 hover:scale-105">
                      <div className="rounded-[2.2rem_3rem_2.4rem_3.2rem] bg-wit border-2 border-primair/25 px-6 py-4 shadow-sm">
                        <p className="text-2xl leading-snug text-primair font-[family-name:var(--font-handschrift)]">{gedachte}</p>
                      </div>
                      <span className="absolute -top-3 left-4 w-3.5 h-3.5 rounded-full bg-wit border-2 border-primair/25" />
                      <span className="absolute -top-6 left-1 w-2 h-2 rounded-full bg-wit border-2 border-primair/25" />
                    </div>
                  )}
                  {i < painPoints.length - 1 && <hr className="border-dashed border-primair/30 mt-6" />}
                </div>
              ))}
            </div>
          </div>
          <div className="col-image">
            <img src="/fotos/web/22.jpg" alt="Vrouw met laptop op de vloer" loading="lazy" />
          </div>
        </div>
        <p className="text-center text-xl md:text-2xl font-bold text-primair max-w-2xl mx-auto mt-12 reveal">
          Het is normaal dat je jezelf soms even kwijt bent in een samenleving die nooit voor ons,
          moeders, is gebouwd. Wat als ambitie niet betekent dat je meer moet, maar dat je weet
          waar je voor staat?
        </p>
        <div className="text-center mt-6">
          <a href={WACHTLIJST_URL} className={btnAccent}>
            Jouw shift begint hier
          </a>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-primair py-16 px-6">
        <blockquote className="max-w-3xl mx-auto text-center">
          <p className="text-wit text-xl md:text-2xl font-bold leading-relaxed reveal">
            &quot;De coaching van Asha bracht mij precies bij de essentie van wat ik nu te voelen
            en te doen heb. In 45 minuten had ik doorvoeld wat er in mij leeft en een{' '}
            <em>praktische toegewijde actie</em> om mee aan de slag te gaan.&quot;
          </p>
          <footer className="text-wit/70 mt-6">Marcella</footer>
        </blockquote>
      </section>

      {/* Wat als jij over 6 weken zegt */}
      <section className="max-w-5xl mx-auto px-6 pt-16 md:pt-24 pb-20">
        <div className="two-col flip">
          <div className="col-text">
            <h2 className="text-3xl md:text-4xl font-bold text-primair mb-6 reveal">
              Wat als jij over 6 weken zegt:
            </h2>
            <ul id="scenario-list" className="space-y-3">
              {scenarioChecklist.map(item => (
                <li key={item} className="flex gap-3 text-tekst/80">
                  <span className="text-secundair-kleur font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-tekst/80 leading-relaxed mt-6 reveal">
              Stop met denken &apos;als mijn kinderen groot zijn&apos;, &apos;dat komt later in een
              andere fase wel&apos; of &apos;als ik weer meer energie heb&apos;.
            </p>
            <p className="text-tekst/80 leading-relaxed mt-4 reveal">
              Je dromen zijn niet iets om weg te duwen over de rand van de tijd. Gun jezelf het
              leiden van je idealen nu en je zult ook{' '}
              <em>genieten van de weg er naar toe</em>.
            </p>
          </div>
          <div className="col-image">
            <img src="/fotos/web/2.jpg" alt="Vrouw geniet van de zon" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Het is mogelijk */}
      <section id="mogelijk" className="scroll-mt-24 max-w-5xl mx-auto px-6 py-20">
        <div className="two-col">
          <div className="col-text">
            <p className="text-sm md:text-base font-bold uppercase tracking-wide text-primair/70 mb-3 reveal">
              Het is mogelijk
            </p>
            <p className="text-tekst/80 leading-relaxed reveal">
              Ik was ook uitgeput, ik vond het schakelen tussen werk en thuis zwaar en probeerde
              alles voor iedereen goed te doen en vooral: alles tegelijk. Tot ik ontdekte dat
              moederschap niet het einde van mijn idealen hoefde te zijn, maar moederschap juist
              de plek is waar mijn leiderschap opnieuw geboren werd. Dat is een perspectief dat ik
              maar in weinig verhalen meekreeg over het moederschap.
            </p>
          </div>
          <div className="col-image">
            <img src="/fotos/web/3.jpg" alt="Hand strijkt door lavendel" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Bio Asha */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="two-col">
          <div className="col-text">
            <p className="text-sm md:text-base font-bold uppercase tracking-wide text-primair/70 mb-3 reveal">
              Ik zie, ik zie wat jij (nog) niet ziet
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primair mb-6 reveal">
              Hoi, mijn naam is Asha.
            </h2>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">
              De afgelopen jaren werkte ik in transities in de duurzaamheid- en welzijnssector, na
              jaren in HR gewerkt te hebben. Ik ontdekte: de grootste transitie vindt niet op
              kantoor plaats, maar thuis, als je moeder wordt. Boeken van o.a. Jessie Harrold en
              Lucy Jones bevestigden wat ik zelf ervoer: matrescentie, de transitie van vrouw naar
              moeder, is een levensgrote transitie. Ik bundel mijn ervaring als gecertificeerd
              trainer in ACT met mijn eigen reis als moeder van twee dochters en specialisatie in de
              matrescentie. Daardoor kan ik jou helpen waar je nu nog vastloopt: niet door harder
              te werken of nog meer te moeten. Ik leer je terug te keren naar rust, je koers en te
              leiden op jouw manier.
            </p>
            <p className="font-koppen text-2xl md:text-3xl leading-snug text-primair border-l-4 border-accent pl-5 my-8 reveal">
              Mijn superkracht is dat ik complexe transities menselijk maak.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">
              Ik weet hoe je vast kunt lopen in patronen en wat er nodig is om daar liefdevol uit te
              breken. Ik ben niet de coach die je harder laat werken, maar leer je te leiden vanuit
              rust, waarden en creatiekracht. Jouw droomscenario wordt werkelijkheid, met meer
              energie, helderheid en richting.
            </p>
            <a href={WACHTLIJST_URL} className={btnPrimary}>
              Zet me op de wachtlijst →
            </a>
          </div>
          <div className="col-image">
            <img
              src="/fotos/web/asha.jpg"
              alt="Asha Boschma met een kop koffie"
              loading="lazy"
              style={{ height: 'auto', maxWidth: '22rem', marginInline: 'auto' }}
            />
          </div>
        </div>
      </section>

      <details className="group border-y-2 border-dashed border-primair/25 my-8 max-w-3xl mx-auto rounded-2xl">
        <summary className="cursor-pointer list-none flex items-center justify-center gap-2 text-center py-6 px-6 font-bold text-primair text-lg hover:bg-primair/5 rounded-2xl transition-colors [&::-webkit-details-marker]:hidden">
          <span>Klik om te lezen: hoe De Idealen Koers is ontstaan</span>
          <svg
            className="w-5 h-5 shrink-0 transition-transform duration-200 group-open:rotate-180"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </summary>
      {/* Waarom idealen */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primair mb-6 reveal">
          Een ideaal is geen onhaalbaar doel, maar een kompas
        </h2>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Als HR-student schreef ik al over levensfasebewust personeelsbeleid. In gesprekken met
          ouders viel me steeds op hoeveel de komst van kinderen betekent in iemands biografie.
          Managers krijgen trainingen en leiderschapsprogramma&apos;s voor wat ze op de werkvloer
          doormaken. De grootste transitie gebeurt echter thuis, als je vader of moeder wordt, en
          daar is onze samenleving veel minder op ingericht.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-4 reveal">
          Juist dan vraagt het leven veel van je en ga je nadenken over wat je echt belangrijk
          vindt. Keuzes worden belangrijker als je kinderen meekijken. Wat je voorleeft is dan een
          persoonlijke leiderschapsontwikkeling, maar wie begeleidt die? Vaak zie je in die keuzes
          dat bullshit jobs niet langer worden volgehouden en inflexibele werkgevers niet langer
          worden getolereerd. 40 procent van de ouders in Nederland ervaart klachten die passen
          bij een parentale burn-out (rapport &lsquo;Ouders onder druk&rsquo;, Erasmus Universiteit
          Rotterdam, januari 2026). Dan wordt
          zichtbaar dat er systemisch iets schuurt. Veel moeders kiezen dan een andere richting, met meer zingeving, die bijdraagt
          aan een socialere en gezondere planeet.
        </p>
        <p className="text-tekst/80 leading-relaxed reveal">
          Zo is De Idealen Koers ontstaan. Idealen zijn daarbij twee dingen: het ideaal dat je
          voor jezelf hebt, en hoe je de wereld het liefst voor je ziet. Geen onhaalbaar
          einddoel, maar een kompas voor je leven.
        </p>
      </section>
      </details>

      {/* Matrescentie */}
      <section id="matrescentie" className="scroll-mt-24 bg-secundair-kleur/15 px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primair mb-6 reveal">
            Zo&apos;n 80% van de vrouwen in Nederland wordt moeder. Je bent niet alleen.
          </h2>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Dat &apos;moeder worden&apos; heeft dus een naam: matrescentie. Het staat voor de
            transitie van vrouw naar moeder: een levensgrote verandering, maar nog een relatief
            onbekend begrip. Je kunt het vergelijken met de adolescentie. Net als in de pubertijd
            raakt er van alles tegelijk in beweging, in je identiteit, je relaties, je lichaam en
            je gevoel. Voor sommige vrouwen voelt het alsof ze zichzelf zijn kwijtgeraakt. Met De
            Idealen Koers kun je ontdekken of dat voor jou ook zo is, of dat je misschien juist
            dichter bent gekomen bij wie je bent en wat er voor jou toe doet.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Een mooie beginvraag: hoe is de start van jouw moederschap geweest?
          </p>
          <p className="text-tekst/80 leading-relaxed reveal">
            Zo kun je biografische draden ontdekken, die je kunt gebruiken in jouw kompas. De
            &apos;gebruikershandleiding&apos; van je leven. Nu alleen nog tijd vinden <span aria-hidden="true">↓</span>
          </p>
        </div>
      </section>

      {/* Kompas */}
      <section className="bg-achtergrond max-w-5xl mx-auto px-6 pt-20 md:pt-28 pb-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primair mb-12 reveal">
          Dit is je moment en zo gaan we het doen
        </h2>

        {/* Proces: verlangen → dromen en wensen → ideaal */}
        <div className="relative mb-16 max-w-3xl mx-auto">
          <div className="hidden sm:block absolute top-8 left-[16.6%] right-[16.6%] h-0.5 bg-primair" />
          <div id="proces-steps" className="grid gap-10 sm:grid-cols-3 relative">
            {processSteps.map(step => (
              <div key={step.title} className="flex flex-col items-center">
                <div
                  className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-md ${step.circle}`}
                >
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {step.icon}
                  </svg>
                </div>
                <p className="mt-4 font-bold text-primair text-lg">{step.title}</p>
                <p className="text-tekst/70 text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <a href={WACHTLIJST_URL} className={btnSecondary}>
          Zet me op de wachtlijst →
        </a>
      </section>

      {/* Dit is wat je nodig hebt */}
      <section id="eerlijk" className="scroll-mt-24 max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primair mb-3 reveal">
          Want laten we eerlijk zijn: doorploeteren is geen strategie
        </h2>
        <p className="text-sm md:text-base font-bold uppercase tracking-wide text-primair/70 mb-8 reveal">
          Dit is wat je nodig hebt
        </p>
        <div className="space-y-8">
          {nodigItems.map((item, i) => (
            <div key={item.title}>
              <h3 className="text-2xl font-bold text-primair mb-2 reveal">{item.title}</h3>
              <p className="text-tekst/70 leading-relaxed reveal">{item.description}</p>
              {i < nodigItems.length - 1 && <hr className="border-dashed border-primair/30 mt-8" />}
            </div>
          ))}
        </div>
      </section>

      {/* Jouw ideale(n) scenario: tijdelijk verborgen */}
      {false && (
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="two-col">
          <div className="col-text">
            <h2 className="text-3xl md:text-4xl font-bold text-primair mb-6 reveal">
              Jouw ideale(n) scenario
            </h2>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">
              Er is ruimte voor jezelf en voor je gezin, zonder dat je jezelf voor je gevoel
              continue in tweeën hoeft te splitsen. Je merkt hoe je kinderen jouw rust en richting
              spiegelen: ze zien een moeder die trouw is aan zichzelf. En diep vanbinnen weet je:
              ik leid mijn leven en daarmee ben ik het mooiste voorbeeld dat ik ze kan geven. Dit
              is geen verre droom meer. Dit is het leven dat je gaat scheppen.
            </p>
            <a href={WACHTLIJST_URL} className={btnPrimary}>
              Let&apos;s do this
            </a>
          </div>
          <div className="col-image">
            <img src="/fotos/web/8.jpg" alt="Persoon kijkt uit over de bergen" loading="lazy" />
          </div>
        </div>
      </section>
      )}

      {/* Klinkt dit zoals jij: tijdelijk verborgen */}
      {false && (
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="two-col flip">
          <div className="col-text">
            <p className="text-sm md:text-base font-bold uppercase tracking-wide text-primair/70 mb-3 reveal">
              Klinkt dit zoals jij?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primair mb-6 reveal">
              Leer hoe jij straks leidt vanuit rust
            </h2>
            <p className="text-tekst/80 leading-relaxed reveal">
              Stel je voor: zes weken verder, en je voelt weer lucht in je dagen. Je leeft
              lichter, hebt meer ruimte voor jezelf en je gezin en weet eindelijk (weer) waar je
              voor staat. De feestdagen kom je door zonder (sociale) uitputting en het nieuwe jaar
              start je met een innerlijke koers die klopt.
            </p>
          </div>
          <div className="col-image">
            <img src="/fotos/web/27.jpg" alt="Kind en ouder persen sinaasappels" loading="lazy" />
          </div>
        </div>
      </section>
      )}

      {/* Hoofdaanbod banner */}
      <section id="koers" className="scroll-mt-24 bg-primair px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-wit/80 text-sm md:text-base font-bold uppercase tracking-wide mb-4 reveal">
            Hier is jouw kans om niet langer te ploeteren maar te koesteren
          </p>
          <h2 className="font-koppen text-4xl md:text-5xl text-wit mb-8 reveal">
            De Idealen Koers
          </h2>
          <AutoPlayVideo
            src="/fotos/web/promo.mp4"
            className="rounded-2xl mb-10 w-full max-w-md mx-auto aspect-square bg-tekst"
          />
          <p className="text-wit/90 leading-relaxed mb-6 reveal">
            De Idealen Koers is een 6-wekenprogramma voor vrouwen die moeder zijn en verlangen naar
            keuzevrijheid, rust, energie en richting.
          </p>
          <ul className="text-wit/90 leading-relaxed mb-6 space-y-2 text-left max-w-xl mx-auto">
            {koersPunten.map(punt => (
              <li key={punt} className="flex gap-3 reveal">
                <span className="text-accent font-bold">✓</span>
                <span>{punt}</span>
              </li>
            ))}
          </ul>
          <p className="text-wit/90 leading-relaxed mb-10 reveal">
            Dit is geen standaard leiderschapsprogramma voor de ceo&apos;s en managementlagen maar
            een plek waar moederschap en idealen elkaar ontmoeten. Waar kleine keuzes grootse
            impact hebben en waar je met al je twijfels en verlangens welkom bent. Deze editie
            is fysiek, in het centrum van Deventer, waar we elkaar echt ontmoeten in boekencafé Komma:
            een huiselijke, analoge sfeer die ruimte geeft aan introspectie.
          </p>
          <p className="text-wit font-bold mb-10 reveal">
            De Idealen Koers is klein en persoonlijk: elke ronde start met een groep van
            maximaal 10 vrouwen.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={WACHTLIJST_URL} className={btnAccent}>
              Zet me op de wachtlijst →
            </a>
          </div>
        </div>
      </section>

      {/* Risico & uitnodiging */}
      <section className="max-w-4xl mx-auto px-6 py-20 relative">
        <p className="text-sm md:text-base font-bold uppercase tracking-wide text-primair/70 mb-3 reveal">
          Speciaal voor jou en de toekomst die op je wacht
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-primair mb-6 reveal">
          Wat als je jezelf deze ruimte gunt?
        </h2>
        <p className="text-tekst/80 leading-relaxed mb-10 reveal">
          Ik weet hoe het voelt als het leven veel van je vraagt: kinderen die aandacht vragen,
          werk met deadlines, de verwachtingen van iedereen. Je hoeft niet te
          wachten tot je kinderen groot zijn: je mag ze nu al het voorbeeld geven van een moeder
          die trouw is aan zichzelf.
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-primair mb-6 reveal">
          Het moederschap is jouw uitnodiging…
        </h2>
        <p className="text-tekst/80 leading-relaxed reveal">
          … tot leiderschapsontwikkeling. Niet iets om je kleiner te maken, maar om groots te
          leven. Juist als dat &apos;m zit in de simpele, kleine dingen: een tomaat van eigen grond
          of een peuter die je hand vasthoudt tijdens een boswandeling. Je hoeft niet langer te
          kiezen tussen rust of impact, tussen gezin of idealen. Je mag het naast elkaar laten
          bestaan en juist daarin zit jouw kracht.
        </p>
        <p className="text-tekst/80 leading-relaxed mt-4 reveal">
          Jij begint je dag zonder haast; gewoon samen met je gezin aan het ontbijt, terwijl
          jullie mijmeren over de heerlijke dagen samen die achter de rug zijn. Het grote geluk
          zit echt in de kleine dingen, met de steun van andere vrouwen die snappen hoe intens en
          betekenisvol deze fase is.
        </p>
        <blockquote className="my-12 py-10 px-6 border-y-2 border-primair/30 text-center reveal">
          <p className="font-koppen text-2xl md:text-4xl leading-snug text-primair">
            Je kinderen kijken niet alleen naar wat je zegt. Ze kijken vooral naar hoe je leeft.
          </p>
          <p className="font-koppen text-xl md:text-2xl leading-snug text-tekst/80 mt-6">
            Je wilt ze voorleven dat trouw zijn aan jezelf betekent: dat jij ertoe doet. Dat je
            idealen er mogen zijn en je voor jezelf en de wereld om je heen zorgt. En dat je dat
            niet alleen hoeft te doen.
          </p>
        </blockquote>
        <img
          src="/fotos/web/wegwijzer.png"
          alt="Wegwijzer met richtingen"
          loading="lazy"
          className="h-36 md:h-48 w-auto mx-auto mt-10"
        />
      </section>

      {/* Parallax-banner */}
      <div
        className="parallax-banner"
        style={{ backgroundImage: "url('/fotos/web/banner.jpg')" }}
        role="img"
        aria-label="Zeilboot op het water bij zonsondergang"
      />

      {/* Voor jou / niet voor jou */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div id="voor-jou-grid" className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-primair mb-6 reveal">Dit is voor jou als</h2>
            <ul className="space-y-4">
              {voorJouAls.map(item => (
                <li key={item} className="flex gap-3 text-tekst/80">
                  <span className="text-secundair-kleur font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primair mb-6 reveal">Dit is niet voor jou als</h2>
            <ul className="space-y-4">
              {nietVoorJouAls.map(item => (
                <li key={item} className="flex gap-3 text-tekst/80">
                  <span className="text-primair/50 font-bold">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href={WACHTLIJST_URL} className={btnPrimary}>
            Zet me op de wachtlijst →
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-sm md:text-base font-bold uppercase tracking-wide text-primair/70 mb-3 text-center reveal">
          Over mijn begeleiding
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-primair mb-10 text-center reveal">
          Wat anderen zeggen over werken met mij
        </h2>
        <div id="testimonial-grid" className="grid gap-6 sm:grid-cols-3">
          {testimonials.map(t => (
            <div key={t.name + t.quote.slice(0, 10)} className="bg-wit rounded-2xl p-6 shadow-sm border border-primair/10">
              <p className="text-tekst/70 text-sm leading-relaxed mb-4">&quot;{t.quote}&quot;</p>
              <p className="font-bold text-primair text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Urgentie */}
      <section className="bg-secundair-kleur px-6 py-16 text-center">
        <h2 className="font-koppen text-3xl md:text-4xl text-wit mb-2 reveal">De volgende ronde komt eraan</h2>
        <p className="text-wit/90 mb-6 reveal">
          Er zijn maximaal 10 plekken. Op de wachtlijst hoor je als eerste wanneer we starten.
        </p>
        <a href={WACHTLIJST_URL} className={`${btnPrimary} mt-2`}>
          Zet me op de wachtlijst →
        </a>
        <div className="text-wit/90 text-sm mt-6 max-w-md mx-auto reveal">
          <p className="font-bold text-wit">Tot 7 dagen voor de start gratis annuleren.</p>
          <p className="mt-1">
            Komt er iets tussen? Je kunt tot een week voor we starten kosteloos annuleren met twee
            klikken op de knop.
          </p>
        </div>
      </section>

      {/* Route */}
      <section id="route" className="scroll-mt-24 max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primair mb-4 reveal">
          Deze route gaan we samen lopen
        </h2>
        <p className="text-tekst/80 leading-relaxed mb-12 reveal">
          <strong>De Idealen Koers</strong> is geen standaard cursus vol to-do&apos;s en extra
          huiswerk of druk. Het is juist een plek waar je met minimale tijdsinvestering
          helderheid en energie terugkrijgt. Geen overload aan content waar je nooit aan toe komt,
          maar precies dat wat je nodig hebt om rust te vinden, koers te bepalen en je idealen te
          leven.
        </p>
        <div className="space-y-16">
          {routeSteps.map((step, i) => (
            <div key={step.stap} className={`two-col${i % 2 === 1 ? ' flip' : ''}`}>
              <div className="col-text">
                <p className="text-sm md:text-base font-bold uppercase tracking-wide text-primair/70 mb-1 reveal">
                  {step.stap}
                </p>
                <h3 className="text-2xl font-bold text-tekst mb-3 reveal">{step.title}</h3>
                <p className="text-tekst/70 leading-relaxed reveal">{step.description}</p>
              </div>
              <div className="col-image">
                <img src={`/fotos/web/${step.foto}.jpg`} alt={step.title} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
        <div className="relative mt-16 mx-auto max-w-2xl -rotate-1 rounded-[1.5rem_2.2rem_1.6rem_2.4rem] border border-primair/15 bg-wit px-8 pt-10 pb-8 shadow-md reveal">
          <span className="absolute -top-3 left-1/2 h-6 w-28 -translate-x-1/2 -rotate-3 rounded-sm bg-mosterd/70" />
          <p className="font-[family-name:var(--font-handschrift)] text-2xl md:text-3xl leading-tight text-primair mb-4">
            Ter illustratie · zo kan een dinsdagavond eruitzien deze herfst
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4">
            Op dinsdagavond kom je van 20:00 tot 21:30 uur bij elkaar in Deventer, in een kleine
            groep vrouwen die herkennen wat jij doormaakt, ieder met haar eigen accenten. We
            starten met een korte check-in en gaan dan aan de slag met het thema van die avond. We
            duiken bijvoorbeeld in de rode draad van jouw matrescentie en hoe die je identiteit
            vormt of hoe je talent meer accenten kreeg toen je moeder werd en wat dat betekent
            voor je werkleven. Ik heb de tools om je daarin te begeleiden, laat je meevoeren zodat
            je zelf je zeilen kunt bijstellen!
          </p>
          <p className="font-[family-name:var(--font-handschrift)] text-2xl md:text-3xl leading-snug text-tekst/80">
            Je vindt de week na de eerste sessie al{' '}
            <span className="bg-accent/60 px-1 [box-decoration-break:clone]">meer tijd voor jezelf</span>, je
            hebt bijvoorbeeld in de tuin gewerkt en{' '}
            <span className="bg-accent/60 px-1 [box-decoration-break:clone]">minder gescrold</span>. De kleine
            geluksmomenten vielen je op en dat gaf je{' '}
            <span className="bg-accent/60 px-1 [box-decoration-break:clone]">een rustig gevoel</span>.
          </p>
        </div>
        <div className="text-center mt-12">
          <a href={WACHTLIJST_URL} className={btnSecondary}>
            Zet me op de wachtlijst →
          </a>
        </div>
      </section>

      {/* Op een rijtje + prijs */}
      <section id="prijzen" className="scroll-mt-24 max-w-4xl mx-auto px-6 py-20">
        <p className="text-sm md:text-base font-bold uppercase tracking-wide text-primair/70 mb-3 reveal">
          Dit krijg je
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-primair mb-10 reveal">
          Wisdom of the crowds
        </h2>
        <div className="space-y-8">
          {rijtjeItems.map((item, i) => (
            <div key={item.title}>
              <p className="font-bold text-tekst mb-2 reveal">{item.title}</p>
              <p className="text-tekst/70 leading-relaxed reveal">{item.description}</p>
              {i < rijtjeItems.length - 1 && <hr className="border-dashed border-primair/30 mt-8" />}
            </div>
          ))}
        </div>
        <img
          src="/fotos/web/mockup.png"
          alt="De Idealen Koers op laptop, tablet en telefoon"
          loading="lazy"
          className="mt-12 w-full max-w-2xl mx-auto"
        />
        <div className="text-center mt-12">
          <p className="text-tekst/80 leading-relaxed max-w-xl mx-auto mb-6 reveal">
            De data en prijs van de volgende ronde maak ik binnenkort bekend. Sta je op de
            wachtlijst, dan hoor je het als eerste.
          </p>
          <a href={WACHTLIJST_URL} className={btnSecondary}>
            Zet me op de wachtlijst →
          </a>
        </div>
      </section>

      {/* Over 100 dagen */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-sm md:text-base font-bold uppercase tracking-wide text-primair/70 mb-8 reveal">
          Over 6 weken heb jij:
        </p>
        <div id="honderd-dagen-grid" className="grid gap-10 sm:grid-cols-3">
          {honderdDagen.map((item, i) => (
            <div key={item.title}>
              <span className="flex w-11 h-11 rounded-full bg-primair text-wit font-bold text-xl items-center justify-center mb-4">
                {i + 1}
              </span>
              <h3 className="text-2xl font-bold text-primair leading-snug mb-3">{item.title}</h3>
              <p className="text-tekst/70 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stel je eens voor: tijdelijk verborgen */}
      {false && (
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-sm md:text-base font-bold uppercase tracking-wide text-primair/70 mb-3 text-center reveal">
          Stel je eens voor
        </p>
        <p className="text-tekst/80 leading-relaxed mb-4 text-center reveal">
          Het is januari 2027, de feestdagen zijn achter de rug. Je kinderen spelen rustig in de
          kamer en jij ontvangt zo een vriendin. Voor het eerst in tijden voel je niet dat je
          &quot;achter de feiten aanloopt&quot;. Je ervaart rust en plezier… Dankbaar kijk je naar
          je kinderen, wat heerlijk dat jullie echte avonturen, groot en klein beleven. Je hebt
          keuzes gemaakt die écht bij je passen. Je zegt vaker &quot;ja&quot; tegen wat voedt en
          zonder schuldgevoel &quot;nee&quot; tegen wat je leeg trekt. Je hebt een ritme gevonden
          waarin je ruimte hebt voor jezelf en voor je gezin. Dat doet iedereen goed.
        </p>
        <p className="text-tekst/80 leading-relaxed mb-8 text-center reveal">
          En het mooiste? Je leeft en moedert vanuit je idealen. Je kinderen zien jou niet langer
          ploeteren, maar koesteren door voor te leven wat het betekent om trouw te zijn aan
          jezelf. Dat voorbeeld is misschien wel het grootste cadeau dat je ze ooit geeft. Waarom
          nog een jaar wachten?
        </p>
        <div className="text-center">
          <a href={WACHTLIJST_URL} className={btnSecondary}>
            Zet me op de wachtlijst →
          </a>
        </div>
      </section>
      )}

      {/* Authority banner */}
      <section id="ambitie" className="scroll-mt-24 bg-primair px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-wit/80 text-sm md:text-base font-bold uppercase tracking-wide mb-4 reveal">
            We hebben een nieuwe definitie van ambitie nodig
          </p>
          <h2 className="font-koppen text-3xl md:text-4xl text-wit mb-8 reveal">
            Er zijn maar weinig mensen die eerlijk zijn over…
          </h2>
          <p className="text-wit/90 leading-relaxed mb-10 reveal">
            Moederschap is de meest onderschatte transitie van ons leven. Veel coaches stoppen met
            begeleiden bij verlangen of dromen. Maar een droom zonder koers blijft een
            verlangen… De kern is: je hoeft niet te kiezen tussen moeder zijn of je ambities
            waarmaken, tussen gezin of je idealen als je leert hoe het naast elkaar kan bestaan en
            sterker nog: hoe het over hetzelfde gaat! Bovendien is ambitie vaak gelinkt aan
            carrière en dat is waar het fundamenteel misgaat… Ik ga je laten zien HOE; want jij
            bent zelf de enige die alle antwoorden al heeft.
          </p>
          <p id="leiderschap" className="scroll-mt-24 font-koppen text-2xl md:text-3xl text-wit mb-10 reveal">
            Leiderschap begint niet in de boardroom met managementlagen, maar thuis, bij jou.
          </p>
          <p className="text-wit/80 text-sm md:text-base font-bold uppercase tracking-wide mb-4 reveal">
            Als je voelt dat het tijd is
          </p>
          <ul className="space-y-2 mb-10 text-left max-w-md mx-auto text-wit/90">
            {alsJeVoelt.map(item => (
              <li key={item} className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href={WACHTLIJST_URL} className={btnAccent}>
            Zet me op de wachtlijst →
          </a>
        </div>
      </section>

      {/* Bonus-lunch: on hold, tijdelijk verborgen */}
      {false && (
      <section className="bg-mosterd px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-koppen text-2xl md:text-3xl text-tekst mb-8 reveal">Bonus #1 time</p>
          <img
            src="/fotos/web/19.jpg"
            alt="Samen lunchen"
            loading="lazy"
            className="rounded-2xl mb-6 w-full max-w-md mx-auto aspect-square object-cover"
          />
          <div className="bg-secundair-kleur/20 rounded-2xl p-6 mb-8">
            <p className="font-bold text-primair">Zaterdag 21 februari</p>
            <p className="text-2xl font-bold text-tekst">Samen lunchen</p>
            <p className="text-tekst/70">Deventer</p>
          </div>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            We gaan elkaar ontmoeten in deze 6 weken samen, lunchen we op zaterdag 21 februari
            op een grandioze plek in Deventer. Jij bepaalt of je kindjes meekomen of je alleen
            gaat. Vieren welke belangrijke keuzes je gemaakt hebt en vooral: wie je bent.
          </p>
          <p className="text-tekst/70 mb-8">📍 Deventer, 21 februari</p>
          <a href={WACHTLIJST_URL} className={btnSecondary}>
            Zet me op de wachtlijst
          </a>
        </div>
      </section>
      )}

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-tekst/60 mb-2 reveal">Twijfels?</p>
        <h2 className="font-koppen text-3xl md:text-4xl text-primair mb-2 reveal">Ja, maar….</h2>
        <p className="text-tekst/70 mb-12 reveal">Misschien denk je:</p>
        <div id="faq-grid" className="grid gap-10 sm:grid-cols-3 text-left">
          {faq.map(item => (
            <div key={item.vraag}>
              <p className="text-secundair-kleur font-bold mb-2">✓</p>
              <h3 className="font-bold text-tekst mb-3">{item.vraag}</h3>
              <p className="text-tekst/70 text-sm leading-relaxed">{item.antwoord}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Slot */}
      <section className="max-w-3xl mx-auto px-6 pb-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primair mb-2 reveal">
          De vraag is: wat is nu écht belangrijk voor jou en de wereld om je heen?
        </h2>
        <p className="text-tekst/80 leading-relaxed mt-10 reveal">
          Stel je voor: het ontbijt zonder haast, de boswandeling met je peuter en een werkleven
          dat je bijdrage aan de wereld om je heen waardeert. Het is niet zo ver weg als je
          misschien nu nog denkt.
        </p>
      </section>

      <section className="bg-primair px-6 py-16 text-center">
        <p className="font-koppen text-3xl md:text-4xl text-wit mb-3 reveal">Zet jezelf op de wachtlijst.</p>
        <p className="text-wit/80 mb-8 reveal">
          Je hoort als eerste wanneer de volgende ronde van De Idealen Koers start.
        </p>
        <a href={WACHTLIJST_URL} className={btnAccent}>
          Zet me op de wachtlijst →
        </a>
      </section>

      <ScrollReveal
        singles={['.reveal']}
        grids={[
          '#proces-steps',
          '#kompas-steps',
          '#scenario-list',
          '#voor-jou-grid',
          '#testimonial-grid',
          '#honderd-dagen-grid',
          '#faq-grid',
        ]}
      />
    </>
  );
}
