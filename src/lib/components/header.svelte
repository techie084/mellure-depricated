<script lang="ts">
	import { UserRound, ShoppingCart, LayoutGrid, X, Home } from '@lucide/svelte';

	// Navigation state Changes
	let Toggle = $state<boolean>(true);

	const navigation = $state([
		{
			name: 'Home',
			path: '/',
			icon: Home
		},
		{
			name: 'Project',
			path: '/project',
			icon: Home
		},
		{
			name: 'Blog',
			path: '/blog',
			icon: Home
		}
	]);
</script>

<header
	id="main-header"
	class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
>
	<nav class="container mx-auto flex h-16 items-center justify-between px-4">
		<div class="flex items-center gap-6">
			<a
				id="logo-button"
				href="/"
				aria-labelledby="Logo"
				class="text-2xl font-bold transition-opacity hover:opacity-80">Mellure</a
			>
		</div>
		<!-- Desktop  nav -->
		<div class="flex items-center gap-4">
			<a
				href="/user"
				id="account-btn"
				aria-label="Account"
				class="hidden h-10 w-10 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-accent md:flex"
			>
				<UserRound class="h-5 w-5" />
			</a>
			<a
				href="/cart"
				id="cart-btn"
				aria-label="Shopping Cart"
				class="relative hidden h-10 w-10 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-accent md:flex"
			>
				<ShoppingCart class="h-5 w-5" />
				<span
					id="cart-badge"
					class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary p-0 text-xs text-primary-foreground"
					>0</span
				>
			</a>

			<!-- Mobile menu button -->
		</div>
	</nav>
</header>
<!-- 
<nav
	class="fixed bottom-4 right-4 z-10 flex cursor-pointer gap-2 rounded-full bg-[#26262a] p-4"
	onclick={() => {
		isMenuOpen = !isMenuOpen;
	}}
>
	<button class="h-full w-full transition-transform duration-300" aria-label="Toggle nav">
		{#if isMenuOpen}
			<LayoutGrid class="h-6 w-6 rotate-90 transition-transform" aria-hidden="true" />
		{:else}
			<X class="h-6 w-6 -rotate-90 transition-transform" aria-hidden="true" />
		{/if}
	</button>


		{#if !isMenuOpen}
		<ul
			class="absolute bottom-16 right-0 z-10 flex flex-col gap-2 rounded-lg border border-[#212529] bg-[#0d0d0f] p-1"
		>
			<li class="flex flex-col gap-2">
				{#each navigation as { name, path, icon }}
					<a
						class="flex w-full items-center gap-1 rounded-md bg-[#212121] px-2.5 py-1 text-gray-200"
						aria-current="page"
						href={path}
					>
				
						<svelte:component this={icon} class="h-5 w-5" />
						{name}
					</a>
				{/each}
			</li>
		</ul>
	{/if}
</nav> -->
