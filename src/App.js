import { useEffect, useRef, useState } from 'react';
import useScrollEffects from './useScrollEffects';

/* Shared Tailwind class sets — exact port of the original stylesheet */
const SECTION = 'py-[85px] px-[clamp(20px,6vw,110px)] max-[700px]:p-[60px_20px]';
const EYEBROW = 'tracking-[3px] uppercase text-orange text-[12px] font-bold';
const H2 =
  'font-serif font-medium text-[clamp(42px,5vw,65px)] leading-[1.05] text-[#58362a] my-[12px]';
const BTN_BASE =
  'inline-flex items-center justify-center no-underline rounded-[40px] font-sans font-semibold leading-[normal] cursor-pointer hover:bg-[#9d3816]';
const BTN = `${BTN_BASE} py-[13px] px-[25px] text-[13px] bg-orange text-white`;
const BTN_SM = `${BTN_BASE} py-[6px] px-[21px] text-[12px] bg-orange text-white`;
const BTN_SECONDARY = `${BTN_BASE} py-[13px] px-[25px] text-[13px] bg-transparent border border-orange text-orange`;
const NAV_LINK =
  'no-underline text-[13px] hover:text-orange max-[1050px]:text-[11px] max-[700px]:p-[7px]';
const NAV_CTA = `${BTN} hover:text-orange max-[1050px]:text-[11px] max-[700px]:p-[7px]`;
const SECTION_HEAD = 'text-center max-w-[760px] mx-auto mb-[42px]';
const SECTION_HEAD_P = 'text-[#786457]';
const PACKAGE =
  'bg-[#fffaf0] rounded-[13px] p-[24px] border-t-[3px] border-t-gold';
const PACKAGE_H3 = 'font-serif font-medium leading-[normal] text-[26px] mt-0 mb-[12px]';
const PACKAGE_P = 'text-[13px]';
const PACKAGE_GRID =
  'grid grid-cols-[repeat(3,minmax(auto,1fr))] gap-[16px] max-[700px]:grid-cols-[minmax(auto,1fr)]';
const PRICE_CARD = 'border border-[#e8dcc8] rounded-[14px] p-[27px] bg-white';
const PRICE_H3 = 'font-serif font-medium leading-[normal] text-[30px] m-0 text-orange';
const PRICE_P = 'text-[13px] text-[#78695e]';
const RATE =
  'flex justify-between gap-[9px] border-b border-dotted border-[#cfc0a7] text-[13px] py-[4px] [&>strong]:whitespace-nowrap';
const CONTACT_P = 'mt-[8px] mb-[22px]';
const FLAME =
  'flame absolute left-0 top-0 z-[4] block w-[23px] h-[39px] opacity-[.94] blur-[1.1px] mix-blend-screen origin-[50%_90%] rounded-[65%_65%_55%_55%] pointer-events-none [box-shadow:0_0_11px_5px_#ffcb6c7d,0_0_29px_11px_#ffad413d] bg-[radial-gradient(ellipse_at_50%_64%,#fffef5_0_12%,#fff8b4_23%,#ffcc5b_44%,#ff922b_61%,transparent_76%)] motion-reduce:animate-none motion-reduce:opacity-[.92]';
const FLAME_ANIMATION = [
  'animate-flame1',
  'animate-flame2',
  'animate-flame3',
];

const NAV_ITEMS = [
  ['#start', 'Startseite'],
  ['#ueber-uns', 'Über uns'],
  ['#massagen', 'Massagen & Preise'],
  ['#pakete', 'Verwöhnpakete'],
  ['#gutscheine', 'Gutscheine'],
  ['#kontakt', 'Kontakt'],
];

const FEATURES = [
  ['❀', 'Traditionelle', 'Thai-Massagen'],
  ['♧', 'Natürliche Öle', 'und Kräuter'],
  ['☼', 'Tiefenentspannung', 'für Körper und Seele'],
  ['♡', 'Wohlfühlatmosphäre', 'in Bad Endorf'],
];

