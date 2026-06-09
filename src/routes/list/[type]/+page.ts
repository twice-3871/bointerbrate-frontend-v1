import { getLevels } from "$lib/api";

export async function load({params, fetch}) {
    return {
        levels: await getLevels(params.type, fetch)
    }
}