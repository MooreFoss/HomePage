<template>
    <div class="site-map-container">
        <div class="site-map">
            <h1>{{ $t('page.3') }}</h1>
            <div class="external-links">
                <div class="link-item">
                    <a href="https://web.botium.cn" target="_blank" :title="$t('site.webHosting')">
                        <img :src="require('@/assets/images/web.png')" :alt="$t('site.webHosting')">
                    </a>
                    <span>{{ $t('site.webHosting') }}</span>
                </div>
                <div class="link-item">
                    <a href="https://pdf.botium.cn" target="_blank" :title="$t('site.pdfTool')">
                        <img :src="require('@/assets/images/pdf.png')" :alt="$t('site.pdfTool')">
                    </a>
                    <span>{{ $t('site.pdfTool') }}</span>
                </div>
                <div class="link-item">
                    <a href="https://status.botium.cn" target="_blank" :title="$t('site.serverStatus')">
                        <img :src="require('@/assets/images/server.png')" :alt="$t('site.serverStatus')">
                    </a>
                    <span>{{ $t('site.serverStatus') }}</span>
                </div>
            </div>
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

.external-links {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 20px;
    width: 100%;
}

.link-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    min-width: 100px;
}

.link-item span {
    font-size: 14px;
    color: #666;
}

.external-links img {
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: transform 0.3s;
}

.external-links img:hover {
    transform: scale(1.1);
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

@media (max-width: 600px) {
    .site-map-container {
        flex-direction: column;
        align-items: center;
    }

    .site-map {
        width: 90vw;
        margin-left: 0;
    }

    .close-button {
        right: 10px;
        top: 10px;
    }
}
</style>