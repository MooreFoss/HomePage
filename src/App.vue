<template>
  <div class="app-container">
    <div class="language-switcher">
      <a href="https://github.com/MooreFoss/HomePage" target="_blank">
        <i class="fab fa-github"></i>
      </a>
      <button @click="toggleLanguage">
        <i :class="languageIcon"></i>
      </button>
    </div>
    <component :is="currentComponent" @navigate="navigate" />
    <footer>
      <p>{{ $t('footerText') }}</p>
    </footer>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import AboutMe from './components/AboutMe.vue'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  components: {
    HomePage,
    AboutMe
  },
  data() {
    return {
      currentLanguage: this.$i18n.locale,
      currentComponent: 'HomePage'
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
    },
    navigate(component) {
      this.currentComponent = component
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Arial, sans-serif';
  overflow: hidden;
  /* 禁止滚动条 */
  background-color: #f0f0f0;
  /* 设置灰色纯色背景 */
}

.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* 设置父容器高度为全屏 */
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

.language-switcher a {
  margin-right: 10px;
  font-size: 24px;
  color: #000;
}

.language-switcher button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
}

footer {
  position: relative;
  bottom: 0;
  /* 距离底部0 */
  width: 100%;
  text-align: center;
}

</style>