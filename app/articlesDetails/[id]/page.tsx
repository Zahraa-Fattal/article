"use client";

import Data from "@/public/data.json";
import Image from "next/image";
import { use } from "react";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function ArticleDetails({ params }: Props) {
  const { id } = use(params);
  const article = Data.articles.find((a) => a.id === Number(id));

  if (!article) {
    return <p className="p-6 text-red-500">Article not found.</p>;
  }

  return (
    <div className="min-h-xl p-6 max-w-2xl mx-auto">
      <Image
        src={article.imageUrl || "/placeholder.svg"}
        alt={article.title}
        width={800}
        height={200}
        className="rounded mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-600 mb-4">
        by {article.author} on{" "}
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>
      <p className="text-lg text-gray-800">{article.content}</p>
    </div>
  );
}
