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
        const text = await res.text();
        throw new Error(`API error ${res.status}: ${text}`);
    }

    return res.json();
}