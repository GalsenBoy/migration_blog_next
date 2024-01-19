// "use client";
import { useEffect, useState } from "react";
import "./card.scss";
import IPost from "../../interfaces/IPost";

import Posts from "@/utils/getPosts";
import DisplayCard from "./displayCard";

export default async function Card() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const posts: IPost[] = await Posts();
  if (posts.length > 0) {
    setIsLoading(true);
  }

  return (
    <div id="card-flex">
      {isLoading && (
        <>
          {posts?.map((post, key: number) => (
            <DisplayCard key={key} post={post} />
          ))}
        </>
      )}
      {!isLoading && (
        <h1 className="text-2xl font-bold text-center">
          Configuration du backend en cours sur Vercel
        </h1>
      )}
    </div>
  );
}
