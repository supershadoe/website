import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
 
export const actions = {
    default: _ => {throw redirect(307, "mailto:supershadoe@proton.me");}
} satisfies Actions;
