<template>
    <div class="container">
        <div class="sidebar">
            <ul>
                <li><a href="#" @click.prevent="scrollTo('section1')">{{ $t('aboutme.section.1.title') }}</a></li>
                <li><a href="#" @click.prevent="scrollTo('section2')">{{ $t('aboutme.section.2.title') }}</a></li>
                <li><a href="#" @click.prevent="scrollTo('section3')">{{ $t('aboutme.section.3.title') }}</a></li>
            </ul>
        </div>
        <div class="about-me-container">
            <div class="about-me">
                <h1>{{ $t('page.1') }}</h1>
                <h2 ref="section1">{{ $t('aboutme.section.1.title') }}</h2>
                <p>{{ $t('aboutme.section.1.content') }}</p>
                <h2 ref="section2">{{ $t('aboutme.section.2.title') }}</h2>
                <p>{{ $t('aboutme.section.2.content') }}</p>
                <h2 ref="section3">{{ $t('aboutme.section.3.title') }}</h2>
                <p>{{ $t('aboutme.section.3.content') }}</p>
            </div>
            <button class="close-button" @click="goToHomePage">✖</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutMe',
    data() {
        return {
            rotate: false
        };
    },
    methods: {
        goToHomePage() {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}

.sidebar {
    width: 8vw;
    padding: 50px;
    background-color: #f4f4f4;
    border-right: 1px solid #ddd;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    left: 5vw;
    top: 5vh;
    height: auto;
    overflow-y: auto;
}

/* 隐藏滚动条，但仍然允许滚动 */
.sidebar::-webkit-scrollbar {
    display: none;
}

.sidebar {
    -ms-overflow-style: none;
    /* 适用于 IE 和 Edge */
    scrollbar-width: none;
    /* 适用于 Firefox */
}

.sidebar ul {
    list-style-type: none;
    padding: 0;
}

.sidebar li {
    margin-bottom: 10px;
}

.sidebar a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    display: block;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
}

.sidebar a:hover {
    background-color: skyblue;
    color: #fff;
}

.about-me-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    margin-left: 15vw;
    width: 85vw;
    height: 100vh;
    overflow-y: auto;
    padding: 20px;
}

.about-me-container::-webkit-scrollbar {
    display: none;
}

.about-me-container {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.about-me {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 80%;
    background-color: #ffffff;
    padding: 20px;
    position: relative;
}

.close-button {
    position: fixed;
    top: 10vh;
    right: 12vw;
    background: none;
    border: 2px solid transparent;
    font-size: 1.5em;
    cursor: pointer;
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
</style>