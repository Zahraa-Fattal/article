"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ArticleCard from "@/components/articleCard/card";
import Data from "@/public/data.json";

export default function Home() {
  const router = useRouter();
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(auth);
    setIsAuthChecked(true);

    if (!auth) {
      router.push("/login");
    }
  }, []);

  if (!isAuthChecked || !isAuthenticated) return null;

  const articles = Data.articles.slice(0, 5);

  return (
    <div className="min-h-screen  p-6">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
        Latest Articles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
