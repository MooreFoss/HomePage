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
      this.updateTitle()
    },
    updateTitle() {
      const baseTitle = this.currentLanguage === 'en' ? 'Home Page' : '主页'
      document.title = `${baseTitle}`
    }
  },
  watch: {
    currentLanguage() {
      this.updateTitle()
    }
  },
  mounted() {
    this.updateTitle()
    this.$router.afterEach(() => {
      this.updateTitle()
    })
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Arial, sans-serif';
  overflow: hidden;
  background-color: #f0f0f0;
  background-image: url('https://bing.img.run/rand.php');
  background-size: cover;
  background-position: center;
}

.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  position: relative;
  opacity: 0.95;
}

.language-switcher {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 0.8;
  z-index: 2000;
}

.language-switcher a,
.language-switcher button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0px;
  font-size: 24px;
  color: #000;
  height: 20px;
  width: 40px;
  mix-blend-mode: hard-light;
  opacity: 0.9;
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

@media (max-width: 600px) {
  .app-container {
    padding: 10px;
  }

  .language-switcher {
    top: 5px;
    right: 5px;
    padding: 5px;
  }

  .language-switcher a,
  .language-switcher button {
    font-size: 20px;
    width: 30px;
    height: 30px;
  }
}
</style>