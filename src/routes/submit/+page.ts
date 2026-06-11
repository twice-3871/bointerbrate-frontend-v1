import { api } from "$lib/api";

export async function load({fetch}) {
    return {
        levels: await api(`levels`, fetch)
    }
}