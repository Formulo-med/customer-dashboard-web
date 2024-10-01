<template>
    <div class="container-md">
		<div class="row d-flex justify-content-center px-2">
            <h3 class="text-center py-4">Dashboard</h3>
            <NavigativeElements 
                :tabs="tabData" 
                :initial-tab="initialTab"
            />
		</div>
	</div>
</template>

<script>
import NavigativeElements from '@/common/components/NavigativeElements.vue';
import DashboardPage from '@/Dashboard/components/DashboardPage.vue';
import ChatsPage from '@/Dashboard/components/ChatsPage.vue';
export default{
    name:"DashboardView",
    components:{    
        NavigativeElements,
    },
    computed: {
		initialTab() {
			return this.$route.query.tab || "Dashboard";
		}
	},
    data(){
        return {
            tabData: [
				{
					name: 'Dashboard',
					title: 'Dashboard',
                    iconName: ['fas', 'table-cells-large'],
					component: DashboardPage
				},
				{
					name: 'Chats',
					title: 'Chats',
                    iconName: ['far', 'comment'],
					component: ChatsPage
				}
			]}
    }
}
</script>