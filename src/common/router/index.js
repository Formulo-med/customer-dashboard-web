import { createWebHistory, createRouter } from "vue-router";

import NavBar from "../components/NavBar.vue";
import DashboardView from "@/Dashboard/view/DashboardView.vue";
import FooterPage from "@/common/components/Footer.vue"

const routes=[
    {
        path:"/dashboard",
        name:"Dashboard",
        components: {
            default:DashboardView,
            navbar:NavBar,
            footer:FooterPage
        }

    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router