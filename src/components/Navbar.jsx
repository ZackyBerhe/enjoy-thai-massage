import { useState } from 'react';
import { NAV_ITEMS } from '../data/siteData';
import Button from './ui/Button';

const NAV_LINK =
  'no-underline text-[13px] hover:text-orange max-[1050px]:text-[11px] max-[700px]:p-[7px]';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
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
        <Button
          href="#kontakt"
          onClick={closeMenu}
          className="hover:text-orange max-[1050px]:text-[11px] max-[700px]:p-[7px]"
        >
          ☎ Termin vereinbaren
        </Button>
      </div>
    </nav>
  );
}
