<template>
    <div class="my-projects">
        <h1>{{ $t('page2')}}</h1>
        <p>This is the MyProjects page.</p>
    </div>
</template>

<script>
export default {
    name: 'MyProjects'
}
</script>

<style scoped>
.my-projects {
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