<template>
	<button :primary="!secondary" :secondary="secondary" :icon="icon">
		<slot name="Icon">
			<Icon pack="general" name="close"/>
		</slot>
		<slot v-if="!icon">Close</slot>
	</button>
</template>

<script>
import Icon from "@/components/Core/Icon";
export default {
	name: "Button",
	props: {
		secondary: {
			type: Boolean,
			default: false
		},
		icon: {
			type: Boolean,
			default: false,
		}
	},
	components: {
		Icon,
	}
}
</script>

<style lang="stylus">
button
	padding: .25rem .5rem
	font-size: 1rem
	line-height: 1.5rem
	border-radius: .25rem
	display: grid
	grid-auto-flow: column
	grid-gap: .25rem
	svg
		height: 1.5rem
		height: 1.5rem
button[primary]
	background: var(--btnBg)
	color: var(--txtColor)
	border: none
button[secondary]
	background: transparent
	border: none
	color: var(--btnText)
button[icon]
	padding: .25rem
</style>