<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import '../app.css';
	import favicon from '/favicon.png?url';

	let { children } = $props();
</script>

<svelte:head>
	<title>Mellure 🩷</title>
	<link rel="shortcut icon" href={favicon} type="image/x-icon" />
</svelte:head>

<Header />
{@render children()}
<Footer />
