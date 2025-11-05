<script lang="ts">
	import '../app.css';
<<<<<<< HEAD
	import favicon from '/favicon.svg?url';
	import { Toasts } from 'svoast';
	import { defaultSEO } from '$lib/utils/seo';
=======
	import favicon from '/favicon.png?url';
>>>>>>> 798a6ed (redesign)

	let { children } = $props();
</script>

<svelte:head>
<<<<<<< HEAD
	<!-- Default/Fallback SEO -->
	<title>{defaultSEO.title}</title>
	<meta name="description" content={defaultSEO.description} />

	<!-- Favicon -->
	<link rel="icon" href={favicon} />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />



=======
	<link rel="icon" href={favicon} />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

>>>>>>> 798a6ed (redesign)
	<!-- Theme Color -->
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<<<<<<< HEAD
<main>
	<Toasts position="bottom-left" />
	{@render children?.()}
</main>
=======
{@render children()}
>>>>>>> 798a6ed (redesign)
