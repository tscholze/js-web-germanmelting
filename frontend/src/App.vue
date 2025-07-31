<script setup>
import { ref, onMounted } from 'vue'
import GermanHeader from './components/GermanHeader.vue'
import CreatorShowcase from './components/CreatorShowcase.vue'
import FilamentVendors from './components/FilamentVendors.vue'
import Footer from './components/Footer.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const creators = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    // Load creators data from the copied file in public directory
    const response = await fetch('/creators.json')
    if (!response.ok) {
      throw new Error('Failed to load creators data')
    }
    const data = await response.json()
    creators.value = data.creators
  } catch (err) {
    error.value = err.message
    console.error('Error loading creators:', err)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div id="app">
    <GermanHeader />
    
    <main class="main-content">
      <section class="hero">
        <div class="container">
          <h1 class="hero-title">{{ t('hero.title') }}</h1>
          <p class="hero-subtitle">{{ t('hero.subtitle') }}</p>
        </div>
      </section>

      <div v-if="loading" class="loading">
        <div class="spinner"></div>
        <p>{{ t('loading') }}</p>
      </div>

      <div v-else-if="error" class="error">
        <p>{{ t('error') }}: {{ error }}</p>
      </div>

      <template v-else>
        <CreatorShowcase :creators="creators" />
        <FilamentVendors />
      </template>
    </main>

    <Footer />
  </div>
</template>

<style>
/* German flag colors */
:root {
  --black: #000000;
  --red: #DD0000;
  --gold: #FFCE00;
  --dark-red: #AA0000;
  --light-gold: #FFD700;
  --white: #FFFFFF;
  --light-gray: #F5F5F5;
  --dark-gray: #333333;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: var(--dark-gray);
  background-color: var(--white);
}

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
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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
