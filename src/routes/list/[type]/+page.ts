import { api } from "$lib/api";

export async function load({params, fetch}) {
    return {
        levels: await api(`levels/${params.type}`, fetch)
    }
}