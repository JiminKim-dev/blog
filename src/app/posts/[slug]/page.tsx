import { getPost } from '@/lib/notion';
import PostHead from '@/components/PostDetail/PostHead';

type Props = {
  params: {
    slug: string;
  };
};

const PostDetailPage = async ({ params: { slug } }: Props) => {
  const { pageInfo, mainText } = await getPost(slug);
  return (
    <div className="w-full p-10 mt-10 bg-white border-2 rounded-3xl border-stone-200">
      <PostHead info={pageInfo} />
    </div>
  );
};

export default PostDetailPage;
