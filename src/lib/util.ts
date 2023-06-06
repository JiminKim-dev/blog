import { DataBaseItemType } from '@/types/database';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

export const extractDatabaseItems = (database: QueryDatabaseResponse) => {
  const dataBaseItems: DataBaseItemType[] = [];
  database.results.forEach(post => {
    return (
      'properties' in post &&
      dataBaseItems.push({ ...post.properties, id: post.id } as DataBaseItemType)
    );
  });

  const posts = dataBaseItems.map(post => {
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
