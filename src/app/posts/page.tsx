import PostContainer from '@/components/Posts/PostContainer';
import { getNotionPosts } from '@/lib/notion';

const PostsPage = async () => {
  const posts = await getNotionPosts();

  return (
    <div>
      <h1 className="text-5xl">Posts</h1>
      <p className="py-6">개발하면서 정리한 기록을 올립니다.</p>
      <section>
        <PostContainer posts={posts} />
      </section>
    </div>
  );
};

export default PostsPage;
