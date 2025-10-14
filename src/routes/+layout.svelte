<script lang="ts">
	import '../app.css';
	import favicon from '/favicon.svg?url';
	import { Toasts } from 'svoast';
	import { defaultSEO } from '$lib/utils/seo';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Default/Fallback SEO -->
	<title>{defaultSEO.title}</title>
	<meta name="description" content={defaultSEO.description} />

	<!-- Favicon -->
	<link rel="icon" href={favicon} />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />



	<!-- Theme Color -->
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<main>
	<Toasts position="bottom-left" />
	{@render children?.()}
</main>
