import { mempoolRequest } from './api';
import type { NodeList } from './types/node-list';

const realNodesApi = {
	getTop100ByConnectivity: () =>
		mempoolRequest<NodeList[]>('/v1/lightning/nodes/rankings/connectivity')
};

export const nodesApi = realNodesApi;
