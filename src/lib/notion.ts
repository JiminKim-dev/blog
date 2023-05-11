import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_API_KEY,
});

export const getNotionPosts = async () => {
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

  return database.results;
};
