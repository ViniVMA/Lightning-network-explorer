import { describe, expect, it, vi } from 'vitest';

import { btcToSatoshis, satoshisToBtc, getPercentageOfTotal, dateParser, cn } from './utils';

vi.mock('tailwind-merge', () => ({ twMerge: vi.fn((str) => str) }));
vi.mock('clsx', () => ({
	clsx: vi.fn((...args) => args.flat().filter(Boolean).join(' '))
}));

describe('cn function', () => {
	it('should merge class names correctly', () => {
		expect(cn('btn', 'primary')).toBe('btn primary');
		expect(cn('text-lg', 'font-bold')).toBe('text-lg font-bold');
	});
});

describe('btcToSatoshis function', () => {
	it('should convert BTC to satoshis correctly', () => {
		expect(btcToSatoshis(1)).toBe(100_000_000);
		expect(btcToSatoshis(0.5)).toBe(50_000_000);
		expect(btcToSatoshis(0)).toBe(0);
	});
});

describe('satoshisToBtc function', () => {
	it('should convert satoshis to BTC correctly with two decimal places', () => {
		expect(satoshisToBtc(100_000_000)).toBe('1.00');
		expect(satoshisToBtc(50_000_000)).toBe('0.50');
		expect(satoshisToBtc(1_234_567)).toBe('0.01');
	});
});

describe('getPercentageOfTotal function', () => {
	it('should calculate the percentage correctly', () => {
		expect(getPercentageOfTotal(200, 50)).toBe(25);
		expect(getPercentageOfTotal(100, 10)).toBe(10);
		expect(getPercentageOfTotal(10, 0)).toBe(0);
		expect(getPercentageOfTotal(0, 10)).toBe(Infinity);
	});
});

describe('dateParser function', () => {
	it('should convert Unix timestamp to formatted date string (UTC safe)', () => {
		const timestamp = 1672531200; // 01/01/2023 UTC
		expect(dateParser(timestamp)).toBe('01/01/2023');
	});
});
