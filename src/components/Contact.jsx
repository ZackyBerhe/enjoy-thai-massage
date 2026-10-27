import Button from './ui/Button';
import Section from './ui/Section';

const EYEBROW_SM =
  'tracking-[2px] uppercase text-orange text-[10px] font-bold';
const HEADING =
  'font-serif font-medium text-[clamp(30px,3.2vw,40px)] leading-[1.1] text-[#4a3228] my-[4px]';
const CARD = 'bg-white rounded-[4px] p-[18px]';
const CARD_TITLE =
  'text-[14px] font-bold leading-[normal] text-[#2f2620] mt-0 mb-[10px]';
const SUBHEADING =
  'text-[14px] font-bold leading-[normal] text-[#2f2620] mt-0 mb-[8px]';
const TEXT = 'text-[12px] leading-[1.6] text-[#3f3028]';
const MUTED = 'text-[12px] leading-[1.6] text-[#7b6a5d]';
const LINK = 'text-orange underline underline-offset-2 hover:text-[#9d3816]';

export default function Contact() {
  return (
    <Section
      id="kontakt"
      className="bg-[#fbf5e9] grid grid-cols-[repeat(2,minmax(0,1fr))] items-start gap-x-[40px] gap-y-[14px] max-[700px]:grid-cols-[minmax(0,1fr)]"
    >
      <div data-reveal className="max-[700px]:order-1">
        <div className={EYEBROW_SM}>Wir freuen uns auf Sie</div>
        <h2 className={HEADING}>Kontakt &amp; Anfahrt</h2>
        <p className="text-[13px] leading-[1.5] text-[#5b463c] m-0 mb-[14px]">
          Vereinbaren Sie Ihre persönliche Auszeit telefonisch. Wir freuen uns
          auf Ihren Besuch bei Thai Massage ENJOY.
        </p>
        
      </div>

      <div
        data-reveal
        className="max-[700px]:order-3 max-[700px]:mt-[22px]"
      >
        <div className={EYEBROW_SM}>RECHTLICHE INFORMATIONEN</div>
        <h2 className={HEADING}>Impressum</h2>
        <p className={`${MUTED} m-0`}>Angaben gemäß § 5 DDG</p>
      </div>

      <div data-reveal className={`${CARD} max-[700px]:order-2`}>
        <h3 className={CARD_TITLE}>Thai Massage ENJOY</h3>
        <p className={`${TEXT} m-0`}>
          Kirchplatz 6
          <br />
          83093 Bad Endorf
        </p>
        <p className={`${TEXT} mt-[12px] mb-0`}>
          <strong>Mobil:</strong>{' '}
          <a href="tel:+4917641947586" className={LINK}>
            0176 4194 7586
          </a>
          <br />
          <strong>Telefon:</strong>{' '}
          <a href="tel:+4980536859644" className={LINK}>
            08053 6859 644
          </a>
        </p>
        <p className={`${TEXT} mt-[12px] mb-0`}>
          <strong>Öffnungszeiten</strong>
          <br />
          Montag – Samstag
          <br />
          10:00 – 19:00 Uhr
        </p>
        <div className="mt-[14px] flex">
          <Button href="tel:+4917641947586" variant="dark">
          Jetzt anrufen
        </Button>
          <Button
            href="https://www.google.com/maps/search/?api=1&query=Kirchplatz+6+83093+Bad+Endorf"
            rel="noopener"
            target="_blank"
            variant="outline"
          >
            Anfahrt ansehen
          </Button>
        </div>
      </div>

      <div data-reveal className={`${CARD} max-[700px]:order-4`}>
        <h3 className={CARD_TITLE}>Thai Massage ENJOY</h3>
        <p className={`${TEXT} m-0`}>Inh. Ludmila Ehof </p>
        <p className={`${TEXT} mt-[14px] mb-0`}>
          Kirchplatz 6
          <br />
          83093 Bad Endorf
          <br />
          Deutschland
        </p>

        <div className="h-px bg-[#e6e0d6] my-[16px]" />

        <h4 className={SUBHEADING}>Kontakt</h4>
        <div className="flex flex-col gap-y-[2px]">
          <span className={TEXT}>
            <strong>Telefon:</strong>{' '}
            <a href="tel:+4980536859644" className={LINK}>
              08053 6859 644
            </a>
          </span>
          <span className={TEXT}>
            <strong>Mobil:</strong>{' '}
            <a href="tel:+4917641947586" className={LINK}>
              0176 4194 7586
            </a>
          </span>
          <span className={TEXT}>
            <strong>E-Mail:</strong>{' '}
            <a href="mailto:info@enjoy-badendorf.de" className={LINK}>
              info@enjoy-badendorf.de
            </a>
          </span>
        </div>
      </div>
    </Section>
  );
}
