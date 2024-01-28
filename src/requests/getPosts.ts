import { API_REMOTE } from "@/route";

export default async function getPosts() {
    const res = await fetch(`${API_REMOTE}/posts`);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}