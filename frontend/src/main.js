import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

// Internationalization setup
const messages = {
  de: {
    hero: {
      title: 'Deutsche 3D-Druck Creator',
      subtitle: 'Entdecke die besten deutschsprachigen Content Creator für 3D-Druck, Prototyping und innovative Fertigungstechniken aus Deutschland, Österreich und der Schweiz.'
    },
    creators: {
      title: 'Unsere Creator',
      country: 'Land',
      shop: 'Shop besuchen',
      noShop: 'Kein Shop verfügbar',
      socialMedia: 'Social Media'
    },
    vendors: {
      title: 'Deutsche Filament-Hersteller',
      subtitle: 'Hochwertige Filamente aus Deutschland und der DACH-Region',
      visit: 'Website besuchen'
    },
    footer: {
      copyright: '© 2024 German Melting - Deutsche 3D-Druck Creator Showcase',
      madeWith: 'Erstellt mit',
      dataSource: 'Datenquelle'
    },
    loading: 'Lade Creator-Daten...',
    error: 'Fehler beim Laden der Daten'
  },
  en: {
    hero: {
      title: 'German 3D Printing Creators',
      subtitle: 'Discover the best German-speaking content creators for 3D printing, prototyping, and innovative manufacturing techniques from Germany, Austria, and Switzerland.'
    },
    creators: {
      title: 'Our Creators',
      country: 'Country',
      shop: 'Visit Shop',
      noShop: 'No shop available',
      socialMedia: 'Social Media'
    },
    vendors: {
      title: 'German Filament Vendors',
      subtitle: 'High-quality filaments from Germany and the DACH region',
      visit: 'Visit Website'
    },
    footer: {
      copyright: '© 2024 German Melting - German 3D Printing Creator Showcase',
      madeWith: 'Made with',
      dataSource: 'Data Source'
    },
    loading: 'Loading creator data...',
    error: 'Error loading data'
  }
}

const i18n = createI18n({
  legacy: false, // Use composition API mode
  locale: 'de', // Default to German
  fallbackLocale: 'en',
  messages
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
