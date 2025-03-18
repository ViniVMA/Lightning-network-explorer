<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import { ArrowLeft } from '@lucide/svelte';
	const { children } = $props();

	const slug = $derived($page.params.slug);
</script>

<div class="bg-stone-100">
	<div class="grid h-80 place-items-center bg-black text-white">
		<div class="flex w-full justify-between">
			<Button
				class="place-self-start text-white"
				variant="link"
				on:click={() => window.history.back()}><ArrowLeft size={16} />Voltar</Button
			>
			<div class="text-6xl">⚡</div>
		</div>

		<div class="flex flex-col gap-2">
			<div>Top 100</div>
			<div class={`card-title-view-transition-${slug} text-6xl capitalize md:text-8xl`}>{slug}</div>
		</div>
	</div>
	<div class="container mx-auto">
		{@render children()}
	</div>
</div>
