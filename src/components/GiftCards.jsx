import { GIFTS } from '../data/siteData';
import { EYEBROW, H2 } from '../styles/tailwind';
import Button from './ui/Button';
import PackageCard from './ui/PackageCard';
import Section from './ui/Section';

export default function GiftCards() {
  return (
    <Section
      id="gutscheine"
      className="text-center bg-[linear-gradient(120deg,#e5eddc,#faf1dc)]"
    >
      <div data-reveal className={EYEBROW}>
        Freude verschenken
      </div>
      <h2 data-reveal className={H2}>
        Ein Geschenk voller Entspannung
      </h2>
      <p data-reveal className="max-w-[660px] mx-auto mt-0 mb-[25px]">
        Überraschen Sie Ihre Liebsten mit einem ENJOY-Geschenkgutschein. Auch
        unsere 5er-Karten sind eine schöne Möglichkeit, sich regelmäßig eine
        Auszeit zu gönnen.
      </p>

      <div className="grid grid-cols-[repeat(3,minmax(auto,1fr))] gap-[16px] max-w-[900px] mx-auto my-[25px] text-left max-[700px]:grid-cols-[minmax(auto,1fr)] [&_p]:mt-0 [&_p]:mb-[25px]">
        {GIFTS.map(([title, detail, price]) => (
          <PackageCard key={title} title={title} detail={detail} price={price} />
        ))}
      </div>

      <Button href="tel:+4917641947586" data-reveal>
        Gutschein telefonisch anfragen
      </Button>
    </Section>
  );
}
