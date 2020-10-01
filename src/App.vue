<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">Editor</router-link>
		</div>
		<router-view/>
	</div>
</template>

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
	--btnFocus: HSL(var(--hBg), l: var(--lL))

	/* Background */
	--bgPrimary: HSL(var(--hBg), l: var(--lBgL))
	--bgCard: HSL(var(--hBg), l: 100%)

	/* Alpha Overlay */
	--brightenColor: HSLA(0, 0%, 100%, .2)
	--brigthen: linear-gradient(var(--brightenColor), var(--brightenColor))

@media (prefers-color-scheme: dark)
	body:not(light)
		--lBg: 24%

		--btnText: var(--txtColor)
		--btnFocus: var(--txtColor)
		--btnTxtHover: HSLA(var(--hBg), l: 100%, a: .25)

		--bgPrimary: HSL(var(--hA), l: var(--lBgD))
		--bgCard: HSL(var(--hBg), l: var(--lBg))

body
	background: var(--bgPrimary)
</style>
