import { Link } from 'react-router-dom';

const BASE =
  'inline-flex items-center justify-center no-underline rounded-[40px] font-sans font-semibold leading-[normal] cursor-pointer';

const VARIANTS = {
  primary:
    'py-[13px] px-[25px] text-[13px] bg-orange text-white hover:bg-[#9d3816]',
  small:
    'py-[6px] px-[21px] text-[12px] bg-orange text-white hover:bg-[#9d3816]',
  secondary:
    'py-[13px] px-[25px] text-[13px] bg-transparent border border-orange text-orange hover:bg-[#9d3816]',
  dark: 'py-[7px] px-[16px] text-[12px] bg-[#1f1f1f] text-white hover:bg-black',
  outline:
    'py-[6px] px-[15px] text-[12px] bg-transparent border border-[#ddd6cb] text-[#3f3028] hover:border-[#3f3028]',
};

export default function Button({
  href = '#',
  to,
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const classes = `${BASE} ${
    VARIANTS[variant] || VARIANTS.primary
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}
