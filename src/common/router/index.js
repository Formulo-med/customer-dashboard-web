import { createWebHistory, createRouter } from "vue-router";

import NavBar from "../components/NavBar.vue";
import FooterPage from "@/common/components/Footer.vue"
import ThankyouPageView from "@/ThankyouPage/view/ThankyouPageView.vue";
import DashboardView from "@/Dashboard/view/DashboardView.vue";


const routes=[
    { 
        path: '/', 
        redirect: { name: 'thankyou-page' } 
    },
    {
        path:"/thankyou-page",
        name:"thankyou-page",
        components: {
            navbar:NavBar,
            default:ThankyouPageView,
            footer:FooterPage
        }

    },
    {
        path:"/dashboard",
        name:"dashboard",
        components:{
            navbar:NavBar,
            default:DashboardView,
            footer:FooterPage
        }
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router