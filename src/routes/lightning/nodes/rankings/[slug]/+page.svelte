<script lang="ts">
	import { nodesApiTop100, type NodesApiTop100 } from '$lib/api/mempool/nodes';
	import * as Table from '$lib/components/ui/table/index.js';
	import { dateParser, getPercentageOfTotal, satoshisToBtc } from '$lib/utils';
	import { createQuery } from '@tanstack/svelte-query';
	import { page } from '$app/stores';

	const slug = $derived($page.params.slug as keyof NodesApiTop100);

	const query = $derived(nodesApiTop100[slug]);

	const nodeQuery = $derived(
		createQuery({
			queryKey: [slug],
			queryFn: query,
			refetchInterval: 10000,
			refetchOnWindowFocus: true
		})
	);

	const totalChannels = $derived(
		($nodeQuery?.data ?? []).reduce((acc, current) => acc + current.channels, 0)
	);
</script>

{#if $nodeQuery.isLoading}
	<div>Loading...</div>
{:else if $nodeQuery.data}
	<Table.Root class="mt-8 rounded bg-white md:mt-24">
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-full sm:w-[100px]">Alias</Table.Head>
				<Table.Head class=" hidden sm:table-cell">Capacity</Table.Head>
				<Table.Head>Channels</Table.Head>
				<Table.Head class="hidden  text-right md:table-cell">Last update</Table.Head>
				<Table.Head class="hidden  text-right md:table-cell">First seen</Table.Head>

				<Table.Head class="hidden  text-right md:table-cell">Country</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each $nodeQuery?.data as address, i (i)}
				<Table.Row>
					<Table.Cell class="font-medium">{address.alias}</Table.Cell>
					<Table.Cell class=" hidden sm:table-cell"
						>{satoshisToBtc(address.capacity)}
						<span class="ml-1 text-[10px] text-gray-400">BTC</span></Table.Cell
					>
					<Table.Cell
						>{address.channels}

						<span class="ml-1 text-[10px] text-gray-400"
							>{getPercentageOfTotal(totalChannels, address.channels).toFixed(2)}%</span
						></Table.Cell
					>
					<Table.Cell class="hidden text-right md:table-cell"
						>{dateParser(address.updatedAt)}</Table.Cell
					>
					<Table.Cell class="hidden text-right md:table-cell"
						>{dateParser(address.firstSeen)}</Table.Cell
					>

					<Table.Cell class="hidden  text-right md:table-cell"
						>{address.country?.en ?? '?'}</Table.Cell
					>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
{/if}
