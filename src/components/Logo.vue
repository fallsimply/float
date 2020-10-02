<template>
	<svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22 47C22 33.1929 33.1929 22 47 22H452C465.807 22 477 33.1929 477 47C477 164.617 387.745 261.387 273.273 273.273L222.753 274.5H72H22V47Z" id="color"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M22 47C22 33.1929 33.1929 22 47 22H452C465.807 22 477 33.1929 477 47C477 164.617 387.745 261.387 273.273 273.273C261.387 387.745 164.617 477 47 477C33.1929 477 22 465.807 22 452V47ZM222.753 274.5H72V425.253C150.025 414.254 211.754 352.525 222.753 274.5ZM72 224.5H249.5C339.045 224.5 413.103 158.193 425.253 72H72V224.5Z" fill="#5D7198" id="stroke"/>
	</svg>
</template>

<script>
export default {

}
</script>

<style>
#stroke {
	fill:#5D7198;
}
#color {
	fill: none;
}
@media (prefers-color-scheme: dark) {
	body:not([light]) #stroke {
		fill: #ffffff;
	}
	body:not([light]) #color {
		fill: #5D7198;
	}
}
</style>