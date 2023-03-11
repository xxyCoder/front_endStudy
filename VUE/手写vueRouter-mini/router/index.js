import { createRouter,createWebHashHistory } from "./vue-router-mini";
import Home  from '../components/Home.vue'
import About from '../components/About.vue'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;