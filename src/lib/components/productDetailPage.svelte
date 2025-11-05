<div id="product-detail-page" class="page-content bg-background hidden min-h-screen">
	<div class="bg-background/95 sticky top-0 z-40 border-b backdrop-blur">
		<div class="container mx-auto px-4 py-4">
			<button
				id="product-back-btn"
				class="hover:bg-accent flex h-10 w-10 items-center justify-center rounded-md transition-colors"
			>
				<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</button>
		</div>
	</div>

	<div class="container mx-auto px-4 py-8 md:py-12">
		<div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:gap-12">
			<!-- Image -->
			<div
				id="product-image-container"
				class="bg-secondary aspect-square overflow-hidden rounded-lg"
			>
				<img id="product-detail-image" src="" alt="" class="h-full w-full object-cover" />
			</div>

			<!-- Details -->
			<div class="space-y-6">
				<div>
					<span
						id="product-detail-category"
						class="border-input mb-3 inline-block rounded-full border px-2.5 py-0.5 text-xs"
					></span>
					<h1 id="product-detail-name" class="mb-3 text-3xl md:text-4xl"></h1>
					<p id="product-detail-price" class="text-2xl md:text-3xl"></p>
				</div>

				<span
					id="product-detail-stock"
					class="bg-destructive text-destructive-foreground hidden inline-block rounded-full px-2.5 py-0.5 text-xs"
					>Out of Stock</span
				>

				<p id="product-detail-description" class="text-muted-foreground leading-relaxed"></p>

				<div class="space-y-4">
					<div>
						<h3 class="mb-3 text-sm">Features</h3>
						<ul class="space-y-2">
							<li class="text-muted-foreground flex items-center gap-2 text-sm">
								<svg
									class="text-primary h-4 w-4 flex-shrink-0"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
								Premium quality materials
							</li>
							<li class="text-muted-foreground flex items-center gap-2 text-sm">
								<svg
									class="text-primary h-4 w-4 flex-shrink-0"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
								UV protection included
							</li>
							<li class="text-muted-foreground flex items-center gap-2 text-sm">
								<svg
									class="text-primary h-4 w-4 flex-shrink-0"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
								Adjustable nose pads
							</li>
							<li class="text-muted-foreground flex items-center gap-2 text-sm">
								<svg
									class="text-primary h-4 w-4 flex-shrink-0"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
								Durable frame construction
							</li>
							<li class="text-muted-foreground flex items-center gap-2 text-sm">
								<svg
									class="text-primary h-4 w-4 flex-shrink-0"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
								Lightweight design
							</li>
							<li class="text-muted-foreground flex items-center gap-2 text-sm">
								<svg
									class="text-primary h-4 w-4 flex-shrink-0"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
								Scratch-resistant lenses
							</li>
						</ul>
					</div>

					<div>
						<h3 class="mb-3 text-sm">Specifications</h3>
						<dl class="space-y-2 text-sm">
							<div class="flex justify-between">
								<dt class="text-muted-foreground">Frame Material</dt>
								<dd>Acetate</dd>
							</div>
							<div class="flex justify-between">
								<dt class="text-muted-foreground">Lens Material</dt>
								<dd>Polycarbonate</dd>
							</div>
							<div class="flex justify-between">
								<dt class="text-muted-foreground">Frame Width</dt>
								<dd>140mm</dd>
							</div>
							<div class="flex justify-between">
								<dt class="text-muted-foreground">Lens Width</dt>
								<dd>52mm</dd>
							</div>
						</dl>
					</div>
				</div>

				<div class="space-y-3 pt-6">
					<button
						id="product-add-to-cart"
						class="bg-primary text-primary-foreground hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 transition-colors"
					>
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
						<span id="product-add-to-cart-text">Add to Cart</span>
					</button>
					<p class="text-muted-foreground text-center text-xs">
						Free shipping on orders over $100 · 30-day returns
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
