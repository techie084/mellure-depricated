<script lang="ts">
</script>

<!-- Account Page -->
<div id="account-page" class="page-content hidden min-h-screen bg-secondary/30">
	<div class="border-b bg-background/95 backdrop-blur">
		<div class="container mx-auto px-4 py-4">
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-4">
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<button
						id="account-back-btn"
						class="flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-accent"
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
					<div>
						<h1 class="text-xl">My Account</h1>
						<p id="account-email" class="text-sm text-muted-foreground"></p>
					</div>
				</div>
				<button
					id="logout-btn"
					class="flex items-center gap-2 rounded-md border border-input px-3 py-1.5 text-sm transition-colors hover:bg-accent"
				>
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
						/>
					</svg>
					Sign out
				</button>
			</div>
		</div>
	</div>

	<div class="container mx-auto max-w-4xl px-4 py-8">
		<div class="space-y-6">
			<!-- Profile Card -->
			<div class="rounded-lg border bg-background">
				<div class="p-6">
					<div class="flex items-center gap-3">
						<div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
							<svg
								class="h-6 w-6 text-primary"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
						</div>
						<div>
							<h3 id="account-name">Mellure</h3>
							<p id="account-email-2" class="text-sm text-muted-foreground"></p>
						</div>
					</div>
				</div>
			</div>

			<!-- Orders Section -->
			<div class="rounded-lg border bg-background">
				<div class="border-b p-6">
					<div class="flex items-center gap-2">
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
							/>
						</svg>
						<h3>Order History</h3>
					</div>
					<p id="orders-count" class="mt-1 text-sm text-muted-foreground">0 orders placed</p>
				</div>
				<div id="orders-container" class="p-6"></div>
			</div>
		</div>
	</div>
</div>
