import { render, screen, fireEvent } from '@testing-library/svelte';
import Home from './home.svelte';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import '@testing-library/jest-dom';
import { goto } from '$app/navigation';

vi.mock('$app/navigation', () => ({
	goto: vi.fn(() => Promise.resolve())
}));

const mockGoto = vi.mocked(goto);

const mockData = {
	connectivity: [{ alias: 'Node A', capacity: 1000 }],
	liquidity: [{ alias: 'Node B', capacity: 2000 }]
};

describe('Home screen top 5 rankings', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	test('renders correctly with data', () => {
		render(Home, { data: mockData });

		expect(screen.getByText('Lightning Network Explorer')).toBeInTheDocument();
		expect(screen.getByText('Connectivity 🌐')).toBeInTheDocument();
		expect(screen.getByText('Liquidity 💰')).toBeInTheDocument();

		mockData.connectivity.forEach((node) => {
			expect(screen.getByText(node.alias)).toBeInTheDocument();
		});
		mockData.liquidity.forEach((node) => {
			expect(screen.getByText(node.alias)).toBeInTheDocument();
		});
	});

	test('navigates to correct ranking page when clicking button', async () => {
		render(Home, { data: mockData });

		const buttons = await screen.findAllByText('View Ranking');
		expect(buttons.length).toBe(2);

		await fireEvent.click(buttons[0]);

		expect(mockGoto).toHaveBeenCalledWith('/lightning/nodes/rankings/connectivity');
	});
});
