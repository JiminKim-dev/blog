import AllTags from '@/components/AllTags';
import { getNotionPosts } from '@/lib/notion';

const TagsPage = async () => {
  const posts = await getNotionPosts();

  return (
    <div className="w-full">
      <h1 className="my-8 text-5xl font-extrabold text-stone-800">Tags</h1>
      <section className="flex flex-col gap-6">
        <AllTags posts={posts} />
      </section>
    </div>
  );
};

export default TagsPage;
