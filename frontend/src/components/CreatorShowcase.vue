<template>
  <section class="creator-showcase">
    <div class="container">
      <h2 class="section-title">{{ t('creators.title') }}</h2>
      
      <div class="creators-grid">
        <div 
          v-for="creator in creators" 
          :key="creator.slug"
          class="creator-card"
          :class="`country-${creator.country.toLowerCase()}`"
        >
          <div class="card-header">
            <div class="creator-avatar">
              <img 
                :src="creator.logoUrl" 
                :alt="`${creator.name} Logo`"
                class="avatar-image"
                @error="handleImageError"
              />
            </div>
            <div class="creator-info">
              <h3 class="creator-name">{{ creator.name }}</h3>
              <span class="creator-country">
                {{ getCountryFlag(creator.country) }} {{ creator.country }}
              </span>
            </div>
          </div>
          
          <div class="card-body">
            <p class="creator-description">{{ creator.description }}</p>
          </div>
          
          <div class="card-footer">
            <div class="social-links">
              <a 
                v-for="(url, platform) in creator.profiles"
                :key="platform"
                :href="url"
                :title="`${creator.name} auf ${platform}`"
                class="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="social-icon">{{ getSocialIcon(platform) }}</span>
              </a>
            </div>
            
            <div class="shop-link" v-if="creator.shopUrl">
              <a 
                :href="creator.shopUrl"
                class="shop-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                🛒 {{ t('creators.shop') }}
              </a>
            </div>
            <div v-else class="no-shop">
              {{ t('creators.noShop') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({
  creators: {
    type: Array,
    required: true
  }
})

const getCountryFlag = (country) => {
  const flags = {
    'Germany': '🇩🇪',
    'Austria': '🇦🇹',
    'Switzerland': '🇨🇭'
  }
  return flags[country] || '🏳️'
}

const getSocialIcon = (platform) => {
  const icons = {
    'youtube': '📺',
    'instagram': '📸',
    'tiktok': '🎵',
    'twitter': '🐦',
    'facebook': '👥'
  }
  return icons[platform.toLowerCase()] || '🔗'
}

const handleImageError = (event) => {
  // Replace broken images with a placeholder
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNDAiIHI9IjE1IiBmaWxsPSIjQ0NDIi8+CjxwYXRoIGQ9Ik0yNSA3NUw3NSA3NUw2MCA2MEw0MCA2MEwyNSA3NVoiIGZpbGw9IiNDQ0MiLz4KPC9zdmc+'
}
</script>

<style scoped>
.creator-showcase {
  padding: 80px 0;
  background: var(--light-gray);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 60px;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, var(--black), var(--red), var(--gold));
  margin: 20px auto 0;
  border-radius: 2px;
}

.creators-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.creator-card {
  background: var(--white);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  border-top: 4px solid var(--red);
}

.creator-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.creator-card.country-germany {
  border-top-color: var(--black);
}

.creator-card.country-austria {
  border-top-color: var(--red);
}

.creator-card.country-switzerland {
  border-top-color: var(--red);
}

.card-header {
  padding: 30px 30px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.creator-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--light-gray);
  flex-shrink: 0;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.creator-info {
  flex: 1;
}

.creator-name {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--black);
  margin: 0 0 8px 0;
}

.creator-country {
  font-size: 0.9rem;
  color: var(--red);
  font-weight: 500;
}

.card-body {
  padding: 0 30px 20px;
}

.creator-description {
  color: var(--dark-gray);
  line-height: 1.6;
  font-size: 0.95rem;
}

.card-footer {
  padding: 20px 30px 30px;
  border-top: 1px solid var(--light-gray);
}

.social-links {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--light-gray);
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.social-link:hover {
  background: var(--red);
  transform: scale(1.1);
}

.shop-button {
  display: inline-block;
  background: linear-gradient(45deg, var(--gold), var(--light-gold));
  color: var(--black);
  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.shop-button:hover {
  background: var(--white);
  border-color: var(--gold);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 206, 0, 0.3);
}

.no-shop {
  color: var(--dark-gray);
  font-style: italic;
  font-size: 0.9rem;
}

/* Responsive design */
@media (max-width: 768px) {
  .creators-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .creator-card {
    margin: 0 10px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .card-header {
    padding: 20px 20px 15px;
    gap: 15px;
  }
  
  .creator-avatar {
    width: 60px;
    height: 60px;
  }
  
  .creator-name {
    font-size: 1.2rem;
  }
  
  .card-body {
    padding: 0 20px 15px;
  }
  
  .card-footer {
    padding: 15px 20px 20px;
  }
  
  .social-links {
    gap: 10px;
    margin-bottom: 15px;
  }
  
  .social-link {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
}
</style>