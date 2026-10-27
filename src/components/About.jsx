import { EYEBROW, H2 } from '../styles/tailwind';
import Button from './ui/Button';
import Section from './ui/Section';

export default function About() {
  return (
    <Section className="bg-[#e9eddc] grid grid-cols-[repeat(2,minmax(auto,1fr))] gap-[65px] items-center max-[700px]:grid-cols-[minmax(auto,1fr)] max-[700px]:gap-[25px]">
      <div
        data-reveal
        className="h-[470px] max-[700px]:h-[330px] rounded-[190px_190px_16px_16px] overflow-hidden bg-[#e9dfcb] isolate"
      >
        <img
          data-parallax
          src="/assets/treatment.png"
          alt="Sanfte Wellnessbehandlung"
          loading="lazy"
          className="bg-[#e9dfcb] [object-position:center_45%]"
        />
      </div>

      <div>
        <div data-reveal className={EYEBROW}>
          Entspannung für Körper und Seele
        </div>
        <h2 data-reveal className={H2}>
          Die Kunst, sich Zeit zu schenken.
        </h2>
        <p data-reveal className="max-w-[560px]">
          Entdecken Sie bei Thai Massage ENJOY traditionelle Massagetechniken,
          duftende Aromaöle, warme Kräuterstempel und entspannende
          Spa-Anwendungen. Wählen Sie die Behandlung, die zu Ihrem Wohlbefinden
          passt.
        </p>
        <Button href="#kontakt" variant="secondary" data-reveal>
          Jetzt Termin anfragen
        </Button>
      </div>
    </Section>
  );
}
