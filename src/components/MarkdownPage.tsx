import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Layout } from "./Layout";

interface MarkdownPageProps {
  file: string;
}

const proseStyles = `prose prose-invert prose-gray max-w-none text-center
  [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mb-8 [&_h1]:text-gradient
  [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:text-white
  [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:text-white
  [&_p]:text-[#A1A1AA] [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:text-lg
  [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:text-[#A1A1AA] [&_ul]:inline-block [&_ul]:text-left
  [&_li]:mb-2
  [&_table]:w-full [&_table]:mb-6 [&_table]:border-collapse [&_table]:mx-auto
  [&_th]:text-center [&_th]:p-3 [&_th]:bg-white/5 [&_th]:border [&_th]:border-white/10 [&_th]:text-white
  [&_td]:p-3 [&_td]:border [&_td]:border-white/10 [&_td]:text-[#A1A1AA] [&_td]:text-center
  [&_strong]:text-white [&_strong]:font-semibold
  [&_a]:text-[#D6F248] [&_a]:hover:underline`;

export const MarkdownPage = ({ file }: MarkdownPageProps) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/docs/${file}`)
      .then((res) => res.text())
      .then(setContent);
  }, [file]);

  return (
    <Layout>
      <div className="container max-w-3xl pb-20 pt-10">
        <div className={proseStyles}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
};
