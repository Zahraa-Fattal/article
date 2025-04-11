import { notFound } from "next/navigation";
import Data from "@/public/data.json";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

export default async function ArticleDetails({ params }: Props) {
  const { id } = params;

  const article = Data.articles.find((a) => a.id === Number(id));

  if (!article) return notFound();

  return (
    <div className="min-h-xl p-6 max-w-2xl mx-auto">
      <Image
        src={article.imageUrl}
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
