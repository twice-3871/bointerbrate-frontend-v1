import { browser } from "$app/environment";

const API_URL = import.meta.env.VITE_API_URL

export async function api<T>(
    path: string,
    options: RequestInit & {fetch?: typeof fetch} = {}
): Promise<T> {
    const fn = options.fetch ?? fetch;
    const token = browser ? localStorage.getItem("token") : null

    const res = await fn(`${API_URL}/${path}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
            ...(token ? {Authorization: `Bearer ${token}`} : {})
        }
    })
 
    if (!res.ok) {
        throw new Error(`API errorL: ${res.status}`)
    }

    return res.json();
}