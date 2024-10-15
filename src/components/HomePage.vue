<template>
  <div class="container">
    <!-- 左侧青蛙图片 -->
    <div class="left">
      <h1>{{ $t('leftPlaceholder') }}</h1>
    </div>

    <!-- 右侧按钮部分 -->
    <div class="right">
      <h1>{{ $t('siteTitle') }}</h1>
      <h2>{{ $t('subtitle') }}</h2>
      <div class="button-group">
        <button class="btn">{{ $t('button1') }}</button>
        <button class="btn">{{ $t('button2') }}</button>
        <button class="btn">{{ $t('button3') }}</button>
        <button class="btn">{{ $t('button4') }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  /* 确保容器高度为100% */
  width: 100%;
  /* 确保容器宽度为100% */
  padding: 20px;
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
</style>