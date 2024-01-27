import IUpload from "@/interfaces/IUpload";
import { API_REMOTE } from "@/route";
import Image from "next/image";
import IPost from "@/interfaces/IPost";
import { getOnePost } from "@/requests/getPost";

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
              src={`${API_REMOTE}/${upload.originalname}`}
              alt={upload.originalname}
            />
            // <Image

            //   src=

            //   width={100}
            //   height={100}
            // />
          ))}
        <div>
          <p>{post?.description}</p>
        </div>
      </div>
    </section>
  );
}
