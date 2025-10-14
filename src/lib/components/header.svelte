<script lang="ts">
	import { toast } from 'svoast';
	import { Search, ShoppingCartIcon, UserRound } from 'lucide-svelte';
	import { searchQuery, filteredProducts } from '../stores/productSearch.svelte';

	async function launchToast() {
		toast.success('Search feature coming soon!');
	}

	const searchProducts = () => {
		launchToast();
	};
</script>

<header class="border-b border-gray-200 dark:border-gray-700/50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!--  -->
			<div class="flex items-center gap-4">
				<h1 class="text-xl font-bold text-gray-900 dark:text-white">MELLURE</h1>
			</div>

			<!--  -->
			<nav class="hidden items-center gap-8 md:flex">
				<a class="hover:text-primary text-sm font-medium transition-colors" href="/">New Arrivals</a
				>
				<a class="hover:text-primary text-sm font-medium transition-colors" href="/">Featured</a>
				<a class="hover:text-primary text-sm font-medium transition-colors" href="/">Sale</a>
			</nav>

			<!--  -->
			<div class="flex items-center gap-2">
				<button
					class="bg-primary/20 dark:bg-primary/30 text-primary hover:bg-primary/30 dark:hover:bg-primary/40 hidden items-center justify-center rounded px-4 py-2 text-sm font-medium transition-colors md:inline-flex"
					><UserRound /></button
				>
				<button
					class="cursor-pointer rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700/50"
					on:click={searchProducts}
					><span class="relative w-full max-w-sm">
						<input
							type="search"
							placeholder="Search products..."
							class="border-rounded bg-transparent outline-none"
							bind:value={$searchQuery}
						/>
						<Search class="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
					</span>
					<!-- <span class="material-symbols-outlined"> <Search /> </span> -->
				</button>
				<button
					class="rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700/50"
				>
					<span class="material-symbols-outlined"> <ShoppingCartIcon /> </span>
				</button>
			</div>
		</div>
	</div>
</header>
