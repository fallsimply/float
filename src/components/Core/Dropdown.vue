<template>
	<div class="dropdown" :open="open" :style="{'--ddItems': items}">
		<div class="touchTarget" @click.self="toggle">
			<Button :icon="icon" @click.native="toggle">
				<template #Icon>
					<slot name="Icon"/>
				</template>
				<slot name="Text"/>
			</Button>
			<ButtonGroup ref="contents" :hidden="!show" :vertical="vertical">
				<slot :handle="handle"/>
			</ButtonGroup>
		</div>
	</div>
</template>

<script>
import test from "@/components/Core/"
console.log(test)

export default {
	name: "Dropdown",
	components: {
		...test,
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
		},
		icon: {
			type: Boolean,
			default: false,
		}
	},
	onMo
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
		margin-top: 1rem
	.buttonGroup[vertical]
		grid-template-columns: unset
		grid-template-rows: repeat(auto-fit, 2rem)
		height: max-content
	.touchTarget
		width: max-content
		height: max-content
		margin: -1rem -3rem
		padding: 1rem 3rem
</style>