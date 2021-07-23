import Link from 'next/link';

export default function PrimaryButton({
  children,
  href = '#',
  onClick = () => {},
  disabled = false,
  border = true,
}) {
  const enabledClasses = disabled ? 'cursor-default' : 'cursor-pointer';
  const borderClasses = border
    ? 'rounded-full border-primary border hover:shadow-inner-glow hover:border-accent'
    : 'hover:text-accent';

  function renderButton() {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`rounded w-max py-1 px-3 text-primary bg-opacity-100 focus:outline-none  hover-transition ${enabledClasses} ${borderClasses}`}
      >
        {children}
      </button>
    );
  }

  if (href) {
    return <Link href={href}>{renderButton()}</Link>;
  }
  return renderButton();
}
