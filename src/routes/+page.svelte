<script>
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import ProductCategory from '$lib/components/productCategory.svelte';
	import Product from '$lib/components/product.svelte';
	import FAQ from '$lib/components/faq.svelte';
	import SEO from '$lib/components/seo.svelte';
	import { generateSEO } from '$lib/utils/seo';

	const seo = generateSEO({
		title: 'Mellure',
		description: 'Welcome to our eCommerce store. Shop the latest products at great prices.',
		keywords: ['e-commerce', 'shopping', 'products'],
		type: 'website'
	});
	
	let faqItems = [
		{
			id: 'item-1',
			question: 'How long does shipping take?',
			answer:
				'Standard shipping takes 3-5 business days, depending on your location. Express shipping options are available at checkout for 1-2 business day delivery.'
		},
		{
			id: 'item-2',
			question: 'What payment methods do you accept?',
			answer:
				'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. For enterprise customers, we also offer invoicing options.'
		},
		{
			id: 'item-3',
			question: 'Can I change or cancel my order?',
			answer:
				'You can modify or cancel your order within 1 hour of placing it. After this window, please contact our customer support team who will assist you with any changes.'
		},
		{
			id: 'item-4',
			question: 'Do you ship internationally?',
			answer:
				"Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days. Additional customs fees may apply depending on your country's import regulations."
		},
		{
			id: 'item-5',
			question: 'What is your return policy?',
			answer:
				'We offer a 30-day return policy for most items. Products must be in original condition with tags attached. Some specialty items may have different return terms, which will be noted on the product page.'
		}
	];
</script>

<SEO config={seo} />

<Header />
<main class="container mx-auto flex-grow px-4 py-8 sm:px-6 lg:px-8">
	<div class="mb-12">
		<div
			class="relative flex min-h-[400px] items-end rounded-lg bg-cover bg-center p-8"
			style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url('/woman.png')"
		>
			<div class="max-w-md">
				<h2
					class="animate-fade-in bg-gradiient-to-b mt-8 -translate-y-4 text-4xl font-extrabold text-white"
				>
					Discover the Latest Collection
				</h2>

				<button
					class="bg-primary hover:bg-opacity-90 bg- mt-4 cursor-pointer rounded border px-6 py-3 text-lg font-semibold text-white transition-all"
					>Shop Now</button
				>
			</div>
		</div>
	</div>

	<!-- product -->
	<Product />

	<!-- Product Category -->
	<ProductCategory />

	<!-- FAQ  -->
	<FAQ />
</main>

<Footer />
