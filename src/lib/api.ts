import type { RouteParams } from "$app/types";

const API_URL = 'http://localhost:8000'

export async function getLevels(type: string, fetch: typeof globalThis.fetch) {
    const res = await fetch(`${API_URL}/${type}`)

    if (!res.ok) {
        throw new Error('Failed to load levels')
    }

    return res.json();
}