<script lang="ts">
	// import { activeFilter, products } from '$lib/stores/FilterStore.svelte';
	let categories: string[] = ['All', 'Sunglasses', 'Eyeglasses', 'Reading', 'Sports', 'Vintage'];
	// let active =

	const activeTab = (e: any) => {
		console.log(e, 'button clicked');
	};
</script>

<section class="sticky top-16 z-40 border-b bg-background/95 backdrop-blur">
	<div class="container mx-auto px-4 py-4">
		<div id="category-filters" class="scrollbar-hide flex gap-2 overflow-x-auto">
			{#each categories as category}
				<button
					class="category-btn active cursor-pointer"
					data-category={category}
					onclick={activeTab}>{category}</button
				>
			{/each}
		</div>
	</div>
</section>
