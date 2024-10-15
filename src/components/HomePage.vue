<template>
  <div class="container" :class="{ fadeOut: isFadingOut, shrink: isFadingOut }">
    <!-- 左侧青蛙图片 -->
    <div class="left">
      <h1>{{ $t('leftPlaceholder') }}</h1>
    </div>

    <!-- 右侧按钮部分 -->
    <div class="right">
      <h1>{{ $t('siteTitle') }}</h1>
      <h2>{{ $t('subtitle') }}</h2>
      <div class="button-group">
        <button class="btn" @click="rotateButton">{{ $t('button1') }}</button>
        <button class="btn" @click="rotateButton">{{ $t('button2') }}</button>
        <button class="btn" @click="rotateButton">{{ $t('button3') }}</button>
        <button class="btn" @click="rotateButton">{{ $t('button4') }}</button>
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
      rotationSpeed: 100 // 初始旋转速度
    }
  },
  methods: {
    rotateButton(event) {
      const button = event.target;
      let rotation = 0;
      const interval = setInterval(() => {
        rotation += this.rotationSpeed;
        button.style.transform = `rotateY(${rotation}deg)`;
        this.rotationSpeed += 5; // 逐渐加快旋转速度
        if (this.rotationSpeed > 130) {
          clearInterval(interval);
          setTimeout(() => {
            this.isFadingOut = true;
            setTimeout(() => {
              this.$emit('navigate', 'AboutMe');
            }, 1000); // 渐变消失时间
          }, 150); // 延迟100ms再开始缩小和渐变
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
  /* 设置宽度为视口宽度的70% */
  height: calc(70vw * 9 / 16);
  /* 设置高度为宽度的16:9比例 */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  /* 设置纯白色背景 */
  margin-bottom: 20px;
  /* 增加底部外边距 */
  transition: opacity 1s, transform 1s;
}

.container.fadeOut {
  opacity: 0;
}

.container.shrink {
  transform: scale(0.95);
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
  /* 使右侧内容由上至下分布 */
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
  /* 缩短按钮间距 */
  position: relative;
}

.btn {
  width: 200px;
  /* 增加按钮宽度 */
  padding: 10px 20px;
  background-color: #fff;
  /* 修改按钮背景颜色为白色 */
  border: 1px solid #ddd;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  color: black;
  /* 默认文字颜色 */
  transition: transform 1s;
  /* 添加过渡效果 */
}

.btn:hover {
  border-color: skyblue;
  /* 修改边框颜色为天蓝色 */
  color: skyblue;
  /* 修改文字颜色为天蓝色 */
}

.btn::after {
  content: '';
  position: absolute;
  width: 1px;
  /* 使连线更细 */
  height: 20px;
  /* 缩短按钮间距 */
  background-color: #ddd;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  /* 确保伪元素不响应点击事件 */
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
  }

  .left,
  .right {
    width: 100%;
    text-align: center;
  }

  .left {
    margin-bottom: 20px;
  }
}

@media (max-width: 800px) {
  .container {
    width: 90vw;
    /* 当视口宽度小于800px时，设置宽度为视口宽度的90% */
    height: 100vh;
  }
}

@media (max-width: 450px) {
  .container {
    width: 95vw;
    /* 当视口宽度小于450px时，设置宽度为视口宽度的100% */
    height: 100vh;
  }
}
</style>