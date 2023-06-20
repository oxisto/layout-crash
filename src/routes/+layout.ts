import type { LayoutLoad } from './$types';
import { error } from '@sveltejs/kit';
export const ssr = false;
export const load = (async () => {
    throw error(400, "test")
}) satisfies LayoutLoad