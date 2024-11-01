<template>
    <div class="my-projects-container">
        <div class="my-projects">
            <h1>{{ $t('page.2') }}</h1>
            <div class="repo-grid">
                <div v-for="(repo, index) in sortedRepos" :key="index" class="repo-box">
                    <div class="repo-content">
                        <h2><a :href="repo.html_url" target="_blank">{{ repo.name }}</a></h2>
                        <p>{{ repo.description }}</p>
                        <div class="repo-details">
                            <span>{{ repo.language }}</span>
                            <span class="stars">⭐ {{ repo.stargazers_count }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="close-button" @click="goToHomePage">✖</button>
    </div>
</template>

<script>
export default {
    name: 'MyProjects',
    computed: {
        sortedRepos() {
            return this.$store.getters.filteredRepos.slice().sort((a, b) => b.stargazers_count - a.stargazers_count);
        }
    },
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

.repo-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
}

.repo-box {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.repo-content {
    border: 1px solid #e1e4e8;
    border-radius: 10px;
    padding: 15px;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.repo-box h2 {
    font-size: 1.2em;
    margin: 0;
}

.repo-box h2 a {
    text-decoration: none;
    color: #0366d6;
}

.repo-box p {
    margin: 5px 0;
    font-size: 1em;
    color: #586069;
    flex-grow: 1;
}

.repo-details {
    display: flex;
    justify-content: space-between;
    font-size: 0.9em;
    color: #586069;
}

.stars {
    display: flex;
    align-items: center;
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
    .my-projects-container {
        flex-direction: column;
        align-items: center;
    }

    .my-projects {
        width: 90vw;
        margin-left: 0;
    }

    .repo-grid {
        grid-template-columns: 1fr;
    }

    .close-button {
        right: 10px;
        top: 10px;
    }
}
</style>