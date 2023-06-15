'use client';
import { CodeProps } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Code = ({ props }: { props: CodeProps }) => {
  const { inline, className, children, node, ...anyProps } = props;
  const match = /language-(\w+)/.exec(className || '');

  return !inline && match ? (
    <SyntaxHighlighter
      {...anyProps}
      children={String(children).replace(/\n$/, '')}
      style={tomorrow}
      language={match[1]}
      PreTag="div"
      className="rounded-xl"
    />
  ) : (
    <code {...anyProps} className="px-1 py-px text-sm text-red-400 rounded-sm bg-stone-200">
      {children}
    </code>
  );
};

export default Code;
