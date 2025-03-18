<script lang="ts">
	import { page } from '$app/stores';
	const { children } = $props();

	const slug = $derived($page.params.slug);
</script>

<div class="bg-stone-100">
	<div class="grid h-80 place-items-center bg-black text-white">
		<div class="flex flex-col gap-2">
			<div>Top 100</div>
			<div class="text-6xl capitalize md:text-8xl">{slug}</div>
		</div>
	</div>
	<div class="container mx-auto">
		{@render children()}
	</div>
</div>
