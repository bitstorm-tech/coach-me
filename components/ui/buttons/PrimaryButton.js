import Link from 'next/link';

export default function PrimaryButton({children, href, onClick}) {
  function renderButton() {
    return (
      <button onClick={onClick}
           className="rounded hover:bg-indigo-300 bg-indigo-400 w-max py-1 px-3 cursor-pointer text-white rounded-full focus:outline-none">
        {children}
      </button>
    )
  }

  if (href) {
    return <Link href={href}>{renderButton()}</Link>;
  }
  return renderButton();
}
