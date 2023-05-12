import Link from 'next/link';
import { PostType } from '@/types/database';

const PostCard = ({ post }: { post: PostType }) => {
  const { title, slug, createTime, tags, description } = post;

  return (
    <article className="flex flex-col">
      <Link href={`/posts/${slug}`}>
        <p className="text-sm">{createTime.substring(0, 10)}</p>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </Link>
      <div className="flex gap-2">
        {tags.map(tag => (
          <span key={tag?.id}>#{tag?.name}</span>
        ))}
      </div>
    </article>
  );
};

export default PostCard;
