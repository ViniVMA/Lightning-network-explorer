import type { PageLoad } from './$types';
import { nodesApiTop100 } from '$lib/api/mempool/nodes';

export const load: PageLoad = async () => {
	const [connectivity, liquidity] = await Promise.all([
		nodesApiTop100.connectivity(),
		nodesApiTop100.liquidity()
	]);

	return { connectivity: connectivity.slice(0, 5), liquidity: liquidity.slice(0, 5) };
};
