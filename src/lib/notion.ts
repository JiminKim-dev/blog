import { PostType } from '@/types/database';
import { Client } from '@notionhq/client';
import { extractDatabaseItems } from './util';

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

  const posts: PostType[] = extractDatabaseItems(database);

  return posts;
};
