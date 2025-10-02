<script>
	import Header from '$lib/components/header.svelte';
</script>

<Header />

<main class="container mx-auto flex-grow px-4 py-8 sm:px-6 lg:px-8">
	<div class="mb-12">
		<div
			class="relative flex min-h-[400px] items-end rounded-lg bg-cover bg-center p-8"
			style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGoONvUKPltSIlstqF6uTtlw3PmRdCfp1Fxax43H8l_UYVYH5XMTCb8Z89ws-ZatxFCBmPDAI91uxUwFw57IM7Y3SglpFFLx13k5GlUSMixs2T8wIHPD3jgeo84irDdhaHDbTXSWIEd_VudzOemGQQFy0H2vtTuNYQBTv-6ompm_qil5bU-jdRY-lLE2B55MNDh6OFJIJQsR3iuLJRZYJyI6TsITJXSJyPuv2liP9zNei__ICvFN6I_2EW-VUJjutX8JOrZDvuPLc')"
		>
			<div class="max-w-md">
				<h2 class="text-4xl font-extrabold text-white">Discover the Latest Collection</h2>
				<button
					class="bg-primary hover:bg-opacity-90 mt-4 rounded px-6 py-3 text-lg font-semibold text-white transition-all"
					>Shop Now</button
				>
			</div>
		</div>
	</div>
	<section class="mb-12">
		<h3 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Featured Products</h3>
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			<div class="group">
				<div class="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
					<img
						alt="Contour Chair"
						class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuByo2q8GXbsqCW93AU6mS4SzCodHXkxqBfC8mtjBvnrUaXh2GOzTsOdiPiIXA4fOVO9U2nRJbLmvXIZKiq0wwaDCv9uKtyvw8Rq_rhFmjaXgwMeiRjp0en-ukjsCZ4C278MPUlSpLA4FplU4QW3zf9YmhC0vrmsJD67f3b1Di9E8ubng3nZBz5femCQKHVhyKhRxnKGI59cYCQMFgFgJIWqnjnkrhqsobZb2Ta5bYJPDq5h-0YXB4uve-wo7qaXJLkP0AnlJaowrmE"
					/>
				</div>
				<div class="mt-4">
					<h4 class="text-base font-medium text-gray-900 dark:text-white">The Contour Chair</h4>
					<p class="text-sm text-gray-500 dark:text-gray-400">Sleek design for modern living</p>
				</div>
			</div>
			<div class="group">
				<div class="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
					<img
						alt="Essence Table"
						class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8J78mqv2xOuxFf8qrxJFrq5e9j3reUKdOxkieHsz2CtHcI856DNrZZgjEB6EET7eIEi5nYgTdKVNdqMLaSteArKSaM3lOF4_Qmofuy4llXlmuRXQDaLEnIdiKYryZ_VzjW6YAZh-aJDLITdCoTmDsCp6K3FSwQvwKtTNhHQrWYERxbLv5b5nYHsuo5zTH47XDw9kCvr7sNS8RspMtAgDIT9jMNWC9TMH9f9jBE3lkb_PzR9pKAM5UObqg0dd83U0CHhMeE1udMVs"
					/>
				</div>
				<div class="mt-4">
					<h4 class="text-base font-medium text-gray-900 dark:text-white">The Essence Table</h4>
					<p class="text-sm text-gray-500 dark:text-gray-400">Perfect for any dining space</p>
				</div>
			</div>
			<div class="group">
				<div class="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
					<img
						alt="Lumina Floor Lamp"
						class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbdpWa_6WwvDdJW2haWRAl50U46MM-K5uS-l7E223adTE6mRHYMpi40vayfH040eETmtEZqtP7gL6R2LOMjisF9sRf9wf1JMi5MUEdoGiAlJTD8KSWoQAgsiHp9JFpqpHqsH1LsvmugZvPsHjI1uGBlf3uA85VC5nfiJn435uddMK0PCQm08qE63e6g7hqb1IMVv1ewAp5lBZrxW9UwY9A23IN4v1sQOcFKnoHLkx6ZerqK55H5IOVo1RiNS_yF_JpL6DA443AsYc"
					/>
				</div>
				<div class="mt-4">
					<h4 class="text-base font-medium text-gray-900 dark:text-white">The Lumina Floor Lamp</h4>
					<p class="text-sm text-gray-500 dark:text-gray-400">Ambient lighting for your home</p>
				</div>
			</div>
			<div class="group">
				<div class="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
					<img
						alt="Office Chair"
						class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_NgYniEvkJ5DQqsGhfuJlBm8YGVphuWTxTPSYa-Z6wGR512n4imbyurjxTGJRmGYwEE2qWiBpznRxxadQl_YUqk9bXasv0hTZ2nBMRNSNQOJ1VtxiiYIo4yPo0n-pDc7kfqY2X9OKn8LCfrxWTaUFd1gDpS7SS8O7sxCVAMU2ebIb3Up-IynDYoD2LCkr9iaJTdF7IgSOnUMfxK02q1z3WpnXntOlwVrA53yFLBdz_hvfcTZHlYdpFwQLEXOsW0fK8Jk96-4lHHg"
					/>
				</div>
				<div class="mt-4">
					<h4 class="text-base font-medium text-gray-900 dark:text-white">The Ergonomic Chair</h4>
					<p class="text-sm text-gray-500 dark:text-gray-400">For your modern office</p>
				</div>
			</div>
		</div>
	</section>
	<section>
		<h3 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Shop by Category</h3>
		<div class="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
			<div class="group aspect-w-1 aspect-h-1 relative">
				<img
					alt="Living Room"
					class="h-full w-full rounded-lg object-cover"
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTuJhndS4klwD0AcMZIW9E4vX4HaQv0jPwsXfu9PRAd-0rT7ikouiTEBlBkiQWN3tt2W8RuVivKKA2Zk2zekABcwvmzYSuka3nmi4UtFkZB5qnCLfcPpiGrgbEbNtsHWhUtj9-TBt8amt4Xp5hQUtakIekWWLB8yl6z6xSuKhCMrBKO0-yd1jh_YUR-lcarEhNRy5JHAunjxZY8DvKnFePpPZUk7CYSjJZbcDEklY6mvPDc-UdBL-yynf-UlJlYyXXkQ24EM9oBtU"
				/>
				<div
					class="bg-opacity-20 group-hover:bg-opacity-40 absolute inset-0 flex items-center justify-center rounded-lg bg-black transition-all"
				>
					<h4 class="text-xl font-bold text-white">Living Room</h4>
				</div>
			</div>
			<div class="group aspect-w-1 aspect-h-1 relative">
				<img
					alt="Bedroom"
					class="h-full w-full rounded-lg object-cover"
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuDecwDCTZnRNFx1umMXm-sroDPcqG23Z4fdHAjDSh4MDxQWHHT4pGgGFhVlykhVSrfzn7-dBH9tUVwihtu5H-Kz8f2NFzSp_3TLLRWygzcdjMJ9Sn2Olad4Eb2n3vCrYRvVH-3EMco4mTIWIB0GOAe1MVYGjkPvL-9wM1IlRE4yBBy2_zEf0R3TpnuXjlyz8cTqTsWfHXXXkp8VyxCBwS1ih5ThV9bWLyvbfF0g9caHwOc_7IxgrxpoxKtC8SIkQl3Qog2-tWwQAcg"
				/>
				<div
					class="bg-opacity-20 group-hover:bg-opacity-40 absolute inset-0 flex items-center justify-center rounded-lg bg-black transition-all"
				>
					<h4 class="text-xl font-bold text-white">Bedroom</h4>
				</div>
			</div>
			<div class="group aspect-w-1 aspect-h-1 relative">
				<img
					alt="Dining Room"
					class="h-full w-full rounded-lg object-cover"
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_hPRWLsoKb6iSQzDQKUJScHMc0eEfw-ysQRH4ybizZ4-LWqpi1-ToR5y9ltzbV4xxBp1lbt8E8vhRevld6qvTySUusBpqiLuj7ad6v6IOAIE0sQ28aWm0O6Ir75FPIZ3ptie0FFc_I8u7xfmyyMr4JeIPermwq4Z-GD3gTyJrSSlU_jv6PoEA0GXAobVeiOrNyL4vW9okJKAGJkCSAH7n_YF-p2kIuPerTHfja6915z7YmyZV1LzPG-71wdpjwo3j-s0g9TzTxiM"
				/>
				<div
					class="bg-opacity-20 group-hover:bg-opacity-40 absolute inset-0 flex items-center justify-center rounded-lg bg-black transition-all"
				>
					<h4 class="text-xl font-bold text-white">Dining Room</h4>
				</div>
			</div>
			<div class="group aspect-w-1 aspect-h-1 relative">
				<img
					alt="Office"
					class="h-full w-full rounded-lg object-cover"
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_NgYniEvkJ5DQqsGhfuJlBm8YGVphuWTxTPSYa-Z6wGR512n4imbyurjxTGJRmGYwEE2qWiBpznRxxadQl_YUqk9bXasv0hTZ2nBMRNSNQOJ1VtxiiYIo4yPo0n-pDc7kfqY2X9OKn8LCfrxWTaUFd1gDpS7SS8O7sxCVAMU2ebIb3Up-IynDYoD2LCkr9iaJTdF7IgSOnUMfxK02q1z3WpnXntOlwVrA53yFLBdz_hvfcTZHlYdpFwQLEXOsW0fK8Jk96-4lHHg"
				/>
				<div
					class="bg-opacity-20 group-hover:bg-opacity-40 absolute inset-0 flex items-center justify-center rounded-lg bg-black transition-all"
				>
					<h4 class="text-xl font-bold text-white">Office</h4>
				</div>
			</div>
		</div>
	</section>
</main>
