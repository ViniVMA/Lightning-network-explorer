import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { nodesApiTop100, type NodesApiTop100 } from '$lib/api/mempool/nodes';

export const load: PageLoad = async ({ params }) => {
	const slug = params.slug as keyof NodesApiTop100;

	const query = nodesApiTop100[slug];

	if (!query) error(404, 'Not found');

	return {};
};
