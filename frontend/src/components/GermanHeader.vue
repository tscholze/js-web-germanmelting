<template>
  <header class="german-header">
    <!-- German flag pattern -->
    <div class="flag-pattern">
      <div class="flag-stripe black"></div>
      <div class="flag-stripe red"></div>
      <div class="flag-stripe gold"></div>
    </div>
    
    <nav class="navbar">
      <div class="container">
        <div class="nav-brand">
          <h2 class="brand-title">🇩🇪 German Melting</h2>
          <p class="brand-subtitle">3D-Druck Creator Showcase</p>
        </div>
        
        <div class="nav-actions">
          <button 
            @click="toggleLanguage" 
            class="language-toggle"
            :title="currentLocale === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'"
          >
            {{ currentLocale === 'de' ? 'EN' : 'DE' }}
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const currentLocale = computed(() => locale.value)

const toggleLanguage = () => {
  locale.value = locale.value === 'de' ? 'en' : 'de'
}
</script>

<style scoped>
.german-header {
  position: relative;
  background: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.flag-pattern {
  display: flex;
  height: 8px;
  width: 100%;
}

.flag-stripe {
  flex: 1;
}

.flag-stripe.black {
  background-color: var(--black);
}

.flag-stripe.red {
  background-color: var(--red);
}

.flag-stripe.gold {
  background-color: var(--gold);
}

.navbar {
  padding: 20px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  flex: 1;
}

.brand-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--black);
  margin: 0;
  line-height: 1.2;
}

.brand-subtitle {
  font-size: 0.9rem;
  color: var(--red);
  margin: 0;
  font-weight: 500;
}

.nav-actions {
  display: flex;
  align-items: center;
}

.language-toggle {
  background: linear-gradient(45deg, var(--black), var(--red));
  color: var(--white);
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.language-toggle:hover {
  background: linear-gradient(45deg, var(--red), var(--gold));
  color: var(--black);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Responsive design */
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  
  .brand-title {
    font-size: 1.4rem;
  }
  
  .brand-subtitle {
    font-size: 0.8rem;
  }
  
  .language-toggle {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
}
</style>