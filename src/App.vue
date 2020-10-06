<template>
	<div id="app">
		<LogoHeader/>
		<router-view/>
	</div>
</template>

<script>
import LogoHeader from "@/components/Header"
export default {
	components: {
		LogoHeader
	}
}
</script>

<style lang="stylus">
/* Variables */
$lDiff = .25
/* Functions */
HSL(h, s = var(--s), l = var(--l)) {'hsl(%s, %s, %s)' % (h s l)};
HSLA(h, s = var(--s), l = var(--l), a) {'hsla(%s, %s, %s, %s)' % (h s l a)};

html, body
	width: 100%
	min-height: 100%
	margin: 0
	font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Open Sans', sans-serif
button, h1, h2, h3, h4, h5, h6
	font-family: inherit
#nav
	display: none

body
	/* Hues */
	--hA: 220
	--hB: 184
	--hC: 147
	--hD: 325
	--hBg: 219

	/* Saturation */
	--s: 24%
	--sH: calc(var(--l) / 2)

	/* Lightness */
	--l:  48%
	--lL: 'calc(var(--l) * %s)' % (1 + $lDiff)
	--lD: 'calc(var(--l) * %s)' % (1 - $lDiff)
	--lH: calc(var(--l) / 2)

	/* Lightness (Background) */
	--lBg:  calc(var(--l) * 2)
	--lBgL: 'calc(var(--lBg) * %s)' % (1 + $lDiff)
	--lBgD: 'calc(var(--lBg) * %s)' % (1 - $lDiff)
	--lBgH: calc(var(--lBg) / 2)

	/* Text Color */
	--txtColor: HSL(var(--hBg), l: 100%)

	/* Button Color */
	--btnBg: HSL(var(--hBg), l: var(--lH))
	--btnText: var(--btnBg)
	--btnFocus: HSL(var(--hA), l: 66%)

	/* Background */
	--bgPrimary: HSL(var(--hBg), l: var(--lBgL))
	--bgCard: HSL(var(--hBg), l: 100%)

	/* Alpha Overlay */
	--brightenColor: HSLA(0, 0%, 100%, .2)
	--brighten: linear-gradient(var(--brightenColor), var(--brightenColor))

body:not([light])
	--lBg: 24%

	--btnText: var(--txtColor)
	--btnFocus: var(--txtColor)
	--btnTxtHover: HSLA(var(--hBg), l: 100%, a: .25)

	--bgPrimary: HSL(var(--hA), l: var(--lBgD))
	--bgCard: HSL(var(--hBg), l: var(--lBg))

body
	background: var(--bgPrimary)

#app
	padding: 1.5rem
	display: grid
	grid-gap: 1.5rem
</style>
