import { browser } from "$app/env";

const API_URL = import.meta.env.API_URL

export async function api(
    path: string,
    opitions: RequestInit = {}
) {
    const token = browser ? localStorage.getItem("token") : null

    const res = await fetch(`${API_URL}${path}`, {
        ...opitions,
        headers: {
            ...opitions.headers,
            ...API_URL(token ? { Authorization: `Bearer ${token}`} : {})
        }
    })

    if (!res.ok) {
        throw new Error(`Api error: ${res.status}`)
    }

    return res.json()
}