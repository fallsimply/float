<template>
	<div class="modal" ref="modal" :hidden="!show">
		<h1>{{ title }}</h1>
		<input type="text" v-model="url">
		<ButtonGroup>
			<Button>
				<template #Icon>
					<Icon pack="general" name="done"/>
				</template>
				Add Link
			</Button>
			<Button secondary @click.native="toggle">
				<template #Icon>
					<Icon pack="general" name="close"/>
				</template>
				Close
			</Button>
		</ButtonGroup>
	</div>
</template>

<script>
import Core, { ButtonGroup } from "@/components/Core"

export default {
	name: "ToolbarPrompt",
	props: {
		title: {
			type: String,
			default: "Prompt"
		},
		show: {
			type: Boolean,
			default: true
		},
	},
	data: () => ({
		url: ""
	}),
	components: {
		...Core,
		ButtonGroup
	},
	methods: {
		finish() {
			this.$emit("done", url)
		},
		toggle() {
			this.$emit("show", !this.show)
		}
	}
}
</script>

<style lang="stylus">
HSL(h, s = var(--s), l = var(--l)) {'hsl(%s, %s, %s)' % (h s l)};
div.modal
	background: var(--bgCard)
	color: var(--txtColor)
	height: 8rem
	width: 16rem
	position: absolute
	z-index: 1
	padding: 1rem
	border-radius: 0.25rem;
	box-shadow: 0px 2px 8px HSL(var(--hBg), l: var(--lD))
	display: grid
	grid-gap: .5rem
	h1
		font-size: 1.5rem
		text-align: center
		margin: 0
	input
		display: block
		border: 2px solid var(--txtColorBrdr)
		height: 1.5rem
		padding .5rem
		border-radius: .25rem
</style>