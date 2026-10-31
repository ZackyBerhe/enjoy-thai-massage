import { SERVICES } from '../data/siteData';
import { EYEBROW } from '../styles/tailwind';
import Button from './ui/Button';

export default function Services() {
  return (
    <section id="ueber-uns" className="p-0 bg-[#fff8eb]">
      <h2 className="sr-only">Unsere Massagen</h2>
      <div className="grid grid-cols-4 gap-[7px] p-[7px_10px_0] max-[700px]:grid-cols-[repeat(2,minmax(auto,1fr))] max-[400px]:grid-cols-[minmax(auto,1fr)]">
        {SERVICES.map((service) => (
          <article
            key={service.title}
            data-reveal
            className="text-center bg-[#f9f0e2] pb-[14px] overflow-hidden"
          >
            <img
              src={service.img}
              alt={service.alt}
              loading="lazy"
              className="h-[178px] max-[1050px]:h-[145px] max-[700px]:h-[155px] max-[400px]:h-[210px]"
            />
            <h3 className="font-serif italic font-semibold leading-[normal] text-[clamp(19px,2vw,26px)] max-[700px]:text-[21px] text-[#682b20] mt-[9px] mx-[6px] mb-0">
              {service.title}
            </h3>
            <p className="text-[13px] leading-[1.3] mt-[3px] mx-[8px] mb-[9px]">
              {service.text}
            </p>
            <Button
              href="#massagen"
              variant="small"
              aria-label={`Mehr erfahren über ${service.title}`}
            >
              Mehr erfahren
            </Button>
          </article>
        ))}
      </div>

      <div
        style={{
          backgroundImage:
            "linear-gradient(90deg,#fff6e4a8,#fff9efec 24%,#fff9efeb 76%,#fff3e1a0), url('assets/welcome-flowers.jpg'), url('assets/welcome-thailand.jpg')",
        }}
        className="min-h-[225px] p-[26px_20px_32px] text-center [background-position:center,left_center,right_center] [background-repeat:no-repeat] [background-size:cover,auto_100%,auto_100%]"
      >
        <div data-reveal className={EYEBROW}>
          WILLKOMMEN BEI THAI MASSAGE ENJOY
        </div>
        <h2
          data-reveal
          className="font-serif italic font-medium leading-[normal] text-[clamp(31px,3.6vw,53px)] text-[#682a20] my-[10px]"
        >
          Ein Ort zum Ankommen. Durchatmen. Wohlfühlen.
        </h2>
        <p
          data-reveal
          className="text-[14px] text-[#66544b] m-0 max-[700px]:[&>br]:hidden"
        >
          In entspannter Atmosphäre erwarten Sie traditionelle Thai-Massagen,
          wohltuende Aromaölmassagen,
          <br /> belebende Kräuterstempelmassagen und viele weitere Anwendungen
          für Ihr Wohlbefinden.
        </p>
      </div>
    </section>
  );
}
