<template>
    <div class="site-map-container">
        <div class="site-map">
            <h1>{{ $t('page3') }}</h1>
            <p>This is the Site Map page.</p>
        </div>
        <button class="close-button" @click="goToHomePage">✖</button>
    </div>
</template>

<script>
export default {
    name: 'SiteMap',
    methods: {
        goToHomePage() {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
.site-map-container {
    display: flex;
    align-items: flex-start;
    position: relative;
}

.site-map {
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
    right: -40px;
    background: none;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
}

h1 {
    font-size: 2em;
    margin-bottom: 20px;
}
</style>