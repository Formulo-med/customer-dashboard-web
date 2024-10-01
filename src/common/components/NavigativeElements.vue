<template>
	<div class="container-lg">
		<div class="row justify-content-center">
			<ul 
				class="nav nav-pills p-2 rounded-5"
				style="background-color: azure;" 
				role="tablist"
			>
				<li 
					v-for="(tab, index) in tabs" 
					:key="index" 
					class="nav-item col"
				>
					<a 
						class="nav-link h5 mb-0 rounded-5 text-center text-dark" 
						:class="{ active: activeTab === tab.name }" 
						:href="'#' + tab.name"
						@click.prevent="changeQuery(tab.name,updateRoute)"
					>
					<div>
						<font-awesome-icon v-if="tab.iconName" :icon="tab.iconName" size="lg" class="px-2 d-md-inline d-none"/>
						{{ tab.title }}
					</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="my-3 col-12">
		<component 
			:is="getCurrentComponent" 
			@go-to-tab="switchTab" 
		/>
	</div>
</template>

<script>
export default {
	name: 'NavigativeElements',
	props: {
		updateRoute:{
			type: Boolean,
			default:true
		},
		tabs: {
			type: Array,
			required: true
		},
		initialTab: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			activeTab: this.initialTab
		};
	},
	computed: {
		getCurrentComponent() {
			const activeTabData = this.tabs.find(tab => tab.name === this.activeTab);
			return activeTabData ? activeTabData.component : null;
		}
	},
	watch: {
		'$route.query.tab'(newTab) {
			if (this.updateRoute && newTab && this.activeTab !== newTab) {
				this.switchTab(newTab);
			}
		}
	},
	methods: {
		changeQuery(tabName,updateRoute) {
			if (updateRoute) {
				this.$router.push({ query: { tab: tabName } });
			}
			this.switchTab(tabName);
		},
		switchTab(tabName){
			this.activeTab=tabName
		}
	}
}
</script>
<style>

</style>