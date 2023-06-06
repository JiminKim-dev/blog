import { PostType } from '@/types/database';
import Tag from './Tag';

const PostTags = ({ posts }: { posts: PostType[] }) => {
  const tags = posts.map(post => post.tags).flat();

  const filterDuplicateTags = tags.filter((obj, idx) => {
    const isFirstFindIdx = tags.findIndex(obj2 => obj2?.id === obj?.id);
    return isFirstFindIdx === idx;
  });

  return (
    <div>
      <p className="pb-2 text-xl font-bold">🏷️ Tags</p>
      <div className="flex gap-4">
        {filterDuplicateTags.map(
          tag =>
            tag && (
              <Tag key={tag.name} name={tag.name}>
                <p className="text-stone-800 hover:text-blue-500">{tag.name}</p>
              </Tag>
            ),
        )}
      </div>
    </div>
  );
};

export default PostTags;
