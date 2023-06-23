import { PostType } from '@/types/database';
import Tag from './Posts/Tag';

const AllTags = ({ posts }: { posts: PostType[] }) => {
  const getCountTags = (posts: PostType[]) => {
    const tags = posts.map(post => post.tags).flat() || [];
    const countTags = new Map();

    tags.forEach(obj => {
      if (obj) {
        const value = obj['name'];
        const count = countTags.get(value) || 0;
        countTags.set(value, count + 1);
      }
    });
    return countTags;
  };

  const tags = getCountTags(posts);

  return (
    <div className="flex flex-wrap justify-center w-4/5 gap-4 m-auto">
      {Array.from(tags).map(
        ([tag, value]) =>
          tag && (
            <Tag key={tag} name={tag}>
              <span className="text-xl text-blue-500 rounded-full">#{tag} </span>
              <span className="text-lg">({value})</span>
            </Tag>
          ),
      )}
    </div>
  );
};

export default AllTags;
