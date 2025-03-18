export interface NodeList {
	publicKey: string;
	alias: string;
	channels: number;
	capacity: number;
	firstSeen: number;
	updatedAt: number;
	country: Country;
}

export interface Country {
	en: string;
}
