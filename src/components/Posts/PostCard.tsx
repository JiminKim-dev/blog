import Link from 'next/link';
import { PostType } from '@/types/database';

const PostCard = ({ post }: { post: PostType }) => {
  const { title, slug, createTime, tags, description } = post;

  return (
    <article className="flex flex-col gap-1 p-6 bg-white border rounded-lg">
      <Link href={`/posts/${slug}`}>
        <p className="text-sm">{createTime.substring(0, 10)}</p>
        <h3 className="text-2xl font-bold hover:text-blue-500">{title}</h3>
        <p className="my-1 text-lg">{description}</p>
      </Link>
      <div className="flex gap-2">
        {tags.map(tag => (
          <span className="text-blue-500" key={tag?.id}>
            #{tag?.name}
          </span>
        ))}
      </div>
    </article>
  );
};

export default PostCard;
