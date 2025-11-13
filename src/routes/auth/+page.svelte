<!-- <script>
	import { signIn } from '$lib/auth-client';

	const handleLogin = async (event) => {
		event.preventDefault();

		const email = event.target.email.value;
		const password = event.target.password.value;

		const { user, error } = await authClient.login({ email, password });

		if (error) {
			console.error('Login failed:', error);
		} else {
			console.log('Login successful:', user);
		}
	};
</script> -->

<!-- Login Page -->
<script>
	import { signIn } from '$lib/auth-client';
	import { goto } from '$app/navigation';

	let email = $state('');
	let password = $state('');
	let error = $state('');
	let loading = $state(false);

	async function handleEmailLogin() {
		loading = true;
		error = '';

		try {
			await signIn.email(
				{
					email,
					password
				},
				{
					onSuccess: () => {
						goto('/dashboard');
					},
					onError: (ctx) => {
						error = ctx.error.message || 'Login failed';
					}
				}
			);
		} finally {
			loading = false;
		}
	}

	async function handleGoogleLogin() {
		await signIn.social({
			provider: 'google',
			callbackURL: '/'
		});
	}
</script>

<div class="mx-auto max-w-md p-8">
	<h1 class="mb-6 text-3xl font-bold">Login</h1>

	{#if error}
		<div class="mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
			{error}
		</div>
	{/if}

	<form
		onsubmit={(e) => {
			e.preventDefault();
			handleEmailLogin();
		}}
		class="space-y-4"
	>
		<div>
			<label for="email" class="mb-2 block font-medium">Email</label>
			<input type="email" bind:value={email} class="w-full rounded-lg border px-4 py-2" required />
		</div>

		<div>
			<label for="password" class="mb-2 block font-medium">Password</label>
			<input
				type="password"
				bind:value={password}
				class="w-full rounded-lg border px-4 py-2"
				required
			/>
		</div>

		<button
			type="submit"
			disabled={loading}
			class="w-full rounded-lg bg-black py-3 text-white hover:bg-gray-800 disabled:opacity-50"
		>
			{loading ? 'Loading...' : 'Login'}
		</button>
	</form>

	<div class="my-6 text-center text-gray-500">OR</div>

	<button
		onclick={handleGoogleLogin}
		class="w-full rounded-lg border-2 border-black py-3 hover:bg-gray-100"
	>
		<img src="/google.svg" alt="Google logo" class="h-5 w-5 inline-block mr-2" />
		Login with Google
	</button>

	<p class="mt-4 text-center text-sm">
		Don't have an account? <a href="/register" class="underline">Register</a>
	</p>
</div>

<!-- <form method="post">
	<button
		class="flex h-8 max-h-screen w-full items-center justify-center gap-2 rounded-2xl bg-accent/80 p-3 px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent/90"
		onclick={() => {
			signIn.social({ provider: 'google' });
		}}><img src="/GoogleLogo.png" alt="Google logo" class="h-5 w-5" /> Sign in with Google</button
	>
</form> -->
<!-- <div id="login-page" class="page-content flex items-center justify-center bg-secondary/30 p-4">
	<div class="w-full max-w-md">
		<div class="mb-8 text-center">
			<button id="login-logo-btn" class="mb-4 inline-block">
				<h1 class="text-2xl font-bold">Mellure</h1>
			</button>
			<p class="text-muted-foreground">Premium eye-wear for the modern individual</p>
		</div>

		<div class="rounded-lg border bg-background shadow-sm">
			<div class="border-b p-6">
				<h2 id="login-title" class="text-xl">Welcome back</h2>
				<p id="login-description" class="mt-1 text-sm text-muted-foreground">
					Sign in to your account to continue
				</p>
			</div>
			<div class="p-6">
				<form id="auth-form" class="space-y-4">
					<div id="name-field" class="hidden space-y-2">
						<label for="name-input" class="text-sm">Full name</label>
						<input
							id="name-input"
							type="text"
							placeholder="John Doe"
							class="w-full rounded-md border border-input bg-background px-3 py-2"
						/>
					</div>

					<div class="space-y-2">
						<label for="email-input" class="text-sm">Email</label>
						<input
							id="email-input"
							type="email"
							placeholder="you@example.com"
							required
							class="w-full rounded-md border border-input bg-background px-3 py-2"
						/>
					</div>

					<div class="space-y-2">
						<label for="password-input" class="text-sm">Password</label>
						<input
							id="password-input"
							type="password"
							placeholder="Password"
							required
							class="w-full rounded-md border border-input bg-background px-3 py-2"
						/>
					</div>

					<button
						type="submit"
						class="w-full rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
					>
						<span id="auth-submit-text">Sign in</span>
					</button>
				</form>

				<div class="mt-6 text-center text-sm">
					<button id="toggle-auth-mode" class="text-primary hover:underline">
						Don't have an account? Sign up
					</button>
				</div>

				<div class="mt-4 text-center">
					<button
						id="guest-continue-btn"
						class="text-sm text-muted-foreground hover:text-foreground"
					>
						Continue as guest
					</button>
				</div>
			</div>
		</div>
	</div>
</div> -->
