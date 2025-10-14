<script lang="ts">
	let isOpen = $state(true);
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<div class="flex min-h-screen">
	<aside
		class="sidebar bg-background-light dark:bg-background-dark flex w-64 flex-col border-r border-gray-200 dark:border-gray-700"
		class:translate-x-0={isOpen}
		class:-translate-x-full={!isOpen}
	>
		<div class="flex items-center justify-between p-6">
			<h1 class="admin-title text-xl font-bold text-gray-900 dark:text-white">Admin Panel</h1>
		</div>
		<nav class="flex-1 space-y-2 px-4 py-2">
			<a
				class="hover:bg-primary/10 dark:hover:bg-primary/20 nav-item flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300"
				href="/"
			>
				<span class="material-symbols-outlined">dashboard</span>
				<span class="nav-text text-sm font-medium">Dashboard</span>
			</a>
			<a
				class="bg-primary/10 dark:bg-primary/20 text-primary nav-item flex items-center gap-3 rounded-lg px-3 py-2"
				href="/"
			>
				<span class="material-symbols-outlined">inventory_2</span>
				<span class="nav-text text-sm font-medium">Products</span>
			</a>
			<a
				class="hover:bg-primary/10 dark:hover:bg-primary/20 nav-item flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300"
				href="/"
			>
				<span class="material-symbols-outlined">receipt_long</span>
				<span class="nav-text text-sm font-medium">Orders</span>
			</a>
			<a
				class="hover:bg-primary/10 dark:hover:bg-primary/20 nav-item flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300"
				href="/"
			>
				<span class="material-symbols-outlined">group</span>
				<span class="nav-text text-sm font-medium">Customers</span>
			</a>
			<a
				class="hover:bg-primary/10 dark:hover:bg-primary/20 nav-item flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300"
				href="/"
			>
				<span class="material-symbols-outlined">settings</span>
				<span class="nav-text text-sm font-medium">Settings</span>
			</a>
		</nav>
		<div class="p-4">
			<button
				onclick={() => (isOpen = !isOpen)}
				class="hover:bg-primary/10 dark:hover:bg-primary/20 toggle-button flex w-full items-center gap-3 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300"
			>
				<span
					class:rotate-180={isOpen}
					class="material-symbols-outlined transition-transform duration-300">chevron_left</span
				>
				<span class="nav-text text-sm font-medium">Collapse</span>
			</button>
		</div>
	</aside>
	<main class="flex-1 p-8">
		<div class="mb-8 flex items-center justify-between">
			<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Products</h2>
			<button
				class="bg-primary flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white"
			>
				<span class="material-symbols-outlined">add</span>
				Add Product
			</button>
		</div>
		<div class="mb-6">
			<div class="relative">
				<span
					class="material-symbols-outlined absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
					>search</span
				>
				<input
					class="focus:ring-primary w-full rounded-lg border border-gray-200 bg-white py-2 pr-4 pl-10 focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800"
					placeholder="Search products..."
					type="text"
				/>
			</div>
		</div>
		<div class="mb-6 flex gap-2">
			<button class="bg-primary/20 text-primary rounded-full px-4 py-2 text-sm font-medium"
				>All</button
			>
			<button
				class="hover:bg-primary/10 dark:hover:bg-primary/20 rounded-full px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400"
				>Active</button
			>
			<button
				class="hover:bg-primary/10 dark:hover:bg-primary/20 rounded-full px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400"
				>Inactive</button
			>
		</div>
		<div
			class="overflow-x-auto rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
		>
			<table class="w-full text-left text-sm">
				<thead
					class="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-300"
				>
					<tr>
						<th class="px-6 py-3" scope="col">Product</th>
						<th class="px-6 py-3" scope="col">Category</th>
						<th class="px-6 py-3" scope="col">Price</th>
						<th class="px-6 py-3" scope="col">Stock</th>
						<th class="px-6 py-3" scope="col">Status</th>
						<th class="px-6 py-3" scope="col">Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-b dark:border-gray-700">
						<td
							class="flex items-center gap-3 px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white"
						>
							<img alt="Desk Lamp" class="h-10 w-10 rounded-full" src="" />
							Minimalist Desk Lamp
						</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-400">Lighting</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-400">$49.99</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-400">150</td>
						<td class="px-6 py-4">
							<span
								class="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300"
								>Active</span
							>
						</td>
						<td class="px-6 py-4">
							<a class="text-primary font-medium hover:underline" href="/">Edit</a>
						</td>
					</tr>
					<tr class="border-b dark:border-gray-700">
						<td
							class="flex items-center gap-3 px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white"
						>
							<img alt="Office Chair" class="h-10 w-10 rounded-full" src="" />
							Ergonomic Office Chair
						</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-400">Furniture</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-400">$199.99</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-400">75</td>
						<td class="px-6 py-4">
							<span
								class="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300"
								>Active</span
							>
						</td>
						<td class="px-6 py-4">
							<a class="text-primary font-medium hover:underline" href="/">Edit</a>
						</td>
					</tr>
					<tr class="border-b dark:border-gray-700">
						<td
							class="flex items-center gap-3 px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white"
						>
							<img alt="Wireless Keyboard" class="h-10 w-10 rounded-full" src="" />
							Wireless Keyboard
						</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-400">Electronics</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-400">$79.99</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-400">200</td>
						<td class="px-6 py-4">
							<span
								class="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300"
								>Active</span
							>
						</td>
						<td class="px-6 py-4">
							<a class="text-primary font-medium hover:underline" href="/">Edit</a>
						</td>
					</tr>
					<tr class="border-b dark:border-gray-700">
						<td
							class="flex items-center gap-3 px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white"
						>
							<img alt="Monitor Stand" class="h-10 w-10 rounded-full" src="" />
							Adjustable Monitor Stand
						</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-400">Accessories</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-400">$39.99</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-400">100</td>
						<td class="px-6 py-4">
							<span
								class="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300"
								>Inactive</span
							>
						</td>
						<td class="px-6 py-4">
							<a class="text-primary font-medium hover:underline" href="/">Edit</a>
						</td>
					</tr>
					<tr>
						<td
							class="flex items-center gap-3 px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white"
						>
							<img alt="Headphones" class="h-10 w-10 rounded-full" src="" />
							Noise-Canceling Headphones
						</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-400">Electronics</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-400">$129.99</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-400">50</td>
						<td class="px-6 py-4">
							<span
								class="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300"
								>Active</span
							>
						</td>
						<td class="px-6 py-4">
							<a class="text-primary font-medium hover:underline" href="/">Edit</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</main>
</div>

<div>
	{render(children?.())}
</div>
