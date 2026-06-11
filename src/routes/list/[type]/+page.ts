export async function load({fetch, params}) {
    const res = await fetch(`http://localhost:8000/levels/${params.type}`)
    const levels = await res.json()

    return {
        levels,
        debug: "LOAD WORKS"
    }
}