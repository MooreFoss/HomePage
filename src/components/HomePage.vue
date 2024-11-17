<template>
  <div class="container">
    <div class="left">
      <div class="avatar">
        <img :src="require('@/assets/images/avatar.jpg')" alt="profile avatar">
      </div>
      <h1 class="name">{{ $t('information.name') }}</h1>
      <h2 class="nickname">@MooreFoss</h2>
      <p class="bio">{{ $t('information.intro') }}</p>
      <div class="info-group">
        <p class="info"><i class="fas fa-graduation-cap"></i>{{ $t('information.education') }}</p>
        <p class="info"><i class="fas fa-book"></i>{{ $t('information.major') }}</p>
        <p class="info"><i class="fas fa-map-marker-alt"></i>{{ $t('information.location') }}</p>
        <p class="info"><i class="fas fa-envelope"></i>moorefoss@buaa.edu.cn</p>
      </div>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 20px;
  border: 3px solid #ffffff;
  box-shadow: 0 0 0 3px skyblue;
  transition: box-shadow 0.3s ease;
}

.avatar:hover {
  box-shadow: 0 0 0 4px skyblue, 0 0 10px rgba(0, 0, 0, 0.2);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name {
  font-size: 2.2em;
  font-weight: bold;
  margin-bottom: 5px;
}

.nickname {
  font-size: 1.6em;
  color: #666;
  margin-bottom: 15px;
}

.bio {
  font-size: 1.1em;
  line-height: 1.5;
  color: #444;
  margin-bottom: 25px;
  padding: 0 20px;
}

.info-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.info {
  font-size: 0.9em;
  color: #666;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 5px 0;
  width: 100%;
  justify-content: flex-start;
  white-space: pre-line;
}

.info i {
  font-size: 1em;
  color: #888;
  width: 16px;
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

.button-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
}

.btn {
  width: 250px;
  padding: 15px 25px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  color: black;
  transition: transform 1s;
  font-size: 1.1em;
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

@media (max-width: 900px) {
  .container {
    width: 90vw;
    height: auto;
    flex-direction: column;
    padding: 20px 0;
  }

  .avatar {
    width: 100px;
    height: 100px;
    border: 2px solid #ffffff;
    box-shadow: 0 0 0 2px skyblue;
  }

  .avatar:hover {
    box-shadow: 0 0 0 3px skyblue, 0 0 8px rgba(0, 0, 0, 0.2);
  }

  .name {
    font-size: 1.8em;
  }

  .nickname {
    font-size: 1.4em;
  }
}

@media (max-width: 600px) {
  .container {
    width: 95vw;
  }

  .left,
  .right {
    width: 100%;
    padding: 10px;
  }

  .button-group {
    gap: 10px;
  }

  .btn {
    width: 200px;
    padding: 12px 20px;
    font-size: 1em;
  }

  .bio {
    padding: 0 10px;
  }
}

@media (max-width: 400px) {
  .container {
    width: 100vw;
    height: auto;
    flex-direction: column;
    padding: 10px 0;
  }

  .avatar {
    width: 80px;
    height: 80px;
    border: 2px solid #ffffff;
    box-shadow: 0 0 0 2px skyblue;
  }

  .avatar:hover {
    box-shadow: 0 0 0 3px skyblue, 0 0 6px rgba(0, 0, 0, 0.2);
  }

  .name {
    font-size: 1.5em;
  }

  .nickname {
    font-size: 1.2em;
  }

  .bio {
    font-size: 1em;
    padding: 0 5px;
  }

  .btn {
    width: 180px;
    padding: 10px 15px;
    font-size: 0.9em;
  }
}
</style>