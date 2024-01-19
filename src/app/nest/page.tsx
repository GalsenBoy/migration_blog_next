import IPost from "@/interfaces/IPost";
import Posts from "../../utils/getPosts";
export default async function Nest() {
  const data: IPost[] = await Posts();
  //   console.log(data);

  return (
    <section>
      {data.map((post, key) => (
        <h1 key={key}>{post.description}</h1>
      ))}
    </section>
  );
}
