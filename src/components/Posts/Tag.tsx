import Link from 'next/link';

const Tag = ({ name, children }: { name: string; children: React.ReactNode }) => {
  return <Link href={`/tag/${name}`}>{children}</Link>;
};

export default Tag;
