<template>
    <div class="my-projects-container">
        <div class="my-projects">
            <h1>{{ $t('page.2') }}</h1>
            <h2 ref="project1">{{ $t('project.1.title') }}</h2>
            <p>{{ $t('project.1.description') }}</p>
            <h2 ref="project2">{{ $t('project.2.title') }}</h2>
            <p>{{ $t('project.2.description') }}</p>
        </div>
        <button class="close-button" @click="goToHomePage">✖</button>
    </div>
</template>

<script>
export default {
    name: 'MyProjects',
    methods: {
        goToHomePage() {
            this.$router.push('/');
        }
    }
};
</script>

<style scoped>
.my-projects-container {
    display: flex;
    align-items: flex-start;
    position: relative;
}

.my-projects {
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