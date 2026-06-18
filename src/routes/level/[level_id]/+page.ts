const API_URL = import.meta.env.VITE_API_URL


export async function load({ fetch, params }) {
    const res = await fetch(`${API_URL}/levels/${params.level_id}/all`);

    if (!res.ok) {
        throw new Error("Failed to load levels");
    }

    return {
        level_data: await res.json()
    };
}