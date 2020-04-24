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
	$lDiff = .25
	html, body
		width: 100%
		min-height: 100%
		margin: 0
	:root
		// Hues
		--hA: 220
		--hB: 184
		--hC: 147
		--hD: 325
		// Hue (Background)
		--hBg: 219
		// Saturation
		--s: 24%
		// Lightness
		--l:  48%
		--lL: 'calc(var(--l) * %s)' % (1 + $lDiff)
		--lD: 'calc(var(--l) * %s)' % (1 - $lDiff)
		// Lightness (Background)
		--lBg:  'calc(var(--l) * %s)'   % (1 - (2 * $lDiff))
		--lBgL: 'calc(var(--lBg) * %s)' % (1 + $lDiff)
		--lBgD: 'calc(var(--lBg) * %s)' % (1 - $lDiff)
		

	#nav
		display: none
</style>
