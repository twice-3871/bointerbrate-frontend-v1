import { browser } from "$app/environment";
import { writable } from "svelte/store";
import { api } from "./api";

export const user = writable<User | null>(null)
export const authLoading = writable(true);

export async function initAuth() {
    console.log("INIT AUTH RUN");

    const token = localStorage.getItem("token");

    if (!token) {
        user.set(null);
        authLoading.set(false);
        return;
    }

    try {
        const me = await api<User>("auth/me");
        console.log("AUTH SUCCESS:", me);
        user.set(me);
    } catch (e) {
        console.log(e);
        localStorage.removeItem("token");
        user.set(null);
    } finally {
        authLoading.set(false);
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