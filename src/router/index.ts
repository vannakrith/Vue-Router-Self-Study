import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from '../views/AboutView.vue';
import CarDetailsPageView from '../views/CarDetailsPageView.vue';
import NotFoundView from "@/views/NotFoundView.vue";
import DealerView from '../views/DealerView.vue';
import ManufactorView from '../views/ManufactorView.vue'

const router = createRouter ({
    history: createWebHashHistory ('/'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        //Dynamic routing
        {
            path: '/car/:id', //:id is the param
            name: 'car',
            component: CarDetailsPageView,
            children: [
                {
                    path: 'dealer',
                    component: DealerView
                },
                {
                    path: 'manufactor',
                    component: ManufactorView
                },
            ]
        }, 
        { 
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: NotFoundView 
        }

    ]
})
export default router;