import { writable } from "svelte/store";

export const user = writable<string | null>(null)

export async function initializedAuth() {
    const token = localStorage.getItem("token");

    if (!token) {
        user.set(null)
        return
    }

    const res = await fetch("http://localhost:8000/me", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    if (!res.ok) {
        localStorage.removeItem("token")
        user.set(null)
        return
    }

    user.set(await res.json())
}

export function logout() {
    localStorage.removeItem("token")
    user.set(null)
}