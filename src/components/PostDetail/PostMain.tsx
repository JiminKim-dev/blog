'use client';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';

type PostMainProps = {
  mainText: string;
};

const PostMain = ({ mainText }: PostMainProps) => {
  return (
    <ReactMarkdown
      className="flex flex-col gap-4"
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
        code: ({ inline, className, children, node, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              children={String(children).replace(/\n$/, '')}
              style={materialOceanic}
              language={match[1]}
              PreTag="div"
            />
          ) : (
            <code {...props} className="px-1 py-px text-sm text-red-400 rounded-sm bg-stone-200">
              {children}
            </code>
          );
        },
        details: ({ node, ...props }) => <details {...props} />,
        img: ({ node, ...props }) => {
          return (
            <Image src={props.src!} alt={props.alt!} width={720} height={480} className="m-auto" />
          );
        },
      }}
    />
  );
};

export default PostMain;
