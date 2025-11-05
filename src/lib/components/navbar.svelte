<script lang="ts">
	import { page } from '$app/state';

	let isOpen = $state(false);

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}

	// Close menu on route change
	$effect(() => {
		page.url.pathname;
		isOpen = false;
	});
</script>

<nav class="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
	<div class="mx-auto max-w-7xl px-4">
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="text-xl font-bold text-gray-900">Logo</a>

			<div class="hidden items-center gap-6 md:flex">
				<a href="/" class="font-medium text-gray-700 hover:text-gray-900">Home</a>
				<a href="/about" class="font-medium text-gray-700 hover:text-gray-900">About</a>
				<a href="/products" class="font-medium text-gray-700 hover:text-gray-900">Products</a>
				<a href="/contact" class="font-medium text-gray-700 hover:text-gray-900">Contact</a>
				<a href="/login" class="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800">Login</a
				>
			</div>

			<button onclick={toggleMenu} class="rounded-lg p-2 hover:bg-gray-100 md:hidden">
				{#if isOpen}
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{:else}
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				{/if}
			</button>
		</div>

		{#if isOpen}
			<div class="animate-in slide-in-from-top pb-4 duration-200 md:hidden">
				<div class="flex flex-col gap-2">
					<a
						href="/"
						onclick={closeMenu}
						class="rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a
					>
					<a
						href="/about"
						onclick={closeMenu}
						class="rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100">About</a
					>
					<a
						href="/products"
						onclick={closeMenu}
						class="rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100">Products</a
					>
					<a
						href="/contact"
						onclick={closeMenu}
						class="rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a
					>
					<a
						href="/login"
						onclick={closeMenu}
						class="mx-4 mt-2 rounded-lg bg-black px-4 py-2 text-center text-white hover:bg-gray-800"
						>Login</a
					>
				</div>
			</div>
		{/if}
	</div>
</nav>
