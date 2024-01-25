// "use client"
// import {  useState } from "react";
import "./card.scss";
import IPost from "../../interfaces/IPost";
import Posts from "@/utils/getPosts";
import DisplayCard from "./displayCard";

export default async function Card() {
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const posts: IPost[] = await Posts();
  // if (posts.length > 0) {
  //   setIsLoading(true);
  // }
  // console.log(posts);
  return (
    <div id="card-flex">
      {posts?.map((post, key: number) => (
        <DisplayCard key={key} post={post} />
      ))}
    </div>
  );
}
