import Link from 'next/link';

export default function NavbarItem({children, href = '#', visible = true}) {
  if (!visible) {
    return '';
  }

  return (
    <Link href={href}>
      <div className="text-indigo-200 hover:text-red-500 cursor-pointer">
        {children}
      </div>
    </Link>
  );
}
