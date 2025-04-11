import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Article {
  id: number;
  title: string;
  author: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { id, title, author, content, imageUrl, publishedAt } = article;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <Image
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={title}
        width={400}
        height={200}
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-2">
          by {author} - {new Date(publishedAt).toLocaleDateString()}
        </p>
        <p className="text-gray-800 mb-4">{content.slice(0, 100)}...</p>
        <Link
          href={`/articlesDetails/${id}`}
          className="text-blue-500 hover:underline"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
