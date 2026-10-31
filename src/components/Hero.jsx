import { useEffect, useRef } from 'react';
import Button from './ui/Button';

const FLAME =
  'flame absolute left-0 top-0 z-[4] block w-[23px] h-[39px] opacity-[.94] blur-[1.1px] mix-blend-screen origin-[50%_90%] rounded-[65%_65%_55%_55%] pointer-events-none [box-shadow:0_0_11px_5px_#ffcb6c7d,0_0_29px_11px_#ffad413d] bg-[radial-gradient(ellipse_at_50%_64%,#fffef5_0_12%,#fff8b4_23%,#ffcc5b_44%,#ff922b_61%,transparent_76%)] motion-reduce:animate-none motion-reduce:opacity-[.92]';
const FLAME_ANIMATION = ['animate-flame1', 'animate-flame2', 'animate-flame3'];

export default function Hero() {
  const heroLeftRef = useRef(null);

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

  return (
    <header
      id="start"
      className="relative grid grid-cols-[35%_30%_35%] items-stretch min-h-[455px] bg-[#f8eedc] overflow-hidden max-[1050px]:grid-cols-[31%_38%_31%] max-[700px]:grid-cols-[repeat(2,minmax(auto,1fr))] max-[700px]:min-h-auto"
    >
      <div
        ref={heroLeftRef}
        data-hero-photo
        role="img"
        aria-label="Kerzen, Handtücher und tropische Blüten"
        style={{ backgroundImage: "url('assets/hero-candles.jpg')" }}
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
          Entdecken Sie die wohltuende Welt der traditionellen Thai-Massage und
          schenken Sie sich eine Auszeit vom Alltag.
        </p>
        <Button href="#massagen">
          Unsere Massagen entdecken
        </Button>
      </div>

      <div
        role="img"
        data-hero-photo
        aria-label="Entspannte Frau bei einer wohltuenden Massage"
        style={{ backgroundImage: "url('assets/hero-massage.jpg')" }}
        className="relative min-h-[455px] max-[700px]:min-h-[250px] max-[700px]:row-start-2 bg-no-repeat bg-cover bg-center after:absolute after:inset-0 after:content-[''] after:pointer-events-none after:bg-[linear-gradient(270deg,transparent_65%,#f8eedc_100%)] max-[700px]:after:hidden"
      />
    </header>
  );
}
