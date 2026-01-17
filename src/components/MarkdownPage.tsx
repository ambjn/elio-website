import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownPageProps {
  file: string;
}

export const MarkdownPage = ({ file }: MarkdownPageProps) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/docs/${file}`)
      .then((res) => res.text())
      .then(setContent);
  }, [file]);

  return (
    <div className="min-h-screen bg-[#09090B] flex items-center justify-center p-8">
      <div className="max-w-2xl text-center text-white prose prose-invert prose-sm">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};
