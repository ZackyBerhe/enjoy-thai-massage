const CARD = 'bg-[#fffaf0] rounded-[13px] p-[24px] border-t-[3px] border-t-gold';
const CARD_TITLE =
  'font-serif font-medium leading-[normal] text-[26px] mt-0 mb-[12px]';

export default function PackageCard({ title, detail, price }) {
  return (
    <div data-reveal className={CARD}>
      <h3 className={CARD_TITLE}>{title}</h3>
      <p className="text-[13px]">{detail}</p>
      <strong className="text-orange">{price}</strong>
    </div>
  );
}
