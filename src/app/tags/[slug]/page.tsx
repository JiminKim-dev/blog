import PostContainer from '@/components/Posts/PostContainer';
import { getFilterdPosts } from '@/lib/notion';

type Props = {
  params: {
    slug: string;
  };
};

const TagDetailPage = async ({ params: { slug } }: Props) => {
  const filterdTagPosts = await getFilterdPosts(slug);

  return (
    <div className="w-full">
      <h1 className="mt-8 text-5xl font-extrabold text-stone-800">{slug}</h1>
      <p className="py-6">{slug} 태그와 관련된 포스트 입니다.</p>
      <section className="flex flex-col gap-4">
        <PostContainer posts={filterdTagPosts} />
      </section>
    </div>
  );
};

export default TagDetailPage;
