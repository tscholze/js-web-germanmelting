<script>
	import { _ } from 'svelte-i18n';

	// German filament vendors data
	const vendors = [
		{
			slug: 'bavarian-filament',
			name: 'Bavarian Filament',
			description:
				'Premium 3D-Drucker Filamente aus Bayern. Spezialisiert auf hochwertige PLA, PETG und ABS Filamente mit gleichbleibender Qualität.',
			location: 'Bayern, Deutschland',
			website: 'https://bavarian-filament.de',
			features: ['PLA', 'PETG', 'ABS', 'Premium Qualität']
		},
		{
			slug: 'recycling-fabrik',
			name: 'Recycling Fabrik',
			description:
				'Nachhaltige 3D-Druck Filamente aus recycelten Materialien. Umweltfreundliche Produktion und innovative Materialentwicklung.',
			location: 'Deutschland',
			website: 'https://recycling-fabrik.de',
			features: ['Recycelt', 'Nachhaltig', 'Umweltfreundlich', 'Innovation']
		},
		{
			slug: 'redline-filament',
			name: 'Redline Filament',
			description:
				'Hochleistungs-Filamente für professionelle Anwendungen. Technische Materialien und Spezialfilamente für industrielle Projekte.',
			location: 'Deutschland',
			website: 'https://redline-filament.de',
			features: ['Hochleistung', 'Technisch', 'Professionell', 'Industriell']
		},
		{
			slug: 'german-reprap',
			name: 'German RepRap',
			description:
				'Deutscher Pionier im 3D-Druck. Hochwertige Filamente und 3D-Drucker "Made in Germany" mit über 10 Jahren Erfahrung.',
			location: 'Feldkirchen, Deutschland',
			website: 'https://germanreprap.com',
			features: ['Made in Germany', 'Pionier', 'Erfahrung', 'Qualität']
		},
		{
			slug: 'das-filament',
			name: 'Das Filament',
			description:
				'Vielfältige Auswahl an 3D-Druck Materialien. Von Standard-Filamenten bis hin zu exotischen Materialien und Sonderanfertigungen.',
			location: 'Deutschland',
			website: 'https://das-filament.de',
			features: ['Vielfalt', 'Standard', 'Exotisch', 'Sonderanfertigung']
		},
		{
			slug: 'formfutura-germany',
			name: 'Formfutura Germany',
			description:
				'Deutsche Niederlassung des niederländischen Premium-Herstellers. Innovative Filamente und Spezialcompounds für anspruchsvolle Projekte.',
			location: 'Deutschland',
			website: 'https://formfutura.com/de',
			features: ['Premium', 'Innovativ', 'Spezial', 'International']
		}
	];
</script>

<section class="filament-vendors">
	<div class="container">
		<h2 class="section-title">{$_('vendors.title')}</h2>
		<p class="section-subtitle">{$_('vendors.subtitle')}</p>

		<div class="vendors-grid">
			{#each vendors as vendor (vendor.slug)}
				<div class="vendor-card">
					<div class="vendor-header">
						<div class="vendor-logo">
							<span class="logo-placeholder">🧵</span>
						</div>
						<h3 class="vendor-name">{vendor.name}</h3>
					</div>

					<div class="vendor-body">
						<p class="vendor-description">{vendor.description}</p>

						<div class="vendor-features">
							{#each vendor.features as feature}
								<span class="feature-tag">{feature}</span>
							{/each}
						</div>
					</div>

					<div class="vendor-footer">
						<div class="vendor-location">
							📍 {vendor.location}
						</div>

						<a
							href={vendor.website}
							class="vendor-button"
							target="_blank"
							rel="noopener noreferrer"
						>
							{$_('vendors.visit')}
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.filament-vendors {
		padding: 80px 0;
		background: var(--white);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	.section-title {
		text-align: center;
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--black);
		margin-bottom: 20px;
		position: relative;
	}

	.section-title::after {
		content: '';
		display: block;
		width: 100px;
		height: 4px;
		background: linear-gradient(90deg, var(--red), var(--gold), var(--black));
		margin: 20px auto 0;
		border-radius: 2px;
	}

	.section-subtitle {
		text-align: center;
		font-size: 1.1rem;
		color: var(--dark-gray);
		margin-bottom: 60px;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.vendors-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 30px;
		max-width: 1200px;
		margin: 0 auto;
	}

	.vendor-card {
		background: var(--white);
		border-radius: 16px;
		border: 2px solid var(--light-gray);
		transition: all 0.3s ease;
		overflow: hidden;
		position: relative;
	}

	.vendor-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, var(--black), var(--red), var(--gold));
	}

	.vendor-card:hover {
		transform: translateY(-5px);
		border-color: var(--gold);
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
	}

	.vendor-header {
		padding: 30px 30px 20px;
		text-align: center;
	}

	.vendor-logo {
		width: 80px;
		height: 80px;
		background: linear-gradient(135deg, var(--gold), var(--light-gold));
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 20px;
		font-size: 2rem;
	}

	.vendor-name {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--black);
		margin: 0;
	}

	.vendor-body {
		padding: 0 30px 20px;
	}

	.vendor-description {
		color: var(--dark-gray);
		line-height: 1.6;
		font-size: 0.95rem;
		margin-bottom: 20px;
	}

	.vendor-features {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.feature-tag {
		background: var(--light-gray);
		color: var(--dark-gray);
		padding: 4px 12px;
		border-radius: 12px;
		font-size: 0.8rem;
		font-weight: 500;
	}

	.vendor-footer {
		padding: 20px 30px 30px;
		border-top: 1px solid var(--light-gray);
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 15px;
	}

	.vendor-location {
		font-size: 0.9rem;
		color: var(--red);
		font-weight: 500;
	}

	.vendor-button {
		background: linear-gradient(45deg, var(--black), var(--red));
		color: var(--white);
		padding: 10px 20px;
		border-radius: 20px;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.9rem;
		transition: all 0.3s ease;
		border: 2px solid transparent;
	}

	.vendor-button:hover {
		background: var(--white);
		color: var(--red);
		border-color: var(--red);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(221, 0, 0, 0.3);
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.vendors-grid {
			grid-template-columns: 1fr;
			gap: 20px;
		}

		.vendor-card {
			margin: 0 10px;
		}

		.section-title {
			font-size: 2rem;
		}

		.section-subtitle {
			font-size: 1rem;
			margin-bottom: 40px;
		}

		.vendor-header {
			padding: 20px 20px 15px;
		}

		.vendor-logo {
			width: 60px;
			height: 60px;
			font-size: 1.5rem;
			margin-bottom: 15px;
		}

		.vendor-name {
			font-size: 1.1rem;
		}

		.vendor-body {
			padding: 0 20px 15px;
		}

		.vendor-footer {
			padding: 15px 20px 20px;
			flex-direction: column;
			align-items: stretch;
			gap: 10px;
		}

		.vendor-location {
			text-align: center;
		}

		.vendor-button {
			text-align: center;
		}
	}
</style>