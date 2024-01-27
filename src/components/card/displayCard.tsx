import IUpload from "@/interfaces/IUpload";
import { truncate } from "@/utils/truncate";
import Link from "next/link";

import IPost from "@/interfaces/IPost";
import { formattedDate } from "@/utils/formattedDate";

type DisplayCardProps = {
  post: IPost;
};

export default function DisplayCard({ post }: DisplayCardProps) {
  return (
    <div id="card-container">
      <div id="card-data">
        <div>
          {post.upload &&
            post.upload.map((upload: IUpload, index: number) => (
              <Link key={index} href={`/post/${post.id}`}>
                <img srcSet={upload.originalname} alt={upload.fieldname} />
              </Link>
            ))}
          <h3>{post.title}</h3>
          <p>{truncate(post.description)}</p>
          <p id="publication">{formattedDate(post.create_at)}</p>
        </div>
      </div>
    </div>
  );
}
