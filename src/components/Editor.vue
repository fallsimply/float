<template>
	<div class="editor">
		<Toolbar/>
		<div ref="e" class="content" contenteditable="true"></div>
	</div>
</template>

<script>
	import Toolbar from "@/components/Toolbar"
	export default {
		name: "Editor",
		components: {
			Toolbar
		},
		mounted() {
			this.$refs["e"].innerHTML = "<div>Hello World hello world HeLlO wOrLd hello world Hello World</div>"
		},
		methods: {
			// utility methods
			split() {

			},
			inline(name, attrObj = {}, ...attrStrFuncs) {
				const { anchorOffset: start, focusOffset: end, anchorNode: element, text: toString } = getSelection()

				if (element != undefined && element.parentElement.matches(".editor .content[contenteditable] *") === true) {
					let attrs = ""
					for (const name in attrObj) {
						let value = attrObj[name]
						attrs += ` ${name}="${value}"`
					}
					console.log(attrs)

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
							return `<${name}${attrs}>${t}</${name}>`
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
		}
	}
</script>

<style lang="stylus">
HSL(h, s = var(--s), l = var(--l)) {'hsl(%s, %s, %s)' % (h s l)};
.editor
	padding: 1rem
	background: HSL(var(--hBg), l: var(--lH))
	border-radius .25rem
	display: grid
	grid-gap: 1rem

	.content
		padding: 1rem
		background: HSL(219, l: 100%)
		border-radius: .25rem
		color: var(--txtColor)
		a
			color: #5D7198
	.editor::after
		content: hi
.editor > .content
	--txtColor: HSL(var(--hBg), l: var(--lH))
</style>