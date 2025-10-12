<script lang="ts">
	let { data } = $props();
</script>

<div class="flex min-h-screen bg-gray-100">
	<!-- Sidebar -->
	<aside class="hidden w-60 flex-col bg-white p-4 shadow-md md:flex">
		<h2 class="mb-6 text-2xl font-bold text-indigo-600">Admin</h2>
		<nav class="space-y-2">
			<a href="/admin" class="block rounded px-3 py-2 hover:bg-indigo-100">Dashboard</a>
			<a href="/admin/products" class="block rounded px-3 py-2 hover:bg-indigo-100">Products</a>
			<a href="/admin/add" class="block rounded px-3 py-2 hover:bg-indigo-100">Add Product</a>
		</nav>
	</aside>

	<!-- Main Content -->
	<main class="flex-1 overflow-y-auto p-6">
		<!-- <slot /> -->
	</main>
</div>
