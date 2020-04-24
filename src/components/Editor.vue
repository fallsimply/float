<template>
	<div class="editor">
		<div class="toolbar">
			<button class="bold" @click="bold">
				<svg viewBox="0 0 24 24">
					<use xlink:href="/icons/bold.svg#icon" fill="currentColor"/>
				</svg>
			</button>
			<button class="italic" @click="italic">
				<svg viewBox="0 0 24 24">
					<use xlink:href="/icons/italic.svg#icon" fill="currentColor"/>
				</svg>
			</button>
			<button class="strike" @click="strike">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon">
					<use xlink:href="/icons/strikethrough.svg#icon" fill="currentColor"/>
				</svg>
			</button>
			<button class="underline" @click="underline">
				<svg viewBox="0 0 24 24">
					<use xlink:href="/icons/underline.svg#icon" fill="currentColor"/>
				</svg>
			</button>
			<button>
				<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M9 5.5c0 .8.7 1.5 1.5 1.5H14v10.5a1.5 1.5 0 103 0V7h3.5a1.5 1.5 0 100-3h-10C9.7 4 9 4.7 9 5.5zM4.5 12H6v5.5a1.5 1.5 0 103 0V12h1.5a1.5 1.5 0 100-3h-6a1.5 1.5 0 100 3z"/>
				</svg>
				<svg width="12" height="24" viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M5.64645 14.6464L0.853553 9.85355C0.538571 9.53857 0.761654 9 1.20711 9H10.7929C11.2383 9 11.4614 9.53857 11.1464 9.85355L6.35355 14.6464C6.15829 14.8417 5.84171 14.8417 5.64645 14.6464Z"/>
				</svg>

			</button>
		</div>
		<div ref="e" class="content" contenteditable="true"></div>
	</div>
</template>

<script>
	const inline = (self, name, obj) => {
		let attr = ""
		for (const key in obj) {
			attr += `${key}="${obj[key]}"`
		}

		console.log(getSelection())

		const { anchorOffset: start, focusOffset: end, baseNode: { parentNode: parent }, text: toString } = getSelection()
		const l = start < end ? start : end
		const r = start < end ? end   : start
		let regex = new RegExp(parent.innerText.substring(l, r), 'g')
		let found = false
	
		parent.innerHTML = parent.innerHTML.replace(regex, (t, i) => {
			let str = t

			console.log(`Left: ${l}; Index ${i}; Left >= Index: ${i >= l}`)

			if (!found && i >= l ) {
				found = true;
				str = `<${name}${attr}>${t}</${name}>`
			}

			console.log(str)

			return str
		})
	}
	export default {
		name: "Editor",
		mounted() {
			this.$refs["e"].innerHTML = "<div>Hello World hello world HeLlO wOrLd hello world Hello World</div>"
		},
		methods: {
			bold() {
				inline("b")
			},
			italic() {
				inline("i")
			},
			strike() {
				inline("s")
			},
			underline() {
				inline("u")
			},
			link() {

			},
			header() {
				
			},
		}
	}
</script>

<style lang="stylus" scoped>
	hsl(h, s = var(--s), l = var(--l)) 
		'hsl(%s, %s, %s)' % (h s l)
	.editor
		margin: 20px
		padding: 10px
		background: hsl(var(--hBg), l: calc(var(--l) * .5))
		border-radius 5px
		color: white
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
		display: grid
		grid-gap: 10px

		.toolbar
			height: 32px
			display: grid
			grid-auto-flow: column
			grid-template-rows: 32px
			grid-template-columns: repeat(auto-fit, 32px)
			grid-gap: 10px

			button
				height: 32px
				min-width: 32px;
				font-size: 24px
				border: 0
				padding: 4px
				color: white
				border-radius: 5px
				svg > path
					fill: currentColor
				&:nth-child(1n)
					background: hsl(var(--hA))
					&:hover
						background: hsl(var(--hA), l: var(--lL))
				&:nth-child(2n)
					background: hsl(var(--hB))
					&:hover
						background: hsl(var(--hB), l: var(--lL))
				&:nth-child(3n)
					background: hsl(var(--hC))
					&:hover
						background: hsl(var(--hC), l: var(--lL))
				&:nth-child(4n)
					background: hsl(var(--hD), l: 55%)
					&:hover
						background: hsl(var(--hD), l: 67%)

		.content
			padding: 10px
			background: hsl(219, l: var(--lBgL))
			border-radius: 5px
</style>