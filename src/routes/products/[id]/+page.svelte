<script lang="ts">
	// import SEO from '$lib/components/shared/seo.svelte';
	// import { generateSEO } from '$lib/utils/seo';
	import type { PageData } from './$types';

	export let data: PageData;

	const { product } = data;

	// const seo = generateSEO({
	// 	title: product.name,
	// 	description: product.description || `Buy ${product.name} for $${product.price}`,
	// 	url: `https://yoursite.com/products/${product.id}`,
	// 	image: product.imageUrl || undefined,
	// 	type: 'product',
	// 	keywords: [product.category, product.brand, product.name].filter(Boolean),
	// 	product: {
	// 		price: product.price,
	// 		currency: 'USD',
	// 		availability: product.stock > 0 ? 'in stock' : 'out of stock',
	// 		brand: product.brand || undefined
	// 	}
	// });
</script>

<!-- <SEO config={seo} /> -->

<div class="product-page">
	<h1>{product.name}</h1>
	<p>${product.price}</p>
</div>
