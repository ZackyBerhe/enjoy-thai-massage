import { PRICES } from '../data/siteData';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';

const PRICE_CARD = 'border border-[#e8dcc8] rounded-[14px] p-[27px] bg-white';
const PRICE_H3 =
  'font-serif font-medium leading-[normal] text-[30px] m-0 text-orange';
const PRICE_P = 'text-[13px] text-[#78695e]';
const RATE =
  'flex justify-between gap-[9px] border-b border-dotted border-[#cfc0a7] text-[13px] py-[4px] [&>strong]:whitespace-nowrap';

export default function Pricing() {
  return (
    <Section id="massagen" className="bg-[#fffbf5]">
      <SectionHeading
        eyebrow="Unser Angebot"
        title="Massagen & Preise"
        description="Finden Sie Ihre persönliche Wohlfühlbehandlung. Alle Preise in Euro."
      />

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
    </Section>
  );
}
