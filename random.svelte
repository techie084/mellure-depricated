<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { Search, Heart, ShoppingCart } from 'lucide-svelte';

	// placeholder product data — replace with real fetch by slug/ID
	const product = {
		id: 1,
		title: 'Oversized Texturized Nude',
		category: 'Co-ords',
		price: 5000,
		currency: '$',
		images: [
			'https://images.unsplash.com/photo-1520975910432-5d9ae3d4a9b7?q=80&w=1200&auto=format&fit=crop',
			'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop',
			'https://images.unsplash.com/photo-1520975910432-5d9ae3d4a9b7?q=80&w=1200&auto=format&fit=crop'
		],
		rating: 4.5,
		reviews: [
			{
				id: 1,
				name: 'John Doe',
				date: '20/1/25',
				rating: 4,
				text: 'The checkout was quick, and my order arrived right on time.'
			},
			{
				id: 2,
				name: 'Angelina Julie',
				date: '20/1/25',
				rating: 4,
				text: 'Great fit and quality — shopping here feels effortless.'
			}
		],
		related: [
			{
				id: 3,
				title: 'Silk Dress',
				price: 20000,
				img: 'https://images.unsplash.com/photo-1520975910432-5d9ae3d4a9b7?q=80&w=800&auto=format&fit=crop'
			},
			{
				id: 4,
				title: 'Basic Tank top',
				price: 20000,
				img: 'https://images.unsplash.com/photo-1544017903-2b5b0f3f5a3a?q=80&w=800&auto=format&fit=crop'
			},
			{
				id: 5,
				title: 'Face cap',
				price: 20000,
				img: 'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=800&auto=format&fit=crop'
			}
		]
	};

	// UI state
	const currentIndex = writable(0);
	let qty = 1;
	let selectedColor = 'Red';
	let selectedSize = 'XL';

	function formatPrice(value: number) {
		// if price is cents
		if (value > 1000) return `$${(value / 100).toFixed(2)}`;
		return `${product.currency}${(value / 100).toFixed(2)}`;
	}

	function selectImage(i: number) {
		currentIndex.set(i);
	}

	function addToCart() {
		// replace with real cart logic
		alert(`Added ${qty} x ${product.title} (${selectedSize}, ${selectedColor}) to cart`);
	}

	// small mount effect
	onMount(() => {
		currentIndex.set(0);
	});
</script>

