export async function load({fetch, params}) {
    const res = await fetch(`http://localhost:8000/levels/${params.level_id}`)
    const level_data = await res.json()


    return {
        level_data,
        debug: "LOAD WORKS"
    }
}