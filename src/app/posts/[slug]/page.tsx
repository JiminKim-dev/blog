import { getPost } from '@/lib/notion';
import PostHead from '@/components/PostDetail/PostHead';
import PostMain from '@/components/PostDetail/PostMain';

type Props = {
  params: {
    slug: string;
  };
};

const PostDetailPage = async ({ params: { slug } }: Props) => {
  const { pageInfo, mainText } = await getPost(slug);
  return (
    <div className="flex flex-col w-full my-20 divide-y-2 gap-14 divide-stone-400">
      <PostHead info={pageInfo} />
      <PostMain mainText={mainText} />
    </div>
  );
};

export default PostDetailPage;
