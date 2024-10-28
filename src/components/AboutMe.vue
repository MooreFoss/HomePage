<template>
    <div class="container">
        <div class="sidebar">
            <ul>
                <li><a href="#" @click.prevent="scrollTo('section1')">{{ $t('section.1') }}</a></li>
                <li><a href="#" @click.prevent="scrollTo('section2')">{{ $t('section.2') }}</a></li>
                <li><a href="#" @click.prevent="scrollTo('section3')">{{ $t('section.3') }}</a></li>
            </ul>
        </div>
        <div class="about-me-container">
            <div class="about-me">
                <h1>{{ $t('page.1') }}</h1>
                <h2 ref="section1">{{ $t('section.1') }}</h2>
                <p ref="section2">{{ $t('section.2') }}</p>
                <p ref="section3">{{ $t('section.3') }}</p>
            </div>
            <button class="close-button" @click="goToHomePage">✖</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutMe',
    methods: {
        scrollTo(section) {
            this.$refs[section].scrollIntoView({ behavior: 'smooth' });
        },
        goToHomePage() {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
.sidebar {
    width: 10vw;
    padding: 20px;
    background-color: #f4f4f4;
    border-right: 1px solid #ddd;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    left: 5vw;
    top: auto;
    height: auto;
    overflow-y: auto;
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
    align-items: flex-start;
    position: relative;
}

.about-me {
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