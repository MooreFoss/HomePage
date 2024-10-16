<template>
  <div class="app-container">
    <div class="language-switcher">
      <a href="/" class="home-icon">
        <i class="fas fa-home"></i>
      </a>
      <a href="https://github.com/MooreFoss/HomePage" target="_blank">
        <i class="fab fa-github"></i>
      </a>
      <button @click="toggleLanguage">
        <i :class="languageIcon"></i>
      </button>
    </div>
    <router-view v-slot="{ Component }">
      <transition name="fade-up" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <footer>
      <transition name="fade-up2" mode="out-in">
        <p>{{ $t('footerText') }}</p>
      </transition>
    </footer>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
export default {
  data() {
    return {
      currentLanguage: this.$i18n.locale
    }
  },
  computed: {
    languageIcon() {
      return this.currentLanguage === 'en' ? 'fas fa-language' : 'fas fa-globe'
    }
  },
  methods: {
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'en' ? 'zh-cn' : 'en'
      this.$i18n.locale = this.currentLanguage
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Arial, sans-serif';
  overflow: hidden;
  background-color: #f0f0f0;
}

.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  position: relative;
}

.language-switcher {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
}

.language-switcher a,
.language-switcher button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-size: 24px;
  color: #000;
  height: 40px;
  /* 设置统一的高度 */
  width: 40px;
  /* 设置统一的宽度 */
}

.language-switcher button {
  background: none;
  border: none;
  cursor: pointer;
}

.home-icon {
  margin-right: 20px;
}

footer {
  position: relative;
  bottom: 0;
  width: 100%;
  text-align: center;
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-up2-enter-active,
.fade-up2-leave-active {
  transition: opacity 0.5s ease;
}

.fade-up2-enter-from,
.fade-up2-leave-to {
  opacity: 0;
}
</style>