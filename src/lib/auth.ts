import { browser } from "$app/environment";
import { writable } from "svelte/store";
import { api } from "./api";

export const user = writable<User | null>(null)
export const authReady = writable(false);

export async function initAuth() {
    const token = localStorage.getItem("token");

    if (!token) {
        user.set(null);
        authReady.set(true);
        return;
    }

    try {
        const me = await api<User>("auth/me");
        user.set(me);
    } catch (e) {
        localStorage.removeItem("token");
        user.set(null);
    } finally {
        authReady.set(true);
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