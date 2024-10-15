<template>
    <div class="about-me">
        <h1>About Me</h1>
        <p>This is the About Me page.</p>
    </div>
</template>

<script>
export default {
    name: 'AboutMe'
}
</script>

<style scoped>
.about-me {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
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