<template>
    <div class="site-map">
        <h1>{{ $t('page3') }}</h1>
        <p>This is the Site Map page.</p>
    </div>
</template>

<script>
export default {
    name: 'SiteMap'
}
</script>

<style scoped>
.site-map {
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