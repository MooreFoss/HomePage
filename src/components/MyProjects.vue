<template>
    <div class="my-projects-container">
        <div class="my-projects">
            <h1>{{ $t('page2') }}</h1>
            <h2 ref="section1">This is Section 1.</h2>
            <p>This is the MyProjects page.</p>
            <p ref="section2">This is Section 2.</p>
            <p ref="section3">This is Section 3.</p>
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