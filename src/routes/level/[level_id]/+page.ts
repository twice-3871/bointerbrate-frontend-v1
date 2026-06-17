const API_URL = import.meta.env.VITE_API_URL

export async function load({fetch, params}) {
    const res = await fetch(`${API_URL}/levels/${params.level_id}`)
    const level_data = await res.json()


    return {
        level_data,
        debug: "LOAD WORKS"
    }
}