<template>
	<div class="editor">
		<div class="toolbar">
			<button class="bold" @click="bold">
				<svg viewBox="0 0 24 24">
					<use xlink:href="/icons/format.svg#bold" fill="currentColor"/>
				</svg>
			</button>
			<button class="italic" @click="italic">
				<svg viewBox="0 0 24 24">
					<use xlink:href="/icons/format.svg#italic" fill="currentColor"/>
				</svg>
			</button>
			<button class="strike" @click="strike">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon">
					<use xlink:href="/icons/format.svg#strikethrough" fill="currentColor"/>
				</svg>
			</button>
			<button class="underline" @click="underline">
				<svg viewBox="0 0 24 24">
					<use xlink:href="/icons/format.svg#underline" fill="currentColor"/>
				</svg>
			</button>
			<button class="link" @click="link" ref="link">
				<svg viewBox="0 0 24 24">
					<use xlink:href="/icons/general.svg#link" fill="currentColor"/>
				</svg>
			</button>
			<div class="dropdown" :open="false">
				<button class="size" @click="menu" @blur="menu" x-ref="sizeMenu">
					<svg viewBox="0 0 36 24">
						<use xlink:href="/icons/format.svg#text_size" width="24" fill="currentColor"/>
						<use xlink:href="/icons/caret.svg#icon" width="12" fill="currentColor" x="24" id="caret"/>
					</svg>
				</button>
				<div ref="sizeMenu" class="menu sizeMenu" :hidden="true">
					<button x-val="h1" @click="size">
						<svg viewBox="0 0 24 24">
							<use xlink:href="/icons/headings.svg#h1" fill="currentColor"/>
						</svg>
					</button>
					<button x-val="h2" @click="size">
						<svg viewBox="0 0 24 24">
							<use xlink:href="/icons/headings.svg#h2" fill="currentColor"/>
						</svg>
					</button>
					<button x-val="h3" @click="size">
						<svg viewBox="0 0 24 24">
							<use xlink:href="/icons/headings.svg#h3" fill="currentColor"/>
						</svg>
					</button>
				</div>
			</div>
		</div>
		<div ref="e" class="content" contenteditable="true"></div>
	</div>
</template>

<script>
	export default {
		name: "Editor",
		mounted() {
			this.$refs["e"].innerHTML = "<div>Hello World hello world HeLlO wOrLd hello world Hello World</div>"
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
			// utility methods
			inline(name, obj = {}, ...attrFuncs) {
				const { anchorOffset: start, focusOffset: end, anchorNode: element, text: toString } = getSelection()

				if (element != undefined && element.parentElement.matches(".editor .content[contenteditable] *") === true) {
					let attr = ""
					for (const k in obj) {
						attr += ` ${k}="${obj[k]}"`
					}
					console.log(attr)

					// compute left and right to allow bidirectional selection
					// so selecting like ==> and <== work the same
					let { l, r } = start < end
						? { l: start, r: end }
						: { l: end, r: start }
					let { parentNode: parent } = element
					let regex = new RegExp(parent.innerText.substring(l, r), 'g')
					let found = false

					console.log("this: ", this.$refs['e'])
				
					parent.innerHTML = parent.innerHTML.replace(regex, (t, i) => {
						console.log(`Left: ${l}; Right: ${r} Index ${i}; Left >= Index: ${i >= l}`)

						if (!found && i >= l ) {
							found = true;
							return `<${name}${attr}>${t}</${name}>`
						} else {
							return t
						}
					})
				}
			},
			// format methods
			bold() {
				this.inline("b")
			},
			italic() {
				this.inline("i")
			},
			strike() {
				this.inline("s")
			},
			underline() {
				this.inline("u")
			},
			link() {
				this.inline("a", {"href": "#sample"})
			},
			// stateful format methods - requires event and/or attribute
			size(e) {
				let val = e.currentTarget.getAttribute("x-val")
				console.log(val)
				this.inline(val)
			},
		}
	}
</script>

<style lang="stylus">
	hsl(h, s = var(--s), l = var(--l))
		'hsl(%s, %s, %s)' % (h s l)
	.editor
		margin: 1.5rem
		padding: 1rem
		background: hsl(var(--hBg), l: calc(var(--l) * 2))
		border-radius .25rem
		display: grid
		grid-gap: 1rem

		.toolbar
			height: 2rem
			display: grid
			grid-auto-flow: column
			grid-template-rows: 2rem
			grid-template-columns: repeat(auto-fit, minmax(2rem, min-content))
			grid-gap: 1rem
			color: #fff

			& > :nth-child(1n)
				--H: var(--hA)
			& > :nth-child(2n)
				--H: var(--hB)
			& > :nth-child(3n)
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
				background: hsl(var(--H), l: var(--L))
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
			.dropdown
				position: relative
				width: 2.75rem
				--L: var(--l)
				&[open] button svg #caret
					transform: rotateX(180deg)
				& > button
					width: 2.75rem
					background: hsl(var(--H), l: var(--L))
					svg
						#caret
							transform-origin: center;
							transition: transform .2s;
				div.menu
					display: grid
					grid-template-columns: repeat(3, minmax(1.5rem, min-content))
					grid-template-rows: 1.5rem
					grid-gap: .25rem
					background: hsl(var(--H), l: var(--L))
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
							background: hsl(var(--H), l: var(--lL))

		.content
			padding: 1rem
			background: hsl(219, l: var(--lBgL))
			border-radius: .25rem
			color: #2F394C
			a
				color: #5D7198
</style>