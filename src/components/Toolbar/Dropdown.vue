<template>
	<div class="dropdown" :open="open" :style="{'--ddItems': items}">
		<Button icon @click.native="toggle">
			<template #Icon>
				<slot name="Icon"/>
			</template>
		</Button>
		<ButtonGroup ref="contents" :hidden="!show" :vertical="vertical">
			<slot :handle="handle"/>
		</ButtonGroup>
	</div>
</template>

<script>
import Core, { ButtonGroup } from "@/components/Core/"
export default {
	name: "ToolbarDropdown",
	components: {
		...Core,
		ButtonGroup
	},
	data() {
		return {
			open: false,
			show: false
		}
	},
	methods: {
		// ui methods
		toggle() {
			this.open = !this.open
			this.show = !this.show
		},
		handle(e) {
			this.toggle()
			let target = e.target.parentElement
			this.$emit("select", target.getAttribute("x-val"))
		},
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
		svg
			#caret
				transform-origin: center;
				transition: transform .2s;
	.buttonGroup
		background: HSL(var(--H), l: var(--L))
		grid-template-columns: repeat(auto-fit, 2rem)
		grid-auto-flow: column
		padding: .25rem
		border-radius: .25rem
		width: max-content
		grid-gap: .25rem
		
		position: relative
		top: 1rem
	.buttonGroup[vertical]
		grid-template-columns: unset
		grid-template-rows: repeat(auto-fit, 2rem)
		height: max-content
</style>