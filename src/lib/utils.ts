import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const SATOSHIS_PER_BTC = 100_000_000;

export function btcToSatoshis(btc: number) {
	return btc * SATOSHIS_PER_BTC;
}

export function satoshisToBtc(satoshis: number) {
	return (satoshis / SATOSHIS_PER_BTC).toFixed(2);
}

export function getPercentageOfTotal(total: number, value: number) {
	return (value / total) * 100;
}

export function dateParser(unixTime: number) {
	new Date(unixTime * 1000).toLocaleDateString('pt-BR');
}
