const API_URL = import.meta.env.VITE_API_URL

export async function load({fetch, params}) {
    const res = await fetch(`${API_URL}/levels/${params.type}/all`)
    const levels = await res.json()

    return {
        levels,
        debug: "LOAD WORKS"
    }
}