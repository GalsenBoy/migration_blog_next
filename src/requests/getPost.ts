import { API_REMOTE } from "@/route";
export async function getOnePost(uuid: string) {

    const res = await fetch(`${API_REMOTE}/posts/${uuid}`);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json()

}
