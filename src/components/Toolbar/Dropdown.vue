<template>
	<div class="dropdown" :open="false" :style="{'--ddItems': items}">
		<Button icon class="size" @click="menu" @blur="menu" x-ref="menu">
			<template #icon>
				<slot name="Icon"/>
			</template>
		</Button>
		<div ref="menu" class="menu" :hidden="true" :vertical="vertical">
			<slot name="Items" :item="item"/>
		</div>
	</div>
</template>

<script>
import Core from "@/components/Core/"
export default {
	name: "ToolbarDropdown",
	components: {
		...Core
	},
	methods: {
		// ui methods
		menu(e) {
			let ref = e.currentTarget.getAttribute("x-ref")
			if (ref != undefined) {
				this.$refs[ref].toggleAttribute("hidden")
				this.$refs[ref].parentElement.toggleAttribute("open")
			}
		},
		item(e) {
			console.log(e)
			let target = e.target.parentElement
			this.$emit("select", target.getAttribute("x-val"))
		}
	},
	props: {
		items: {
			type: Number,
			required: true,
			validator: function (value) {
				return value >= 0
	  		}
		},
		vertical: {
			type: Boolean,
			default: false,
		}
	},
}
</script>

<style lang="stylus">
HSL(h, s = var(--s), l = var(--l)) {'hsl(%s, %s, %s)' % (h s l)};
.dropdown
	position: relative
	width: 2.75rem
	--L: var(--l)
	&[open] button svg #caret
		transform: rotateX(180deg)
	& > button
		width: 2.75rem
		background: #f0ff0f
		background: HSL(var(--H), l: var(--L));
		svg
			#caret
				transform-origin: center;
				transition: transform .2s;
	div.menu
		display: grid
		grid-gap: .25rem
		background: HSL(var(--H), l: var(--L))
		border-radius: .25rem
		margin: 1rem 0
		padding: .25rem
		position: absolute
		top: 100%
		left: 50%
		transform: translateX(-50%)
		z-index: 4
		button
			padding: 0
			min-width: unset
			width: 1.5rem
			height: 1.5rem
			&:hover
				background: HSL(var(--H), l: var(--lL))
	div.menu:not([vertical])
		grid-template-columns: repeat(var(--ddItems), minmax(1.5rem, min-content))
		grid-template-rows: 1.5rem
	div.menu[vertical]
		grid-template-columns: 36px
		grid-template-rows: repeat(var(--ddItems), minmax(1.5rem, min-content))
		button 
			padding: 0 6px
			width: 100%
</style>