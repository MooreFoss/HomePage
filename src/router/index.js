import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import AboutMe from '@/components/AboutMe.vue'
import MyProjects from '@/components/MyProjects.vue'
import SiteMap from '@/components/SiteMap.vue'
import SocialMedia from '@/components/SocialMedia.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutMe },
    { path: '/projects', component: MyProjects },
    { path: '/sitemap', component: SiteMap },
    { path: '/social', component: SocialMedia }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router