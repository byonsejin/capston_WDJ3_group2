import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../resources/js/components/home.vue";
import Signup from '../resources/views/auth/Signup.vue';
import Graph from "../resources/views/graphView/Graph.vue";
import MonthChart from "../resources/js/components/graph/MonthChart.vue";
import DayChart from "../resources/js/components/graph/DayChart.vue";
import New from "../resources/views/graphView/New.vue";
import Recommend from "../resources/js/components/Recommend/Recommend.vue";
import Review from "../resources/views/reviewView/ReviewMain.vue";
import Store from "../resources/js/components/review/Store.vue";
import Detailed from '../resources/js/components/Recommend/Detailed';
import Recipe from '../resources/js/components/foot_recommend/Recipe';
import FootRecommend from '../resources/js/components/foot_recommend/FootRecommend';
import RecommendMain from '../resources/views/RecommendMain.vue'

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/signup",
        name: "signup",
        component: () =>
            import ( /* webpackChunkName: "about" */ '../resources/views/auth/Signup.vue')
    },
    // {
    //     path: "/login",
    //     name: "Login",
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ "../views/auth/Login.vue")
    // },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup

    },
    {
        path: "/graph",
        name: "graph",
        component: Graph,
        children: [{
                path: 'monthchart',
                name: 'monthchart',
                component: MonthChart
            },
            {
                path: 'daychart',
                name: 'daychart',
                component: DayChart
            }
        ],

    },
    {
        path: "/recommendmain",
        name: "RecommendMain",
        component: RecommendMain,
        children: [{
                path: "recommend",
                name: "Recommend",
                component: Recommend
            },
            {
                path: "footrecommend",
                name: "FootRecommend",
                component: FootRecommend
            }
        ],

    },
    {
        path: '/detailed/:id',
        name: 'Detailed',
        component: Detailed
    },
    {
        path: "/review",
        name: "review",
        component: Review,
    },
    {
        path: "/store/:id",
        name: "store",
        component: Store
    },
    {
        path: "/new",
        name: "new",
        component: New
    },
    {
        path: '/recipe/:id',
        name: 'Recipe',
        component: Recipe
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;