import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "@/pages/index";
import main from '@/pages/main'
import scientists from "@/pages/scientists";
import Medical from "@/components/scientist/Medical";
import TheSeaOfStars from "@/components/scientist/TheSeaOfStars";
import Traffic from "@/components/scientist/Traffic";
import Military from "@/components/scientist/Military";
import Acknowledgements from "@/pages/Acknowledgements";
import topic from "@/components/scientist/topic";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: index
    }, {
        path: '/main',
        name: 'main',
        component: main
    }, {
        path: '/scientists',
        name: 'scientists',
        component: scientists,
        redirect: '/scientists/topic',
        children:[
            {
                path: '/scientists/topic',
                component: topic
            }, {
                path: '/scientists/medical',
                component: Medical
            }, {
                path: '/scientists/theSeaOfStars',
                component: TheSeaOfStars
            }, {
                path: '/scientists/traffic',
                component: Traffic
            }, {
                path: '/scientists/military',
                component: Military
            },
        ]
    },  {
        path: '/acknowledgements',
        name: 'acknowledgements',
        component: Acknowledgements
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
