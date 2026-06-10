
export async function api(
    path: string,
    fetchFn: typeof fetch,
    opitions: RequestInit = {}
) {
    const res = await fetchFn(`${import.meta.env.VITE_API_URL}/${path}`, opitions)

    if (!res.ok) {
        throw new Error(`Api error: ${res.status}`)
    }

    return await res.json()
}