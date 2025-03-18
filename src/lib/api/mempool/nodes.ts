import { mempoolRequest } from './api';
import type { NodeList } from './types/node-list';

export type NodesApiTop100 = {
	connectivity: () => Promise<NodeList[]>;
	liquidity: () => Promise<NodeList[]>;
};

const realNodesApi: NodesApiTop100 = {
	connectivity: () => mempoolRequest<NodeList[]>('/v1/lightning/nodes/rankings/connectivity'),
	liquidity: () => mempoolRequest<NodeList[]>('/v1/lightning/nodes/rankings/liquidity')
};

export const nodesApiTop100 = realNodesApi;
