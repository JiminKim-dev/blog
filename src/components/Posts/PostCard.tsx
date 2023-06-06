import Link from 'next/link';
import { PostType } from '@/types/database';
import Tag from './Tag';

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
        {tags.map(
          tag =>
            tag && (
              <Tag key={tag.name} name={tag.name}>
                <p className="text-blue-500 hover:text-blue-800" key={tag.id}>
                  #{tag.name}
                </p>
              </Tag>
            ),
        )}
      </div>
    </article>
  );
};

export default PostCard;
