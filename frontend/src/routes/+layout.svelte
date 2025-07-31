<script>
	import '../lib/i18n.js';
	import { isLoading } from 'svelte-i18n';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
</svelte:head>

<main>
	{#if $isLoading}
		<div class="loading-screen">
			<div class="spinner"></div>
			<p>Loading...</p>
		</div>
	{:else}
		{@render children?.()}
	{/if}
</main>

<style>
	/* German flag colors */
	:global(:root) {
		--black: #000000;
		--red: #dd0000;
		--gold: #ffce00;
		--dark-red: #aa0000;
		--light-gold: #ffd700;
		--white: #ffffff;
		--light-gray: #f5f5f5;
		--dark-gray: #333333;
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			sans-serif;
		line-height: 1.6;
		color: var(--dark-gray);
		background-color: var(--white);
	}

	main {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.loading-screen {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		color: var(--dark-gray);
	}

	.spinner {
		width: 40px;
		height: 40px;
		border: 4px solid var(--light-gray);
		border-top: 4px solid var(--red);
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin-bottom: 20px;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
