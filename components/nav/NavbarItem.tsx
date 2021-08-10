import Link from 'next/link';

export default function NavbarItem({ children, href = '#', visible = true }) {
  if (!visible) {
    return null;
  }

  return (
    <Link href={href}>
      <div className="text-primary hover:text-accent cursor-pointer hover-transition">
        {children}
      </div>
    </Link>
  );
}
