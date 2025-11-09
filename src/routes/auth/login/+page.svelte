<script>
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
</script>

<!-- Login Page -->

<form  method="post">
	<button
		class="flex h-8 max-h-screen w-full items-center justify-center gap-2 rounded-2xl bg-accent/80 p-3 px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent/90"
		onclick={() => {
			signIn.social({ provider: 'google' });
		}}><img src="/GoogleLogo.png" alt="Google logo" class="h-5 w-5" /> Sign in with Google</button
	>
</form>
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
