import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const token = writable<string | null>(null)
export const user = writable<string | null>(null)

if (browser) {
    token.set(localStorage.getItem("token"))
}