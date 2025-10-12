<script lang="ts">
	export let name: string = '';
</script>

<button
	class="focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-xl px-5 text-base brightness-95 dark:border-0"
	class:name
	aria-label="btn"
>
	<span class="text-nowrap">
		{name}
	</span>
</button>
