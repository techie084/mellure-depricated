<script lang="ts">
	import { on } from 'events';

	interface productFilter {
		selectCategory: string;
		onCategoryChange: (category: string) => void;
	}

	const categories: string[] = ['All', 'Sunglasses', 'Eyeglasses', 'Reading', 'Sports', 'Vintage'];

	const onCategoryChange = (category: string) => {
		// Dispatch event or call a function to handle category change
		const event = new CustomEvent('categoryChange', {
			detail: { category }
		});
		dispatchEvent(event);
	};
	// selectCategory: string;
</script>

<div class="mb-6 flex items-center gap-4">
	<label for="category" class="text-sm font-medium text-gray-700">Category:</label>
	<select
		id="category"
		class="rounded border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
		bind:value={categories[0]}
		on:change={() => onCategoryChange(categories[0])}
	>
		{#each categories as category}
			<option value={category}>{category}</option>
		{/each}
	</select>
</div>
