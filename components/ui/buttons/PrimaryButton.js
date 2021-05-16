import Link from 'next/link';

export default function PrimaryButton({children, href='#', onClick=()=>{}, disabled=false}) {
  const enabledClasses = disabled ? 'bg-indigo-100 cursor-default' : 'cursor-pointer hover:bg-indigo-300 bg-indigo-400';

  function renderButton() {
    return (
      <button onClick={onClick} disabled={disabled}
           className={`rounded w-max py-1 px-3 text-white rounded-full focus:outline-none ${enabledClasses}`}>
        {children}
      </button>
    )
  }

  if (href) {
    return <Link href={href}>{renderButton()}</Link>;
  }
  return renderButton();
}
