<template>
	<div relative>
		<div class="toolbar">
			<button v-for="btn in btns" :key="btn" :class="btn" @click="$emit(btn)">
				<Icon :name="btn" pack="format"/>
			</button>
			<button class="link" ref="link" @click="togglePrompt('link')" @blur="togglePrompt('link')">
				<Icon name="link"/>
			</button>
			<Dropdown :items="headings.length" @select="$emit('size', $event)">
				<template #Icon>
					<Icon name="text_size" pack="format" caret/>
				</template>
				<template #Items="{ item }">
					<span v-for="num in headings" :key="num">
						<button :class="`h${num}`" @click.stop="item($event)" :x-val="`h${num}`">
							<Icon pack="headings" :name="`h${num}`"/>
						</button>
					</span>
				</template>
			</Dropdown>
			<button class="theme" ref="theme" >
				<Icon name="link"/>
			</button>
		</div>
		<Prompt title= "Enter Link URL" :show.sync="prompts.link"/>
	</div>
</template>

<script>
	import Dropdown  from '@/components/Toolbar/Dropdown'
	import Icon from "@/components/Core/Icon"
	import Prompt from "@/components/Toolbar/Prompt"
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
			Dropdown,
			Icon,
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
		height: 2rem
		min-width: 2rem
		font-size: 1.5rem
		border: 0
		padding: .25rem
		border-radius: .25rem
		display: grid
		grid-template-columns: repeat(auto-fit, minmax(.75rem, 1.5rem))
		background: HSL(var(--H), l: var(--L))
		--L: var(--l)
		color: inherit
		&:hover
			--L: var(--lL)
		&:focus
			outline: none
		svg
			height: 1.5rem;
			border-radius: .25rem
		svg > path
			fill: currentColor
</style>