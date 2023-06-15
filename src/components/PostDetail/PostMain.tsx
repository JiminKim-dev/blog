import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';
import Code from './Code';

type PostMainProps = {
  mainText: string;
};

const PostMain = ({ mainText }: PostMainProps) => {
  return (
    <ReactMarkdown
      className="flex flex-col gap-4 py-14"
      children={mainText}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ node, ...props }) => <h1 {...props} className="text-3xl font-bold" />,
        h2: ({ node, ...props }) => <h2 {...props} className="text-2xl font-bold" />,
        h3: ({ node, ...props }) => <h3 {...props} className="text-xl font-bold" />,
        a: ({ node, ...props }) => (
          <a {...props} className="underline text-stone-600 underline-offset-4" />
        ),
        blockquote: ({ node, ...props }) => {
          return (
            <blockquote
              {...props}
              className="px-4 py-2 border-l-4 border-stone-500 bg-stone-100"
            ></blockquote>
          );
        },
        code: props => <Code props={props} />,
        details: ({ node, ...props }) => <details {...props} />,
        img: ({ node, ...props }) => {
          return (
            <Image
              src={props.src!}
              alt={props.alt!}
              width={1024}
              height={720}
              className="w-full h-auto"
            />
          );
        },
      }}
    />
  );
};

export default PostMain;
