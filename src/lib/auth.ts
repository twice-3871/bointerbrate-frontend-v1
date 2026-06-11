import { browser } from "$app/environment";
import { writable } from "svelte/store";
import { api } from "./api";

export const user = writable<User | null>(null)

export async function initAuth() {
    const token = localStorage.getItem("token");
    if (!token) {
        user.set(null)
        return
    }

    try {
        const me = await api<User>("auth/me")
        user.set(me)
    } catch {
        localStorage.removeItem("token")
        user.set(null)
    }
    
}

export function logout() {
    localStorage.removeItem("token")
    user.set(null)
}

if (browser) {
    window.addEventListener("storage", (e) => {
        if (e.key === "token" && !e.newValue) {
            user.set(null)
        }
    })
}