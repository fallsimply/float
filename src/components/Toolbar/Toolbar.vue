<template>
	<div relative>
		<ButtonGroup class="toolbar">
			<Button icon v-for="btn in btns" :key="btn"  @click="$emit(btn)">
				<template #icon>
					<Icon :name="btn" pack="format"/>
				</template>
			</Button>
			<Button icon ref="link" @click="togglePrompt('link')">
				<template #icon>
					<Icon name="link"/>
				</template>
			</Button>
			<Dropdown :items="headings.length" @select="$emit('size', $event)">
				<template #Icon>
					<Icon name="text_size" pack="format" caret/>
				</template>
				<template #Items="{ item }">
					<span v-for="num in headings" :key="num">
						<Button icon :class="`h${num}`" @click.stop="item($event)" :x-val="`h${num}`">
							<Icon pack="headings" :name="`h${num}`"/>
						</Button>
					</span>
				</template>
			</Dropdown>
			<Button icon class="theme" ref="theme" >
				<template #icon>
					<Icon name="link"/>
				</template>
			</Button>
		</ButtonGroup>
		<Prompt title= "Enter Link URL" :show.sync="prompts.link"/>
	</div>
</template>

<script>
	import Core, {ButtonGroup} from "@/components/Core"
	import { Dropdown, Prompt } from "@/components/Toolbar"
	export default {
		name: "Toolbar",
		data() {
			return {
				btns: [
					"bold",
					"italic",
					"strike",
					"underline"
				],
				headings: [
					1, 2, 3
				],
				prompts: {
					link: false
				}
			}
		},
		components: {
			...Core,
			ButtonGroup,
			Dropdown,
			Prompt,
		},
		methods: {
			togglePrompt(prompt) {
				this.prompts[prompt] = !this.prompts[prompt]
			}
		}
	}
</script>

<style lang="stylus">
HSL(h, s = var(--s), l = var(--l)) {'hsl(%s, %s, %s)' % (h s l)};
.toolbar
	height: 2rem
	display: grid
	grid-auto-flow: column
	grid-template-rows: 2rem
	grid-template-columns: repeat(auto-fit, minmax(2rem, min-content))
	grid-gap: 1rem
	color: #fff

	& > :nth-child(4n-3)
		--H: var(--hA)
	& > :nth-child(4n-2)
		--H: var(--hB)
	& > :nth-child(4n-1)
		--H: var(--hC)
	& > :nth-child(4n)
		--H: var(--hD)

	button
		// height: 2rem
		// min-width: 2rem
		// font-size: 1.5rem
		// border: 0
		// padding: .25rem
		// border-radius: .25rem
		display: grid
		grid-template-columns: repeat(auto-fit, minmax(.75rem, 1.5rem))
		background: HSL(var(--H), l: var(--L))
		--L: var(--l)
		color: inherit
		&:hover
			--L: var(--lL)
		&:focus
			outline: none
		// svg
		// 	height: 1.5rem;
		// 	border-radius: .25rem
		// svg > path
		// 	fill: currentColor
</style>