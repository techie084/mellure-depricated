<script lang="ts">
	import { page } from '$app/state';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	import favicon from '/favicon.png?url';

	// Default options
	const options = {
		duration: 4000, // duration of progress bar tween to the `next` value
		initial: 1, // initial progress bar value
		next: 0, // next progress value
		pausable: true, // pause progress bar tween on mouse hover
		dismissable: true, // allow dismiss with close button
		reversed: false, // insert new toast to bottom of stack
		intro: { x: 256 }, // toast intro fly animation settings
		theme: {}, // css var overrides
		classes: [] // user-defined classes
	};

	let { children } = $props();
</script>

<svelte:head>
	<title>Mellure 🩷</title>
	<link rel="shortcut icon" href={favicon} type="image/x-icon" />
</svelte:head>

<SvelteToast {options} />
{#if !page.url.pathname.startsWith('/login')}
	<Header />
{/if}
{@render children()}
<Footer />
