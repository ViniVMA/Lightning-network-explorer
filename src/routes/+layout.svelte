<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import '../app.css';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	let { children } = $props();

	const queryClient = new QueryClient();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<QueryClientProvider client={queryClient}>
	<div>
		{@render children()}
	</div>
</QueryClientProvider>
