import IPost from "@/interfaces/IPost";
import IUpload from "@/interfaces/IUpload";
import { API_REMOTE } from "@/route";
import Image from "next/image";

export default async function PostId({ params }: { params: { id: string } }) {
  async function getOnePost() {
    const res = await fetch(`${API_REMOTE}/posts/${params.id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    
    // Vérifier que la réponse n'est pas vide
    const json = await res.text();
    if (!json) {
      throw new Error("Empty response from the server");
    }

    return JSON.parse(json);
  }

  try {
    const post: IPost = await getOnePost();
    
    return (
      <section>
        <div id="getPostContain">
          <h1>{post?.title}</h1>
          {post?.upload &&
            post.upload.map((upload: IUpload, index: number) => (
              <Image key={index} src={`${API_REMOTE}/${upload.originalname}`} alt={upload.originalname} />
            ))}
          <div>
            <p>{post?.description}</p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
    // Gérer l'erreur de manière appropriée (peut-être afficher un message d'erreur à l'utilisateur)
    return <div>Error loading data. Check the console for more details.</div>;
  }
  
}