<section class="mx-auto max-w-6xl p-8">
	<!-- Top nav (minimal) -->
	<nav class="mb-8 flex items-center justify-between">
		<div class="text-xl font-bold"><a href="/">LOGO</a></div>
		<ul class="flex gap-6 text-sm text-gray-600">
			<li><a href="/shop" class="hover:text-primary transition-colors">Shop</a></li>
			<li><a href="/about" class="hover:text-primary transition-colors">About Us</a></li>
			<li><a href="/contact" class="hover:text-primary transition-colors">Contact</a></li>
		</ul>
		<div class="flex items-center gap-4 text-gray-600">
			<button
				aria-label="search"
				on:click={() => (window.location.href = '/search')}
				class="hover:text-primary transition-colors"><Search size={20} /></button
			>
			<button
				aria-label="wishlist"
				on:click={() => (window.location.href = '/wishlist')}
				class="hover:text-primary transition-colors"><Heart size={20} /></button
			>
			<button
				aria-label="cart"
				on:click={() => (window.location.href = '/cart')}
				class="hover:text-primary flex items-center transition-colors"
				><ShoppingCart size={20} /><span class="ml-1 text-red-500">0</span></button
			>
		</div>
	</nav>

	<!-- Product area -->
	<div class="grid grid-cols-1 gap-10 lg:grid-cols-12">
		<!-- Left gallery -->
		<div class="lg:col-span-7">
			<div class="rounded-2xl bg-[#F6F0E6] p-6">
				<!-- main image -->
				<div class="mb-4 overflow-hidden rounded-xl">
					<img
						src={product.images[$currentIndex]}
						alt={product.title}
						class="h-[520px] w-full rounded-lg object-cover"
					/>
				</div>

				<!-- thumbnails -->
				<div class="flex gap-3">
					{#each product.images as img, i}
						<button
							on:click={() => selectImage(i)}
							class="h-24 w-24 overflow-hidden rounded-lg border bg-white p-1 transition hover:scale-105"
						>
							<img src={img} alt="thumb" class="h-full w-full object-cover" />
						</button>
					{/each}
				</div>
			</div>
		</div>

		<!-- Right details -->
		<div class="lg:col-span-5">
			<div class="space-y-4">
				<div class="flex items-center gap-3">
					<span class="rounded-full bg-neutral-100 px-3 py-1 text-xs text-gray-700"
						>Men Fashion</span
					>
				</div>

				<h1 class="text-2xl font-bold">{product.title}</h1>
				<p class="text-sm text-gray-500">IN STOCK</p>

				<div class="flex items-center gap-4">
					<div class="text-2xl font-semibold">{formatPrice(product.price)}</div>
					<div class="text-sm text-gray-400">
						({product.rating} ★) · {product.reviews.length} Reviews
					</div>
				</div>

				<div class="border-t pt-4">
					<div class="mb-2 text-sm text-gray-600">
						Category: <span class="font-medium text-gray-800">{product.category}</span>
					</div>

					<div class="grid grid-cols-3 items-center gap-3">
						<div>
							<label class="mb-1 block text-xs text-gray-500">Color</label>
							<select bind:value={selectedColor} class="w-full rounded border px-3 py-2 text-sm">
								<option>Red</option>
								<option>Beige</option>
								<option>Black</option>
							</select>
						</div>

						<div>
							<label class="mb-1 block text-xs text-gray-500">Size</label>
							<select bind:value={selectedSize} class="w-full rounded border px-3 py-2 text-sm">
								<option>XS</option>
								<option>S</option>
								<option>M</option>
								<option>XL</option>
							</select>
						</div>

						<div>
							<label for="qty-input" class="mb-1 block text-xs text-gray-500">Qty</label>
							<input
								id="qty-input"
								type="number"
								min="1"
								bind:value={qty}
								class="w-full rounded border px-3 py-2 text-sm"
							/>
						</div>
					</div>

					<div class="mt-4 flex items-center gap-3">
						<button
							on:click={addToCart}
							class="flex-1 rounded-full bg-[#A96F4A] py-3 text-white transition hover:shadow-lg"
							>Add to Cart</button
						>
						<button class="flex h-12 w-12 items-center justify-center rounded-full border">♡</button
						>
					</div>
				</div>

				<div class="pt-6">
					<h3 class="text-lg font-semibold">Description</h3>
					<p class="mt-2 leading-relaxed text-gray-600">
						Designed for the modern man, this oversized texturized nude shirt delivers a perfect
						balance of style and ease. The relaxed fit and subtle textured fabric create a laid-back
						yet refined look. Ideal for both casual outings and smart-casual settings.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Reviews -->
	<section class="mt-12">
		<h2 class="mb-6 text-xl font-semibold">Reviews</h2>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			{#each product.reviews as r}
				<article class="rounded-lg border bg-white p-6">
					<div class="mb-3 flex items-center justify-between">
						<div class="flex items-center gap-3">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 font-medium text-gray-600"
							>
								{r.name
									.split(' ')
									.map((n) => n[0])
									.join('')}
							</div>
							<div>
								<div class="font-medium">{r.name}</div>
								<div class="text-xs text-gray-400">{r.date}</div>
							</div>
						</div>
						<div class="text-sm text-yellow-500">
							{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
						</div>
					</div>
					<p class="text-sm text-gray-600">{r.text}</p>
				</article>
			{/each}
		</div>
	</section>

	<!-- Related -->
	<section class="mt-12">
		<h2 class="mb-6 text-xl font-semibold">Related Products</h2>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
			{#each product.related as rp}
				<div class="group overflow-hidden rounded-lg bg-white shadow">
					<div class="relative">
						<img
							src={rp.img}
							alt={rp.title}
							class="h-56 w-full object-cover transition-transform group-hover:scale-105"
						/>
						<div class="absolute inset-x-0 bottom-0 flex justify-center">
							<button class="bg-opacity-80 -translate-y-4 rounded bg-black px-4 py-2 text-white"
								>Quick Add</button
							>
						</div>
					</div>
					<div class="p-4 text-center">
						<div class="font-medium">{rp.title}</div>
						<div class="text-sm text-gray-400">${rp.price.toLocaleString()}</div>
						<div class="mt-2 text-xs text-gray-400">4 colors</div>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Footer -->
	<footer class="mt-16 rounded-2xl bg-[#A96F4A] p-8 text-white">
		<div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-4">
			<div>
				<div class="mb-3 text-lg font-bold"><a href="/">LOGO</a></div>
				<p class="text-sm">Sign up for our newsletter</p>
				<div class="mt-3 flex gap-2">
					<input
						placeholder="Enter email address"
						class="w-full rounded-full px-3 py-2 text-black md:w-auto"
					/>
					<button
						class="hover:bg-opacity-80 rounded-full bg-black px-4 py-2 transition"
						on:click={() => (window.location.href = '/subscribe')}>Subscribe</button
					>
				</div>
			</div>

			<div class="text-sm">
				<div class="mb-2 font-semibold">Useful Link</div>
				<ul class="space-y-1">
					<li><a href="/" class="hover:underline">Home</a></li>
					<li><a href="/about" class="hover:underline">About</a></li>
					<li><a href="/faq" class="hover:underline">FAQ</a></li>
				</ul>
			</div>

			<div class="text-sm">
				<div class="mb-2 font-semibold">Shop</div>
				<ul class="space-y-1">
					<li><a href="/furniture" class="hover:underline">Furniture</a></li>
					<li><a href="/dining" class="hover:underline">Dining</a></li>
					<li><a href="/lighting" class="hover:underline">Lighting</a></li>
				</ul>
			</div>

			<div class="text-sm">
				<div class="mb-2 font-semibold">Need Help?</div>
				<ul class="space-y-1">
					<li><a href="/chat" class="hover:underline">Chat with us</a></li>
					<li><a href="/help" class="hover:underline">Help center</a></li>
					<li><a href="/contact" class="hover:underline">Contact Us</a></li>
				</ul>
			</div>
		</div>

		<div class="mt-8 border-t border-black/20 pt-6 text-center text-sm text-white/80">
			© 2025 All Right Reserved — Terms and Condition
		</div>
	</footer>
</section>

<style>
	/* small customizations to match the look */
	:global(body) {
		font-family:
			Inter,
			ui-sans-serif,
			system-ui,
			-apple-system,
			'Segoe UI',
			Roboto,
			'Helvetica Neue',
			Arial;
		background-color: #fbf7f3;
	}
</style>
