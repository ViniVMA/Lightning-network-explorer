<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { satoshisToBtc } from '$lib/utils.js';
	import { ExternalLink } from '@lucide/svelte';

	export let data;

	const categories = [
		{
			title: 'Connectivity 🌐',
			description: 'Top 100 by connectivity',
			key: 'connectivity',
			viewTransitionClass: 'card-title-view-transition-connectivity',
			link: '/lightning/nodes/rankings/connectivity'
		},
		{
			title: 'Liquidity 💰',
			description: 'Top 100 by liquidity',
			key: 'liquidity',
			viewTransitionClass: 'card-title-view-transition-liquidity',
			link: '/lightning/nodes/rankings/liquidity'
		}
	];
</script>

<main class="container mx-auto grid h-svh place-items-center">
	<div class="text-center text-3xl md:text-6xl">
		<h1>Lightning Network Explorer</h1>
		<div class="lightning-transition">⚡</div>
	</div>
	<div class="flex w-full flex-wrap justify-center gap-8 self-start">
		{#each categories as { title, description, key, viewTransitionClass, link }}
			<Card.Root class="w-full max-w-[350px]">
				<Card.Header>
					<Card.Title class={viewTransitionClass}>{title}</Card.Title>
					<Card.Description>{description}</Card.Description>
				</Card.Header>
				<Card.Content>
					<ul class="flex flex-col gap-4">
						{#each data[key as keyof typeof data] as address}
							<li class="flex justify-between gap-2 border-b-[1px] border-b-gray-300">
								<div>{address.alias}</div>
								<div>
									{satoshisToBtc(address.capacity)}
									<span class="ml-1 text-[10px] text-gray-400">BTC</span>
								</div>
							</li>
						{/each}
					</ul>
				</Card.Content>
				<Card.Footer class="flex justify-between">
					<Button class="flex gap-2 p-0 text-base" variant="link" on:click={() => goto(link)}>
						<span>View Ranking</span><ExternalLink size={16} />
					</Button>
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>
</main>
