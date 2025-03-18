export async function mempoolRequest<T>(url: string, options: RequestInit = {}): Promise<T> {
	const response = await fetch('https://mempool.space/api' + url, {
		...options,
		headers: {
			...options.headers
		}
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw { error: `Error ${response.status}: ${errorText}` };
	}

	return response.json() as Promise<T>;
}
