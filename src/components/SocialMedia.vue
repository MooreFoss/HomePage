<template>
    <div class="social-media-container">
        <div class="social-media">
            <h1>{{ $t('page.4') }}</h1>
            <div class="external-links">
                <div class="link-item">
                    <a href="https://github.com/MooreFoss" target="_blank" title="GitHub">
                        <img :src="require('@/assets/images/github-mark.png')" alt="GitHub">
                    </a>
                    <span>GitHub</span>
                </div>
                <div class="link-item">
                    <a href="javascript:void(0)" @click="showQRCode = true" title="Wechat">
                        <img :src="require('@/assets/images/wechat.png')" alt="WeChat">
                    </a>
                    <span>WeChat</span>
                </div>
                <div class="link-item">
                    <a href="https://user.qzone.qq.com/2864227282" target="_blank" title="qq">
                        <img :src="require('@/assets/images/qq.png')" alt="qq">
                    </a>
                    <span>QQ</span>
                </div>
                <div class="link-item">
                    <a href="https://orcid.org/0009-0007-6353-317X" target="_blank" title="Orcid">
                        <img :src="require('@/assets/images/orcid.logo.icon.svg')" alt="Orcid">
                    </a>
                    <span>Orcid</span>
                </div>
            </div>
        </div>
        <div v-if="showQRCode" class="qr-code-modal" @click.self="showQRCode = false">
            <div class="qr-code-content">
                <img :src="require('@/assets/images/wechat-qrcode.png')" alt="WeChat QR Code">
            </div>
        </div>
        <button class="close-button" @click="goToHomePage">✖</button>
    </div>
</template>

<script>
export default {
    name: 'SocialMedia',
    data() {
        return {
            showQRCode: false
        }
    },
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

.qr-code-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.qr-code-content {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.qr-code-content img {
    width: 15vw;
}

@media (max-width: 600px) {
    .social-media-container {
        flex-direction: column;
        align-items: center;
    }

    .social-media {
        width: 90vw;
        margin-left: 0;
    }

    .close-button {
        right: 10px;
        top: 10px;
    }
}
</style>