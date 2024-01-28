import IUpload from "@/interfaces/IUpload";
import { truncate } from "@/utils/truncate";
import Link from "next/link";

import IPost from "@/interfaces/IPost";
import { formattedDate } from "@/utils/formattedDate";
import Image from "next/image";

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
                {/* <Image
                  src={upload.originalname}
                  alt={upload.fieldname}
                  width={100}
                  height={100}
                /> */}
              </Link>
            ))}
          <h2>{post.title}</h2>
          <p id="description">{truncate(post.description)}</p>
          <p id="publication">{formattedDate(post.create_at)}</p>
        </div>
      </div>
    </div>
  );
}
