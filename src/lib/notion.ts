import { DataBaseItemType, PostType } from '@/types/database';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_API_KEY,
});

export const getNotionPosts = async (): Promise<PostType[]> => {
  const database = await notion.databases.query({
    database_id: `${process.env.NEXT_PUBLIC_DATABASE_ID}`,
    filter: {
      property: 'active',
      checkbox: {
        equals: true,
      },
    },
    sorts: [{ timestamp: 'created_time', direction: 'descending' }],
  });

  const dataBaseItems: DataBaseItemType[] = [];
  database.results.forEach(post => {
    return (
      'properties' in post &&
      dataBaseItems.push({ ...post.properties, id: post.id } as DataBaseItemType)
    );
  });

  const posts: PostType[] = dataBaseItems.map(post => {
    return {
      id: post.id,
      title: post.title.title[0]?.plain_text || '제목을 입력해주세요',
      slug: post.slug.rich_text[0]?.plain_text || '경로를 입력해주세요',
      tags: post.tags.multi_select,
      createTime: post.created_time.created_time,
      description: post.description.rich_text[0]?.plain_text || '',
      thumbnail: post.thumbnail.files[0],
    };
  });

  return posts;
};
