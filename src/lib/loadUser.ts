import {user} from "./auth"
import { browser } from "$app/environment"

export async function loadUser() {
    if (browser) {
        const t = localStorage.getItem("token")

        if (!t) return

        const res = await fetch("http://localhost:8000/me", {
            headers: {
                Authorization: `Bearer ${t}`
            }
        })

        if(!res.ok) return

        user.set(await res.json())
    }


}