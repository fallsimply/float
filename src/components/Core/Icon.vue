<template>
		<svg :viewBox="`0 0 ${caret ? 36 : 24} 24`">
			<use :xlink:href="`/icons/${pack}.svg#${name}`" width="24" fill="currentColor"/>
			<use v-if="caret" xlink:href="#caret" width="12" fill="currentColor" x="24" id="caret"/>
		</svg>
</template>

<script>
export default {
	name: "Icon",
	props: {
		caret: {
			type: Boolean,
			default: false,
		},
		name: {
			type: String,
			required: true,
		},
		pack: {
			type: String,
			default: "general"
		}
	}
}
</script>

<style lang="stylus">
svg
	#caret
		transform-origin: center;
		transition: transform .2s;
</style>