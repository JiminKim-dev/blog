import { PostType } from '@/types/database';
import Tag from '../Posts/Tag';
import Image from 'next/image';

type PostHeadProps = {
  info: PostType;
};

const PostHead = ({ info }: PostHeadProps) => {
  const { title, createTime, tags, thumbnail } = info;

  return (
    <div>
      <h1 className="mb-6 text-4xl font-bold">{title}</h1>
      <p className="mb-4">{createTime.substring(0, 10)}</p>
      <div className="flex gap-2">
        {tags.map(
          tag =>
            tag && (
              <Tag key={tag.id} name={tag.name}>
                <p className="text-blue-500 hover:text-blue-800" key={tag.id}>
                  #{tag.name}
                </p>
              </Tag>
            ),
        )}
      </div>
      {thumbnail && (
        <Image
          alt={thumbnail.name}
          src={thumbnail.file.url}
          width={1024}
          height={720}
          sizes="100vw"
          priority
          className="w-full h-auto mb-4 rounded-xl"
        />
      )}
    </div>
  );
};

export default PostHead;