const SERVICES = [
  {
    img: '/assets/card-thai.jpg',
    alt: 'Kerzen und gerollte Handtücher',
    title: 'Traditionelle Thai-Massage',
    text: 'Körper und Energie in Balance',
  },
  {
    img: '/assets/card-herbal.jpg',
    alt: 'Traditionelle Kräuterstempel mit Blüten',
    title: 'Thai-Kräuterstempelmassage',
    text: 'Wohltuende Wärme für tiefe Entspannung',
  },
  {
    img: '/assets/card-face.jpg',
    alt: 'Sanfte Gesichtsmassage',
    title: 'Gesichts-Spa',
    text: 'Sanfte Pflege für strahlende Schönheit',
  },
  {
    img: '/assets/card-stones.jpg',
    alt: 'Natürliche graue und schwarze Massagesteine',
    title: 'Hot-Stone-Massage',
    text: 'Tiefenentspannung mit wohltuender Wärme',
  },
];

const PRICES = [
  {
    title: 'Thai-Fußreflexzonen- und Beinmassage',
    desc: 'Stimulation der Fußreflexpunkte und wohltuende Massage der Beine.',
    rates: [
      ['30 Min.', '30 €'],
      ['45 Min.', '41 €'],
      ['60 Min.', '53 €'],
      ['90 Min.', '70 €'],
      ['120 Min.', '94 €'],
    ],
  },
  {
    title: 'Traditionelle Thai-Massage',
    desc: 'Stimuliert Energiepunkte und -linien; Dehnungen und Strecktechniken lösen Verspannungen.',
    rates: [
      ['30 Min.', '32 €'],
      ['45 Min.', '46 €'],
      ['60 Min.', '53 €'],
      ['90 Min.', '70 €'],
      ['120 Min.', '94 €'],
    ],
  },
  {
    title: 'Thai-Aromaölmassage',
    desc: 'Traditionelle Thai-Techniken mit aromatischen Ölen für eine beruhigende Anwendung.',
    rates: [
      ['30 Min.', '34 €'],
      ['45 Min.', '46 €'],
      ['60 Min.', '65 €'],
      ['90 Min.', '82 €'],
      ['120 Min.', '99 €'],
    ],
  },
  {
    title: 'Thai-Kräuterstempelmassage',
    desc: 'Erwärmte, mit Kräutern gefüllte Leinentücher werden auf die Haut aufgelegt.',
    rates: [
      ['60 Min.', '72 €'],
      ['90 Min.', '98 €'],
      ['120 Min.', '123 €'],
    ],
  },
  {
    title: 'Hot-Stone-Massage',
    desc: 'Ganzkörpermassage mit heißen Basaltsteinen für tiefe Muskelentspannung.',
    rates: [
      ['60 Min.', '72 €'],
      ['90 Min.', '99 €'],
      ['120 Min.', '123 €'],
    ],
    note: '* Auch als 60-Minuten-Rücken- und Nackenmassage erhältlich.',
  },
  {
    title: 'Gesichts-Spa',
    desc: 'Sanftes Peeling, Gesichts- und Dekolletébehandlung, Gesichtsmassage und feuchtigkeitsspendende Maske.',
    rates: [
      ['45 Min.', '45 €'],
      ['60 Min.', '63 €'],
    ],
  },
  {
    title: 'Fuß-Spa',
    desc: 'Peeling, Fußbad, Thai-Fußreflexzonenmassage und abschließende Pflege.',
    rates: [['60 Min.', '59 €']],
  },
  {
    title: 'Weitere Spa-Anwendungen',
    desc: 'Fuß-Spa + Gesichts-Spa sowie Body-Spa mit Ganzkörper-Haut-Peeling und Aromaölmassage.',
    rates: [
      ['Fuß + Gesicht · 90 Min.', '86 €'],
      ['Body-Spa · 90 Min.', '95 €'],
    ],
  },
];

const PACKAGES = [
  ['Gesichts-Spa + Thai-Aromaölmassage', '90 Minuten', '98 €'],
  ['Gesichts-Spa + Thai-Kräuterstempelmassage', '90 Minuten', '108 €'],
  ['Gesichts-Spa + Hot-Stone-Massage', '90 Minuten', '108 €'],
  ['Body-Spa + Thai-Kräuterstempelmassage', '90 Minuten', '101 €'],
  ['Body-Spa + Hot-Stone-Massage', '90 Minuten', '102 €'],
];

