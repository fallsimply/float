<template>
	<ButtonGroup class="logoWrapper" style="justify-content: space-between">
		<div class="logoHeader" style="display: flex">
				<Logo style="width: 2rem; height: 2rem"/>
				<h1>float editor</h1>
		</div>
		<Dropdown @click.native="toggleTheme" :items="3">
				<template #Icon>
					<Icon name="icon" pack="toggle"/>
				</template>
				<template #Text>Switch Theme</template>
		</Dropdown>
	</ButtonGroup>
</template>

<script>
import Logo from "@/components/Logo"
import Core, { ButtonGroup, Dropdown } from "@/components/Core"
export default {
	name: "FloatHeader",
	components: {
		Logo,
		...Core,
		ButtonGroup,
		Dropdown
	},
	methods: {
		toggleTheme() {
				window.Theme.toggle();
		},
		clearTheme() {
			window.Theme.clearTheme();
		}
	}
}
</script>

<style lang="stylus">
.logoHeader
	display: flex
	h1
		font-size: 1.5rem
		line-height: 2rem
		margin: 0 .5rem
		color: #5D7198
</style>