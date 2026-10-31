import { FEATURES } from '../data/siteData';

export default function Features() {
  return (
    <div
      data-reveal
      className="grid grid-cols-[repeat(4,minmax(auto,1fr))] bg-[#fff9ee] border-y border-[#e9d6bd] gap-0 py-[14px] px-[3vw] text-center text-green text-[13px] max-[700px]:grid-cols-[repeat(2,minmax(auto,1fr))] max-[700px]:gap-y-[12px]"
    >
      {FEATURES.map(([icon, line1, line2]) => (
        <div
          key={icon}
          className="flex items-center justify-center gap-[14px] border-r border-[#e3cbb2] leading-[1.35] last:border-r-0 max-[700px]:border-r-0 max-[700px]:justify-start"
        >
          <b
            aria-hidden="true"
            className="block font-serif font-normal leading-[normal] text-[37px] max-[700px]:text-[28px] text-orange"
          >
            {icon}
          </b>
          {line1}
          <br />
          {line2}
        </div>
      ))}
    </div>
  );
}
