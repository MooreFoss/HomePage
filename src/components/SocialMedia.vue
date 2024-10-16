<template>
    <div class="social-media">
        <h1>{{ $t('page4') }}</h1>
        <p>This is the Social Media page.</p>
    </div>
</template>

<script>
export default {
    name: 'SocialMedia'
}
</script>

<style scoped>
.social-media {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #ffffff;
}

h1 {
    font-size: 2em;
    margin-bottom: 20px;
}

p {
    font-size: 1.2em;
}
</style>