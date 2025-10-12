<script lang="ts">
	import { toast } from 'svoast';
	import { Search, ShoppingCartIcon, UserRound } from 'lucide-svelte';
	import { writable, derived } from 'svelte/store';

	interface Product {
		id: number;
		name: string;
		description: string;
		price: string;
	}

	const product = writable<Product[]>([
		{
			id: 1,
			name: 'The Contour Chair',
			description: 'Sleek design for modern living',
			price: '$299'
		},
		{
			id: 2,
			name: 'The Essence Table',
			description: 'Perfect for any dining space',
			price: '$499'
		},
		{
			id: 3,
			name: 'The Lumina Floor Lamp',
			description: 'Illuminate your room with style',
			price: '$199'
		}
	]);

	const query = writable<string>('');

	// const filterProducts = derived(product, query, ([$product, $query]) => {
	// 	$product.filter(
	// 		(p) =>
	// 			p.name.toLowerCase().includes($query.toLowerCase()) ||
	// 			p.description.toLowerCase().includes($query.toLowerCase())
	// 	);
	// });

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
				>
					<input
						type="search"
						name="Search"
						class="border-rounded hidden bg-transparent outline-none"
					/>
					<Search />
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
