import IUpload from "@/interfaces/IUpload";
import IPost from "@/interfaces/IPost";
import { getOnePost } from "@/requests/getPost";
import "./onepost.scss";

export default async function PostId({
  params,
}: {
  params: { postId: string };
}) {
  const post: IPost = await getOnePost(params.postId);

  return (
    <section>
      <div id="getPostContain">
        <h1>{post?.title}</h1>
        {post?.upload &&
          post.upload.map((upload: IUpload, index: number) => (
            <img
              key={index}
              src={`/${upload.originalname}`}
              alt={upload.originalname}
            />
          ))}
        <div>
          <p>{post?.description}</p>
        </div>
      </div>
    </section>
  );
}
