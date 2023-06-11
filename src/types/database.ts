import {
  PageObjectResponse,
  SelectPropertyItemObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

type PropertyValue = Pick<PageObjectResponse, 'properties'>['properties'][string];
type ExtractPropertyValue<T extends PropertyValue['type']> = Extract<PropertyValue, { type: T }>;

type TitlePropertyType = ExtractPropertyValue<'title'>;
type RichTextPropertyType = ExtractPropertyValue<'rich_text'>;
type MultiSelectPropertyType = ExtractPropertyValue<'multi_select'>;
type CheckboxPropertyType = ExtractPropertyValue<'checkbox'>;
type FilesPropertyType = ExtractPropertyValue<'files'>;
type EditedTimePropertyType = ExtractPropertyValue<'created_time'>;

export interface DataBaseItemType {
  id: string;
  title: TitlePropertyType;
  description: RichTextPropertyType;
  slug: RichTextPropertyType;
  tags: MultiSelectPropertyType;
  active: CheckboxPropertyType;
  created_time: EditedTimePropertyType;
  thumbnail: FilesPropertyType;
}

export interface PostType {
  id: string;
  title: string;
  slug: string;
  tags: SelectPropertyItemObjectResponse['select'][];
  createTime: string;
  description: string;
  thumbnail: any;
}

export interface PageDataType {
  pageInfo: PostType;
  mainText: string;
}
