<template>
    <div class="social-media-container">
        <div class="social-media">
            <h1>{{ $t('page.4') }}</h1>
            <p>{{ $t('socialMedia.github') }}</p>
            <p>{{ $t('socialMedia.twitter') }}</p>
        </div>
        <button class="close-button" @click="goToHomePage">✖</button>
    </div>
</template>

<script>
export default {
    name: 'SocialMedia',
    methods: {
        goToHomePage() {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
.social-media-container {
    display: flex;
    align-items: flex-start;
    position: relative;
}

.social-media {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 60vw;
    background-color: #ffffff;
    padding: 20px;
    margin-left: 0vw;
}

.close-button {
    position: absolute;
    top: 10px;
    right: -60px;
    background: none;
    font-size: 1.5em;
    cursor: pointer;
    border: 2px solid transparent;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transition: transform 1s, border-color 0.3s;
}

.close-button:hover {
    border-color: skyblue;
}

h1 {
    font-size: 2em;
    margin-bottom: 20px;
}

p {
    font-size: 1.2em;
}
</style>