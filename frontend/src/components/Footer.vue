<template>
  <footer class="german-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">🇩🇪 German Melting</h3>
          <p class="footer-description">
            Die umfassendste Sammlung deutschsprachiger 3D-Druck Content Creator aus Deutschland, Österreich und der Schweiz.
          </p>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-subtitle">Datenquelle</h4>
          <p class="footer-text">
            <a 
              href="https://github.com/tscholze/js-web-germanmelting" 
              target="_blank"
              rel="noopener noreferrer"
              class="footer-link"
            >
              GitHub Repository
            </a>
          </p>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-subtitle">Statistiken</h4>
          <div class="stats">
            <div class="stat-item">
              <span class="stat-number">{{ totalCreators }}</span>
              <span class="stat-label">Creator</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">3</span>
              <span class="stat-label">Länder</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="flag-pattern-footer">
          <div class="flag-stripe black"></div>
          <div class="flag-stripe red"></div>
          <div class="flag-stripe gold"></div>
        </div>
        
        <div class="footer-copyright">
          <p>{{ t('footer.copyright') }}</p>
          <p class="made-with">
            {{ t('footer.madeWith') }} ❤️ {{ t('footer.dataSource') }}: 
            <a 
              href="https://github.com/tscholze/js-web-germanmelting" 
              target="_blank"
              rel="noopener noreferrer"
              class="source-link"
            >
              js-web-germanmelting
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed, inject } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// We can get total creators from parent, but for now let's use a static number
// In a real app, this could be passed as a prop or computed from the data
const totalCreators = computed(() => 6)
</script>

<style scoped>
.german-footer {
  background: var(--black);
  color: var(--white);
  padding: 60px 0 0;
  margin-top: 80px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: var(--gold);
}

.footer-subtitle {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--red);
}

.footer-description,
.footer-text {
  line-height: 1.6;
  color: #ccc;
  font-size: 0.9rem;
}

.footer-link {
  color: var(--gold);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--light-gold);
  text-decoration: underline;
}

.stats {
  display: flex;
  gap: 20px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--red);
  line-height: 1;
}

.stat-label {
  font-size: 0.8rem;
  color: #ccc;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-bottom {
  border-top: 1px solid #333;
  padding-top: 30px;
}

.flag-pattern-footer {
  display: flex;
  height: 4px;
  width: 100%;
  margin-bottom: 20px;
}

.flag-stripe {
  flex: 1;
}

.flag-stripe.black {
  background-color: var(--black);
  border: 1px solid #333;
}

.flag-stripe.red {
  background-color: var(--red);
}

.flag-stripe.gold {
  background-color: var(--gold);
}

.footer-copyright {
  text-align: center;
  padding-bottom: 30px;
}

.footer-copyright p {
  margin: 5px 0;
  color: #999;
  font-size: 0.85rem;
}

.made-with {
  margin-top: 10px;
}

.source-link {
  color: var(--gold);
  text-decoration: none;
  font-weight: 600;
}

.source-link:hover {
  color: var(--light-gold);
  text-decoration: underline;
}

/* Responsive design */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }
  
  .stats {
    justify-content: center;
  }
  
  .footer-title {
    font-size: 1.3rem;
  }
  
  .footer-subtitle {
    font-size: 1rem;
  }
  
  .footer-description,
  .footer-text {
    font-size: 0.85rem;
  }
  
  .stat-number {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .german-footer {
    padding: 40px 0 0;
  }
  
  .container {
    padding: 0 15px;
  }
  
  .footer-content {
    gap: 20px;
  }
  
  .stats {
    gap: 15px;
  }
}
</style>