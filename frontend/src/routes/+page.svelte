<script>
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import GermanHeader from '$lib/components/GermanHeader.svelte';
	import CreatorShowcase from '$lib/components/CreatorShowcase.svelte';
	import FilamentVendors from '$lib/components/FilamentVendors.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let creators = $state([]);
	let loading = $state(true);
	let error = $state(null);

	onMount(async () => {
		try {
			const response = await fetch('data/creators.json');
			if (!response.ok) {
				throw new Error('Failed to load creators data');
			}
			const data = await response.json();
			creators = data.creators;
		} catch (err) {
			error = err.message;
			console.error('Error loading creators:', err);
		} finally {
			loading = false;
		}
	});
</script>

<svelte:head>
	<title>German Melting - Deutsche 3D-Druck Creator Showcase</title>
	<meta
		name="description"
		content="Entdecke die besten deutschsprachigen Content Creator für 3D-Druck, Prototyping und innovative Fertigungstechniken aus Deutschland, Österreich und der Schweiz."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div id="app">
	<GermanHeader />

	<main class="main-content">
		<section class="hero">
			<div class="container">
				<h1 class="hero-title">{$_('hero.title')}</h1>
				<p class="hero-subtitle">{$_('hero.subtitle')}</p>
			</div>
		</section>

		{#if loading}
			<div class="loading">
				<div class="spinner"></div>
				<p>{$_('loading')}</p>
			</div>
		{:else if error}
			<div class="error">
				<p>{$_('error')}: {error}</p>
			</div>
		{:else}
			<CreatorShowcase {creators} />
			<FilamentVendors />
		{/if}
	</main>

	<Footer totalCreators={creators.length} />
</div>

<style>
	#app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.main-content {
		flex: 1;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	.hero {
		background: linear-gradient(135deg, var(--black) 0%, var(--red) 50%, var(--gold) 100%);
		color: var(--white);
		padding: 80px 0;
		text-align: center;
	}

	.hero-title {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 1rem;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.hero-subtitle {
		font-size: 1.2rem;
		opacity: 0.9;
		max-width: 600px;
		margin: 0 auto;
	}

	.loading,
	.error {
		text-align: center;
		padding: 60px 20px;
	}

	.spinner {
		width: 40px;
		height: 40px;
		border: 4px solid var(--light-gray);
		border-top: 4px solid var(--red);
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin: 0 auto 20px;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.error {
		color: var(--red);
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.hero-title {
			font-size: 2rem;
		}

		.hero-subtitle {
			font-size: 1rem;
		}

		.container {
			padding: 0 15px;
		}
	}
</style>
