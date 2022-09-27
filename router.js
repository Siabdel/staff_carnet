import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home'
import Login from './views/Login'

Vue.use(Router);

const router =  new Router({
    mode : 'history',
    routes : [
        {   'path': '/', 
            'name' : 'index',
        },
        {   'path': '/home', 
            'name' : 'Home',
            'component'  : Home,
        },
        {   'path': '/login', 
            'name' : 'Login',
            'component'  : Login,
        },

    ]
});

export default router;