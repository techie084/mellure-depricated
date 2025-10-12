<script lang="ts">
	import '../app.css';
	import favicon from '/favicon.svg?url';
	import { Toasts } from 'svoast';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="">
	<Toasts position="bottom-left" />
	{@render children?.()}
</main>
