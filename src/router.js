import {createRouter, createWebHashHistory} from 'vue-router'
import Weather from "@/components/Weather";
const  routes = [
    {
        path: '/',
        name: 'weather',
        component: Weather
    },
    {
        path: '/:city',
        name: 'weatherCity',
        component: Weather
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router