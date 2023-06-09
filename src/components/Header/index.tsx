import Link from 'next/link';

const Header = () => {
  return (
    <header className="px-4 py-6 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex items-center justify-between max-w-screen-lg m-auto">
        <Link href="/" className="text-2xl font-bold text-white hover:text-stone-800">
          Dobby's Blog
        </Link>
        <nav className="flex gap-4 text-white">
          <Link href="/posts" className="hover:text-stone-800">
            Posts
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
