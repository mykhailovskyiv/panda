import {createRouter, createWebHashHistory} from 'vue-router'
import Weather from "@/components/Weather";
const  routes = [
    {
        path: '/:city',
        name: 'weather',
        component: Weather
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router