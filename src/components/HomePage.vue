<template>
  <div class="container">
    <div class="left">
      <h1>{{ $t('leftPlaceholder') }}</h1>
    </div>

    <div class="right">
      <h1>{{ $t('siteTitle') }}</h1>
      <h2>{{ $t('subtitle') }}</h2>
      <div class="button-group">
        <button class="btn" data-target="/about" @click="navigate">{{ $t('page.1') }}</button>
        <button class="btn" data-target="/projects" @click="navigate">{{ $t('page.2') }}</button>
        <button class="btn" data-target="/sitemap" @click="navigate">{{ $t('page.3') }}</button>
        <button class="btn" data-target="/social" @click="navigate">{{ $t('page.4') }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      isFadingOut: false,
      rotationSpeed: 100
    }
  },
  methods: {
    navigate(event) {
      const button = event.target;
      const target = button.getAttribute('data-target');
      let rotation = 0;
      const interval = setInterval(() => {
        rotation += this.rotationSpeed;
        button.style.transform = `rotateY(${rotation}deg)`;
        this.rotationSpeed += 5;
        if (this.rotationSpeed > 130) {
          clearInterval(interval);
          setTimeout(() => {
            this.isFadingOut = true;
            //this.$emit('navigate', target);
            this.$router.push(target);
          }, 100);
        }
      }, 1);
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: calc(70vw * 9 / 16);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  margin-bottom: 20px;
}

.left {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
}

.btn {
  width: 250px;
  /* 增加宽度 */
  padding: 15px 25px;
  /* 增加内边距 */
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  color: black;
  transition: transform 1s;
}

.btn:hover {
  border-color: skyblue;
  color: skyblue;
}

.btn::after {
  content: '';
  position: absolute;
  width: 1px;
  height: 20px;
  background-color: #ddd;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
}

.btn:last-child::after {
  display: none;
}

footer {
  margin-top: 20px;
  font-size: 0.8em;
  color: #888;
}

@media (max-width: 600px) {
  .container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
  }

  .left,
  .right {
    width: 100%;
    text-align: center;
  }

  .left {
    margin-bottom: 20px;
  }

  .button-group {
    flex-direction: column;
    /* 修改为竖排排列 */
    gap: 10px;
  }

  .btn {
    font-size: 1em;
    /* 调整字体大小 */
    width: 250px;
    padding: 15px 25px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 15px;
    cursor: pointer;
    position: relative;
    color: black;
    transition: transform 1s;
  }
}

@media (max-width: 900px) {
  .container {
    width: 90vw;
    height: 100vh;
  }
}

@media (max-width: 450px) {
  .container {
    width: 95vw;
    height: 100vh;
  }
}
</style>