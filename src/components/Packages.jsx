import { PACKAGES } from '../data/siteData';
import PackageCard from './ui/PackageCard';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';

const PACKAGE_GRID =
  'grid grid-cols-[repeat(3,minmax(auto,1fr))] gap-[16px] max-[700px]:grid-cols-[minmax(auto,1fr)]';

export default function Packages() {
  return (
    <Section id="pakete" className="bg-[#f1e8d7]">
      <SectionHeading
        eyebrow="Ein besonderes Verwöhnerlebnis"
        title="Unsere Verwöhnpakete"
        description="Ausgewählte Anwendungen, liebevoll kombiniert."
      />

      <div className={PACKAGE_GRID}>
        {PACKAGES.map(([title, detail, price]) => (
          <PackageCard key={title} title={title} detail={detail} price={price} />
        ))}
      </div>
    </Section>
  );
}
