import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/home';
import Login from '@/components/login';
import Register from '@/components/register';
import Events from '@/components/events';
import Event from '@/components/event';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
        },
        {
            path: '/events',
            name: 'Events',
            component: Events,
        },
        {
            path: '/events/:id',
            name: 'Event',
            component: Event,
        },
    ],
});
