import { getPost } from '@/lib/notion';

type Props = {
  params: {
    slug: string;
  };
};

const PostDetailPage = async ({ params: { slug } }: Props) => {
  const post = await getPost(slug);
  return <div>{post.pageInfo.title}</div>;
};

export default PostDetailPage;
