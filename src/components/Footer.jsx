import { Link, useLocation } from 'react-router-dom';

const FOOTER_LINK = 'underline underline-offset-2 hover:text-white';

export default function Footer() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  // Browser pathnames keep the umlaut percent-encoded.
  const isPrivacyPage =
    decodeURIComponent(pathname) === '/datenschutzerklärung';

  return (
    <footer
      data-reveal
      className="bg-[#3f4f39] text-[#fff7e6] text-center py-[35px] px-[20px] text-[13px]"
    >
      <div className="font-serif italic font-normal leading-[normal] text-[35px]">
        ENJOY
      </div>
      <p>Thai Massage ENJOY · Entspannung für Körper und Seele · Bad Endorf</p>
      <p>Hinweis: Keine erotischen Behandlungen.</p>
      <p className="mt-[10px] text-[12px] text-[#e8dfc8]">
        {isHome ? (
          <a href="#kontakt" className={FOOTER_LINK}>
            Impressum
          </a>
        ) : (
          <Link to="/#kontakt" className={FOOTER_LINK}>
            Impressum
          </Link>
        )}
        <span className="mx-[8px]">·</span>
        <Link
          to="/datenschutzerklärung"
          aria-current={isPrivacyPage ? 'page' : undefined}
          className={FOOTER_LINK}
        >
          Datenschutzerklärung
        </Link>
      </p>
      <p className="mt-[4px] text-[11px] text-[#cfc6b2]">
        © {new Date().getFullYear()} Thai Massage ENJOY
      </p>
    </footer>
  );
}
