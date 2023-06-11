import { DataBaseItemType, PostType } from '@/types/database';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

const extractDatabaseProperties = (database: QueryDatabaseResponse) => {
  const dataBaseItems: DataBaseItemType[] = [];
  database.results.forEach(post => {
    return (
      'properties' in post &&
      dataBaseItems.push({ ...post.properties, id: post.id } as DataBaseItemType)
    );
  });

  return dataBaseItems;
};

export const extractPostItem = (post: DataBaseItemType) => {
  return {
    id: post.id,
    title: post.title.title[0]?.plain_text || '제목을 입력해주세요',
    slug: post.slug.rich_text[0]?.plain_text || '경로를 입력해주세요',
    tags: post.tags.multi_select,
    createTime: post.created_time.created_time,
    description: post.description.rich_text[0]?.plain_text || '',
    thumbnail: post.thumbnail.files[0],
  };
};

export const extractPostItems = (database: QueryDatabaseResponse): PostType[] => {
  const dataBaseItems = extractDatabaseProperties(database);
  return dataBaseItems.map(post => extractPostItem(post));
};
