<script lang="ts">
	import NavBar from './navbar.svelte';

	// import { page } from '$app/state';
</script>

<header
	id="main-header"
	class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
>
	<div class="container mx-auto flex h-16 items-center justify-between px-4">
		<div class="flex items-center gap-6">
			<button id="logo-btn" class="transition-opacity hover:opacity-80">
				<h1 class="cursor-pointer text-xl">Mellure</h1>
			</button>
		</div>

		<div class="flex items-center gap-4">
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button
				id="account-btn"
				class="hidden h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-accent md:flex"
			>
				<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
					/>
				</svg>
			</button>
			<button
				id="cart-btn"
				class="relative hidden h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-accent md:flex"
			>
				<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
				<span
					id="cart-badge"
					class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary p-0 text-xs text-primary-foreground"
					>0</span
				>
			</button>
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<!-- <span
				id="mobile-menu-btn"
				class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-accent md:hidden"
			>
				<svg class="h-5 w-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</span> -->

			<NavBar />
		</div>
	</div>
</header>
