import {
  EYEBROW,
  H2,
  SECTION_HEAD,
  SECTION_HEAD_P,
} from '../../styles/tailwind';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = '',
  descriptionClassName = '',
}) {
  return (
    <div className={`${SECTION_HEAD} ${className}`}>
      <div data-reveal className={EYEBROW}>
        {eyebrow}
      </div>
      <h2 data-reveal className={H2}>
        {title}
      </h2>
      {description && (
        <p
          data-reveal
          className={`${SECTION_HEAD_P} ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
