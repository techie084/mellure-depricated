<script lang="ts">
	import { activeFilter, products } from '$lib/stores/FilterStore.svelte';

	let product = products[0];
	console.log($activeFilter);

	let categories: string[] = ['All', 'Sunglasses', 'Eyeglasses', 'Reading', 'Sports', 'Vintage'];
</script>

<section class="sticky top-16 z-40 border-b bg-background/95 backdrop-blur">
	<div class="container mx-auto px-4 py-4">
		<div id="category-filters" class="scrollbar-hide flex gap-2 overflow-x-auto">
			{#each categories as category}
				<button class="category-btn active cursor-pointer" data-category={category}
					>{category}</button
				>
			{/each}
			<!-- <button class="category-btn active" data-category="All">All</button>
			<button class="category-btn" data-category="Sunglasses">Sunglasses</button>
			<button class="category-btn" data-category="Eyeglasses">Eyeglasses</button>
			<button class="category-btn" data-category="Reading">Reading</button>
			<button class="category-btn" data-category="Sports">Sports</button>
			<button class="category-btn" data-category="Vintage">Vintage</button> -->
		</div>
	</div>
</section>
