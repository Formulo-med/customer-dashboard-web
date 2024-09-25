<template>
	<span id="logo">
		<span
			class="text-dark"
			:class="size"
		>formu<span
			:class="size"
			class="text-warning"
		>lo</span></span> 
		
	</span>
</template>
<script>
export default {
	name: "LogoTemplate",
	props: {
		size: {
			default: "h2"
		}
	}
	
}
</script>
<style scoped>
.h1, .h2, .h3, .h4, .h5, .h6 {
	letter-spacing: .30vh !important;
}
	
</style>