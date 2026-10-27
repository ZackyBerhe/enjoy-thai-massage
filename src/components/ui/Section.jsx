import { SECTION } from '../../styles/tailwind';

export default function Section({
  id,
  as: Tag = 'section',
  className = '',
  children,
}) {
  return (
    <Tag
      id={id}
      className={`${SECTION} ${className}`}
    >
      {children}
    </Tag>
  );
}
