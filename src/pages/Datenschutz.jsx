import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';

const EYEBROW =
  'tracking-[2px] uppercase text-[#b8431c] text-[10px] font-bold';
const HEADING =
  'font-serif font-medium text-[clamp(34px,4.5vw,54px)] leading-[1.05] text-[#4a3228] my-[6px]';
const H2 =
  'font-serif font-medium text-[clamp(23px,2.6vw,30px)] leading-[1.15] text-[#4a3228] mt-[30px] mb-[10px] first:mt-0';
const TEXT =
  'text-[14px] leading-[1.75] text-[#3f3028] max-[700px]:text-[13px]';
const LINK =
  'text-[#b8431c] underline underline-offset-2 hover:text-[#9d3816]';
const CARD = 'bg-white rounded-[4px] p-[clamp(22px,3.2vw,38px)]';

export default function Datenschutz() {
  useEffect(() => {
    document.title = 'Datenschutzerklärung | Thai Massage ENJOY';
  }, []);

  return (
    <Section className="bg-[#fbf5e9]">
      <div className="max-w-[860px] mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-[6px] text-[12px] font-semibold text-[#b8431c] no-underline hover:text-[#9d3816]"
        >
          <span aria-hidden="true">←</span> Zurück zur Startseite
        </Link>

        <div className={`${EYEBROW} mt-[18px]`}>Rechtliche Informationen</div>
        <h1 className={HEADING}>Datenschutzerklärung</h1>
        <p className="text-[13px] leading-[1.6] text-[#5b463c] m-0 mb-[22px] max-w-[620px]">
          Informationen zur Verarbeitung Ihrer personenbezogenen Daten.
        </p>

        <div className={CARD}>
          <h2 className={H2}>1. Verantwortliche Stelle</h2>
          <p className={`${TEXT} m-0`}>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>

          <div className="mt-[14px] bg-[#fbf5e9] rounded-[4px] p-[16px]">
            <address className={`${TEXT} not-italic m-0`}>
              Ludmila Ehof
              <br />
              Enjoy Thai Massage
              <br />
              Kirchplatz 6
              <br />
              83093 Bad Endorf
              <br />
              Telefon:{' '}
              <a href="tel:+4980536859464" className={LINK}>
                08053 6859 464
              </a>
              <br />
              Mobil:{' '}
              <a href="tel:+4917641947586" className={LINK}>
                0176 4194 75 86
              </a>
              <br />
              E-Mail:{' '}
              <a href="mailto:info@enjoythai-endorf.de" className={LINK}>
                info@enjoythai-endorf.de
              </a>
            </address>
          </div>

          <h2 className={H2}>2. Hosting</h2>
          <p className={`${TEXT} m-0`}>
            Diese Website wird bei der IONOS SE, Elgendorfer Straße 57, 56410
            Montabaur, gehostet. Beim Aufruf speichert der Server automatisch
            technische Daten wie Ihre IP-Adresse, Datum und Uhrzeit sowie die
            aufgerufene Seite (Server-Logdateien). Das ist für einen sicheren
            Betrieb der Website nötig (Art. 6 Abs. 1 lit. f DSGVO); die Daten
            werden nur so lange gespeichert, wie es dafür erforderlich ist. Mit
            IONOS besteht ein Vertrag über Auftragsverarbeitung.
          </p>

          <h2 className={H2}>3. Kontaktaufnahme per Telefon oder E-Mail</h2>
          <p className={`${TEXT} m-0`}>
            Wenn Sie uns anrufen oder eine E-Mail schreiben, verwenden wir Ihre
            Angaben nur, um Ihre Anfrage zu bearbeiten (Art. 6 Abs. 1 lit. b
            bzw. f DSGVO). Danach löschen wir sie, sofern keine gesetzlichen
            Aufbewahrungspflichten bestehen.
          </p>

          <h2 className={H2}>4. Ihre Rechte</h2>
          <p className={`${TEXT} m-0`}>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
            Einschränkung der Verarbeitung Ihrer Daten, auf Datenübertragbarkeit
            sowie auf Widerspruch (Art. 15–21 DSGVO). Wenden Sie sich dazu an
            die oben genannten Kontaktdaten.
          </p>
          <p className={`${TEXT} mt-[12px] mb-0`}>
            Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde
            beschweren (Art. 77 DSGVO), zum Beispiel beim Bayerischen Landesamt
            für Datenschutzaufsicht, Promenade 18, 91522 Ansbach.
          </p>
        </div>

        <div className="mt-[24px] flex flex-wrap gap-[12px]">
          <Button to="/" variant="outline">
            Zurück zur Startseite
          </Button>
        </div>
      </div>
    </Section>
  );
}
