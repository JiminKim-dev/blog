import { PageDataType, PostType } from '@/types/database';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { extractPostItems } from './util';

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_API_KEY,
});
const notionToMd = new NotionToMarkdown({ notionClient: notion });

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

  const posts = extractPostItems(database);

  return posts;
};

export const getFilterdPosts = async (params: string): Promise<PostType[]> => {
  const database = await notion.databases.query({
    database_id: `${process.env.NEXT_PUBLIC_DATABASE_ID}`,
    filter: {
      property: 'tags',
      multi_select: {
        contains: params,
      },
    },
    sorts: [{ timestamp: 'created_time', direction: 'descending' }],
  });

  const posts = extractPostItems(database);

  return posts;
};

export const getPost = async (slug: string): Promise<PageDataType> => {
  const database = await notion.databases.query({
    database_id: `${process.env.NEXT_PUBLIC_DATABASE_ID}`,
    filter: {
      property: 'slug',
      formula: { string: { equals: slug } },
    },
  });

  const pageInfoData = extractPostItems(database)[0];
  const mdblocks = await notionToMd.pageToMarkdown(pageInfoData.id);
  const mdString = notionToMd.toMarkdownString(mdblocks);

  const pageData: PageDataType = {
    pageInfo: pageInfoData,
    mainText: mdString.parent,
  };

  return pageData;
};
