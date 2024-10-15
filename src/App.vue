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
    <div class="homepage-container">
      <HomePage />
    </div>
    <footer>
      <p>{{ $t('footerText') }}</p>
    </footer>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  components: {
    HomePage
  },
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

.homepage-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  /* 设置宽度为视口宽度的70% */
  height: calc(70vw * 9 / 16);
  /* 设置高度为宽度的16:9比例 */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  /* 设置纯白色背景 */
  margin-bottom: 20px;
  /* 增加底部外边距 */
}

footer {
  position: relative;
  bottom: 0;
  /* 距离底部0 */
  width: 100%;
  text-align: center;
}

@media (max-width: 800px) {
  .homepage-container {
    width: 90vw;
    /* 当视口宽度小于800px时，设置宽度为视口宽度的90% */
    height: calc(90vw * 9 / 16);
    /* 设置高度为宽度的16:9比例 */
  }
}

@media (max-width: 450px) {
  .homepage-container {
    width: 100vw;
    /* 当视口宽度小于450px时，设置宽度为视口宽度的100% */
    height: calc(100vw * 9 / 16);
    /* 设置高度为宽度的16:9比例 */
  }
}
</style>