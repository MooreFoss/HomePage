<template>
    <div class="container">
        <div class="sidebar" :class="{ open: isSidebarOpen }">
            <button class="toggle-button" @click="toggleSidebar">☰</button>
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
                <p class="indented" v-html="formattedContent1"></p>
                <h2 ref="section2">{{ $t('aboutme.section.2.title') }}</h2>
                <p class="indented" v-html="formattedContent2"></p>
                <h2 ref="section3">{{ $t('aboutme.section.3.title') }}</h2>
                <p class="indented" v-html="formattedContent3"></p>
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
            rotate: false,
            isSidebarOpen: false
        };
    },
    methods: {
        goToHomePage() {
            this.$router.push('/');
        },
        scrollTo(section) {
            const element = this.$refs[section];
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                this.isSidebarOpen = false;
            }
        },
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        }
    },
    computed: {
        formattedContent1() {
            return this.$t('aboutme.section.1.content').replace(/\n/g, '<br>')
        },
        formattedContent2() {
            return this.$t('aboutme.section.2.content').replace(/\n/g, '<br>')
        },
        formattedContent3() {
            return this.$t('aboutme.section.3.content').replace(/\n/g, '<br>')
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
    width: 7vw;
    padding: 30px;
    background-color: #f4f4f4;
    border-right: 1px solid #ddd;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    left: 4vw;
    top: 5vh;
    height: auto;
    overflow-y: auto;
    border-radius: 15px;
    transition: left 0.3s;
    z-index: 1001;
}

.sidebar.open {
    left: 0;
}

.toggle-button {
    position: absolute;
    top: 10px;
    right: -40px;
    background: none;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
    z-index: 1002;
}

.sidebar::-webkit-scrollbar {
    display: none;
}

.sidebar {
    -ms-overflow-style: none;
    scrollbar-width: none;
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
    max-height: 90vh;
    overflow-y: auto;
    padding: 30px;
    margin-top: 5vh;
    margin-bottom: 5vh;
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
    padding: 2em;
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

.indented {
    text-indent: 2em;
}

@media (max-width: 600px) {
    .container {
        flex-direction: column;
    }

    .sidebar {
        width: 70vw;
        position: fixed;
        left: -65vw;
        top: 0;
        padding: 10px;
        box-shadow: none;
        border-radius: 0;
        transition: left 0.3s;
    }

    .sidebar.open {
        left: 0;
    }

    .about-me-container {
        margin-left: 0;
        width: 100%;
        padding: 10px;
    }

    .close-button {
        right: 10px;
        top: 50px;
    }

    .toggle-button {
        top: 10px;
        right: 10px;
    }
}
</style>