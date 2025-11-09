<script lang="ts">
	const grids = [{}, {}, {}, {}];
</script>

<section class="container mx-auto px-4 py-12">
	{#each grids as grid}
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{grid}</div>
	{/each}
</section>
