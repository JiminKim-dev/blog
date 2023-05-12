import PostContainer from '@/components/Posts/PostContainer';
import { getNotionPosts } from '@/lib/notion';

const PostsPage = async () => {
  const posts = await getNotionPosts();

  return (
    <div className="w-full">
      <h1 className="mt-8 text-5xl font-extrabold text-stone-800">Posts</h1>
      <p className="py-6">개발하면서 정리한 기록을 올립니다.</p>
      <section className="flex gap-4">
        <PostContainer posts={posts} />
      </section>
    </div>
  );
};

export default PostsPage;
