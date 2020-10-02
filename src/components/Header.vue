<template>
	<div class="logoHeader" style="display: flex">
			<Logo style="width: 2rem; height: 2rem"/>
			<h1>float editor</h1>
	</div>
</template>

<script>
import Logo from "@/components/Logo"
export default {
	name: "Header",
	components: {
		Logo
	}
}
</script>

<style lang="stylus">
.logoHeader
	display: flex
	h1
		font-size: 1.5rem
		line-height: 2rem
		margin: 0 .5rem
		color: #5D7198
</style>