const GIFTS = [
  [
    '5er-Karte · Traditionelle Thai-Massage',
    '5 × 60 Minuten',
    '240 € statt 265 €',
  ],
  ['5er-Karte · Thai-Aromaölmassage', '5 × 60 Minuten', '250 € statt 280 €'],
  [
    '5er-Karte · Kräuterstempel oder Hot Stone',
    '5 × 60 Minuten, je Massageart',
    '324 € statt 360 €',
  ],
];

function PackageCard({ title, detail, price }) {
  return (
    <div data-reveal className={PACKAGE}>
      <h3 className={PACKAGE_H3}>{title}</h3>
      <p className={PACKAGE_P}>{detail}</p>
      <strong className="text-orange">{price}</strong>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroLeftRef = useRef(null);

  useScrollEffects();

  // Position each animated flame on its actual wick in the candle photograph.
  // Uses the same cover crop calculation as CSS background-size: cover.
  useEffect(() => {
    const box = heroLeftRef.current;
    if (!box) return undefined;
    const coords = [
      [274, 169],
      [385, 204],
      [450, 280],
    ];
    const align = () => {
      const w = box.clientWidth;
      const h = box.clientHeight;
      const iw = 550;
      const ih = 373;
      const scale = Math.max(w / iw, h / ih);
      const ox = (w - iw * scale) / 2;
      const oy = (h - ih * scale) / 2;
      box.querySelectorAll('.flame').forEach((el, i) => {
        const [x, y] = coords[i];
        el.style.left = `${ox + x * scale - 11.5}px`;
        el.style.top = `${oy + y * scale - 34}px`;
      });
    };
    const observer =
      'ResizeObserver' in window ? new ResizeObserver(align) : null;
    if (observer) observer.observe(box);
    window.addEventListener('resize', align);
    align();
    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('resize', align);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-30 flex items-center justify-between gap-[15px] py-[10px] px-[clamp(16px,4vw,90px)] min-h-[88px] bg-[#fff9edeb] backdrop-blur-[18px] border-b border-[#eadbc8] max-[700px]:min-h-[75px] max-[700px]:flex-wrap">
        <a
          href="#start"
          className="flex flex-col text-center leading-none min-w-[210px] max-[1050px]:min-w-[145px] max-[700px]:min-w-[150px] text-[#c74b21] font-serif text-[35px] italic no-underline"
        >
          <span className="font-sans font-normal not-italic leading-[normal] text-[22px] tracking-[1px] max-[1050px]:text-[16px]">
            Thai Massage
          </span>
          <em className="font-serif font-normal italic leading-[.8] text-[65px] max-[1050px]:text-[49px]">
            ENJOY
          </em>
          <small className="block font-sans font-normal not-italic leading-[normal] text-[10px] tracking-[1px] pt-[6px] mt-[7px] border-t-2 border-[#c74b21]">
            Entspannung für Körper und Seele
          </small>
        </a>
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label="Menü öffnen"
          onClick={() => setMenuOpen((v) => !v)}
          className="hidden bg-transparent text-[24px] text-brown cursor-pointer max-[700px]:block"
        >
          ☰
        </button>
        <div
          className={`flex gap-[24px] items-center max-[1050px]:gap-[10px] max-[700px]:flex-col max-[700px]:items-stretch max-[700px]:p-[12px] max-[700px]:basis-full${
            menuOpen ? '' : ' max-[700px]:hidden'
          }`}
        >
          {NAV_ITEMS.map(([href, label]) => (
            <a key={href} href={href} onClick={closeMenu} className={NAV_LINK}>
              {label}
            </a>
          ))}
          <a href="#kontakt" onClick={closeMenu} className={NAV_CTA}>
            ☎ Termin vereinbaren
          </a>
        </div>
      </nav>

      <main>
        <header
          id="start"
          className="relative grid grid-cols-[35%_30%_35%] items-stretch min-h-[455px] bg-[#f8eedc] overflow-hidden max-[1050px]:grid-cols-[31%_38%_31%] max-[700px]:grid-cols-[repeat(2,minmax(auto,1fr))] max-[700px]:min-h-auto"
        >
          <div
            ref={heroLeftRef}
            data-hero-photo
            aria-label="Kerzen, Handtücher und tropische Blüten"
            style={{ backgroundImage: "url('/assets/hero-candles.jpg')" }}
            className="relative min-h-[455px] max-[700px]:min-h-[250px] max-[700px]:row-start-2 isolate bg-no-repeat bg-cover bg-center after:absolute after:inset-0 after:content-[''] after:pointer-events-none after:bg-[linear-gradient(90deg,transparent_66%,#f8eedc_100%)] max-[700px]:after:hidden"
          >
            <span className={`${FLAME} ${FLAME_ANIMATION[0]}`} />
            <span className={`${FLAME} ${FLAME_ANIMATION[1]}`} />
            <span className={`${FLAME} ${FLAME_ANIMATION[2]}`} />
          </div>

          <div
            data-hero
            className="relative z-[2] text-center self-center py-[24px] px-[4px] text-[#452d24] max-[700px]:col-span-full max-[700px]:row-start-1 max-[700px]:py-[34px] max-[700px]:px-[20px]"
          >
            <div className="font-serif font-normal leading-[normal] text-[clamp(28px,3vw,42px)] text-[#c64b1d]">
              Thai Massage
            </div>
            <h1 className="font-serif font-normal italic text-[clamp(75px,8vw,124px)] max-[700px]:text-[90px] leading-[.8] text-[#c44a1e] mt-[4px] mb-[17px]">
              ENJOY
            </h1>
            <div className="text-[15px] max-[1050px]:text-[12px] tracking-[2px] text-[#bf4c22] border-t-2 border-[#c44a1e] pt-[9px]">
              Entspannung für Körper und Seele
            </div>
            <p className="max-w-[420px] mx-auto my-[22px] text-[15px] max-[1050px]:text-[13px] leading-[1.55]">
              Entdecken Sie die wohltuende Welt der traditionellen Thai-Massage
              und schenken Sie sich eine Auszeit vom Alltag.
            </p>
            <a href="#massagen" className={BTN}>
              Unsere Massagen entdecken&nbsp; ›
            </a>
          </div>

          <div
            role="img"
            data-hero-photo
            aria-label="Entspannte Frau bei einer wohltuenden Massage"
            style={{ backgroundImage: "url('/assets/hero-massage.jpg')" }}
            className="relative min-h-[455px] max-[700px]:min-h-[250px] max-[700px]:row-start-2 bg-no-repeat bg-cover bg-center after:absolute after:inset-0 after:content-[''] after:pointer-events-none after:bg-[linear-gradient(270deg,transparent_65%,#f8eedc_100%)] max-[700px]:after:hidden"
          />
        </header>

        <div
          data-reveal
          className="grid grid-cols-[repeat(4,minmax(auto,1fr))] bg-[#fff9ee] border-y border-[#e9d6bd] gap-0 py-[14px] px-[3vw] text-center text-green text-[13px] max-[700px]:grid-cols-[repeat(2,minmax(auto,1fr))] max-[700px]:gap-y-[12px]"
        >
          {FEATURES.map(([icon, line1, line2]) => (
            <div
              key={icon}
              className="flex items-center justify-center gap-[14px] border-r border-[#e3cbb2] leading-[1.35] last:border-r-0 max-[700px]:border-r-0 max-[700px]:justify-start"
            >
              <b className="block font-serif font-normal leading-[normal] text-[37px] max-[700px]:text-[28px] text-orange">
                {icon}
              </b>
              {line1}
              <br />
              {line2}
            </div>
          ))}
        </div>

        <section id="ueber-uns" className="p-0 bg-[#fff8eb]">
          <div className="grid grid-cols-4 gap-[7px] p-[7px_10px_0] max-[700px]:grid-cols-[repeat(2,minmax(auto,1fr))] max-[400px]:grid-cols-[minmax(auto,1fr)]">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                data-reveal
                className="text-center bg-[#f9f0e2] pb-[14px] overflow-hidden"
              >
                <img
                  src={service.img}
                  alt={service.alt}
                  className="h-[178px] max-[1050px]:h-[145px] max-[700px]:h-[155px] max-[400px]:h-[210px]"
                />
                <h3 className="font-serif italic font-semibold leading-[normal] text-[clamp(19px,2vw,26px)] max-[700px]:text-[21px] text-[#682b20] mt-[9px] mx-[6px] mb-0">
                  {service.title}
                </h3>
                <p className="text-[13px] leading-[1.3] mt-[3px] mx-[8px] mb-[9px]">
                  {service.text}
                </p>
                <a href="#massagen" className={BTN_SM}>
                  Mehr erfahren ›
                </a>
              </article>
            ))}
          </div>

          <div
            style={{
              backgroundImage:
                "linear-gradient(90deg,#fff6e4a8,#fff9efec 24%,#fff9efeb 76%,#fff3e1a0), url('/assets/welcome-flowers.jpg'), url('/assets/welcome-thailand.jpg')",
            }}
            className="min-h-[225px] p-[26px_20px_32px] text-center [background-position:center,left_center,right_center] [background-repeat:no-repeat] [background-size:cover,auto_100%,auto_100%]"
          >
            <div data-reveal className={EYEBROW}>WILLKOMMEN BEI THAI MASSAGE ENJOY</div>
            <h2 data-reveal className="font-serif italic font-medium leading-[normal] text-[clamp(31px,3.6vw,53px)] text-[#682a20] my-[10px]">
              Ein Ort zum Ankommen. Durchatmen. Wohlfühlen.
            </h2>
            <p data-reveal className="text-[14px] text-[#66544b] m-0 max-[700px]:[&>br]:hidden">
              In entspannter Atmosphäre erwarten Sie traditionelle
              Thai-Massagen, wohltuende Aromaölmassagen,
              <br /> belebende Kräuterstempelmassagen und viele weitere
              Anwendungen für Ihr Wohlbefinden.
            </p>
          </div>
        </section>

        <section
          className={`${SECTION} bg-[#e9eddc] grid grid-cols-[repeat(2,minmax(auto,1fr))] gap-[65px] items-center max-[700px]:grid-cols-[minmax(auto,1fr)] max-[700px]:gap-[25px]`}
        >
          <div data-reveal className="h-[470px] max-[700px]:h-[330px] rounded-[190px_190px_16px_16px] overflow-hidden bg-[#e9dfcb] isolate">
            <img
              data-parallax
              src="/assets/treatment.jpg"
              alt="Sanfte Wellnessbehandlung"
              loading="lazy"
              className="bg-[#e9dfcb] [object-position:center_45%]"
            />
          </div>
          <div>
            <div data-reveal className={EYEBROW}>Entspannung für Körper und Seele</div>
            <h2 data-reveal className={H2}>Die Kunst, sich Zeit zu schenken.</h2>
            <p data-reveal className="max-w-[560px]">
              Entdecken Sie bei Thai Massage ENJOY traditionelle
              Massagetechniken, duftende Aromaöle, warme Kräuterstempel und
              entspannende Spa-Anwendungen. Wählen Sie die Behandlung, die zu
              Ihrem Wohlbefinden passt.
            </p>
            <a href="#kontakt" data-reveal className={BTN_SECONDARY}>
              Jetzt Termin anfragen
            </a>
          </div>
        </section>

        <section id="massagen" className={`${SECTION} bg-[#fffbf5]`}>
          <div className={SECTION_HEAD}>
            <div data-reveal className={EYEBROW}>Unser Angebot</div>
            <h2 data-reveal className={H2}>Massagen &amp; Preise</h2>
            <p data-reveal className={SECTION_HEAD_P}>
              Finden Sie Ihre persönliche Wohlfühlbehandlung. Alle Preise in
              Euro.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(2,minmax(auto,1fr))] gap-[18px] max-[700px]:grid-cols-[minmax(auto,1fr)]">
            {PRICES.map((price) => (
              <div key={price.title} data-reveal className={PRICE_CARD}>
                <h3 className={PRICE_H3}>{price.title}</h3>
                <p className={PRICE_P}>{price.desc}</p>
                <div className="grid grid-cols-[repeat(2,minmax(auto,1fr))] gap-x-[22px] gap-y-[8px] mt-[18px]">
                  {price.rates.map(([label, value]) => (
                    <span key={label} className={RATE}>
                      {label} <strong>{value}</strong>
                    </span>
                  ))}
                </div>
                {price.note && (
                  <p className={PRICE_P}>
                    <small>{price.note}</small>
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="pakete" className={`${SECTION} bg-[#f1e8d7]`}>
          <div className={SECTION_HEAD}>
            <div data-reveal className={EYEBROW}>Ein besonderes Verwöhnerlebnis</div>
            <h2 data-reveal className={H2}>Unsere Verwöhnpakete</h2>
            <p data-reveal className={SECTION_HEAD_P}>
              Ausgewählte Anwendungen, liebevoll kombiniert.
            </p>
          </div>
          <div className={PACKAGE_GRID}>
            {PACKAGES.map(([title, detail, price]) => (
              <PackageCard
                key={title}
                title={title}
                detail={detail}
                price={price}
              />
            ))}
          </div>
        </section>

        <section
          id="gutscheine"
          className={`${SECTION} text-center bg-[linear-gradient(120deg,#e5eddc,#faf1dc)]`}
        >
          <div data-reveal className={EYEBROW}>Freude verschenken</div>
          <h2 data-reveal className={H2}>Ein Geschenk voller Entspannung</h2>
          <p data-reveal className="max-w-[660px] mx-auto mt-0 mb-[25px]">
            Überraschen Sie Ihre Liebsten mit einem ENJOY-Geschenkgutschein.
            Auch unsere 5er-Karten sind eine schöne Möglichkeit, sich
            regelmäßig eine Auszeit zu gönnen.
          </p>
          <div className="grid grid-cols-[repeat(3,minmax(auto,1fr))] gap-[16px] max-w-[900px] mx-auto my-[25px] text-left max-[700px]:grid-cols-[minmax(auto,1fr)] [&_p]:mt-0 [&_p]:mb-[25px]">
            {GIFTS.map(([title, detail, price]) => (
              <PackageCard
                key={title}
                title={title}
                detail={detail}
                price={price}
              />
            ))}
          </div>
          <a href="tel:+4917641947586" data-reveal className={BTN}>
            Gutschein telefonisch anfragen
          </a>
        </section>

        <section
          id="kontakt"
          className={`${SECTION} bg-[#fbf5e9] grid grid-cols-[repeat(2,minmax(auto,1fr))] gap-[50px] max-[700px]:grid-cols-[minmax(auto,1fr)]`}
        >
          <div>
            <div data-reveal className={EYEBROW}>Wir freuen uns auf Sie</div>
            <h2 data-reveal className={H2}>Kontakt &amp; Anfahrt</h2>
            <p data-reveal className={CONTACT_P}>
              Vereinbaren Sie Ihre persönliche Auszeit telefonisch. Wir freuen
              uns auf Ihren Besuch bei Thai Massage ENJOY.
            </p>
            <a href="tel:+4917641947586" data-reveal className={BTN}>
              Jetzt anrufen
            </a>
          </div>
          <div data-reveal className="p-[35px] bg-white rounded-[14px]">
            <h3>Thai Massage ENJOY</h3>
            <p className={CONTACT_P}>
              Kirchplatz 6
              <br />
              83093 Bad Endorf
            </p>
            <p className={CONTACT_P}>
              <strong>Mobil:</strong>{' '}
              <a href="tel:+4917641947586" className="text-orange">
                0176 4194 7586
              </a>
              <br />
              <strong>Telefon:</strong>{' '}
              <a href="tel:+4980536859644" className="text-orange">
                08053 6859 644
              </a>
            </p>
            <p className={CONTACT_P}>
              <strong>Öffnungszeiten</strong>
              <br />
              Montag – Samstag
              <br />
              10:00 – 19:00 Uhr
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kirchplatz+6+83093+Bad+Endorf"
              rel="noopener"
              target="_blank"
              className={BTN_SECONDARY}
            >
              Anfahrt ansehen
            </a>
          </div>
        </section>
      </main>

      <footer
        data-reveal
        className="bg-[#3f4f39] text-[#fff7e6] text-center py-[35px] px-[20px] text-[13px]"
      >
        <div className="font-serif italic font-normal leading-[normal] text-[35px]">
          ENJOY
        </div>
        <p>Thai Massage ENJOY · Entspannung für Körper und Seele · Bad Endorf</p>
        <p>Hinweis: Keine erotischen Behandlungen.</p>
        <p>
          Impressum und Datenschutzerklärung müssen vor der Veröffentlichung mit
          den Angaben des Betreibers ergänzt werden.
        </p>
      </footer>
    </>
  );
}

export default App;
