import "./card.scss";
import IPost from "../../interfaces/IPost";
import Posts from "@/requests/getPosts";
import DisplayCard from "./displayCard";

export default async function Card() {
  // let isLoading: boolean = false;
  const posts: IPost[] = await Posts();
  // if (posts.length > 0) {
  //   isLoading = true;
  // }
  // // console.log(posts);
  return (
    <div id="card-flex">
      {posts?.map((post, key: number) => (
        <DisplayCard key={key} post={post} />
      ))}
    </div>
  );
}
