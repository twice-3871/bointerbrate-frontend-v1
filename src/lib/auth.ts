import { browser } from "$app/environment";
import { writable } from "svelte/store";
import { api } from "./api";

export const user = writable<User | null>(null)
let authInitialized = false;

export async function initAuth() {
    if (authInitialized) return

    console.log("INIT AUTH RUN");
     if (!browser) return;

    const token = localStorage.getItem("token");
    
    if (!token) return;
    console.log("TOKEN:", token);


    try {
        const me = await api<User>("auth/me");
        console.log("AUTH SUCCESS:", me);
        user.set(me);
    } catch (e) {
        console.log("AUTH FAILED:", e);
        localStorage.removeItem("token");
        user.set(null);
    }

    authInitialized = true
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