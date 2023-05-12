import { PostType } from '@/types/database';
import PostCard from '@/components/Posts/PostCard';

const PostContainer = ({ posts }: { posts: PostType[] }) => {
  return (
    <ul className="flex flex-col w-full gap-4">
      {posts.map(post => (
        <li key={post.id}>
          <PostCard key={post.id} post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostContainer;
