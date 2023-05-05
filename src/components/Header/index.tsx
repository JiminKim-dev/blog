import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <Link href="/" className="text-3xl font-bold">
        Dobby's Blog
      </Link>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">about</Link>
        <Link href="/posts">Posts</Link>
      </nav>
    </header>
  );
};

export default Header;
