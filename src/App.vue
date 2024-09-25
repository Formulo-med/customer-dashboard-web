<template>
	<div>
		<router-view name="navbar" />
		<router-view />
		<router-view name="footer" />
	</div>
</template>

<script>

export default {
	name: 'App',
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:auto;
  
}
.background{
	background-color: #F1EFE7;
	color:var(--yellow-secondary-color-variant)
}
</style>