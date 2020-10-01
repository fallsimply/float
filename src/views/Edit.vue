<template>
	<div view="edit" style="padding: 1.5rem">
		<Editor/>
		<ButtonGroup style="position: relative;top: 1rem">
			<Button>
				<template #icon>
					<Icon name="done"/>
				</template>
				<template>
					Done
				</template>
			</Button>
			<Button secondary/>
		</ButtonGroup>
		<ButtonGroup style="position: relative;top: 1rem">
			<Button @click="window.Theme.toggle()">Switch Theme</Button>
		</ButtonGroup>
	</div>
</template>

<script>
	import Core, { ButtonGroup } from "@/components/Core"
	import Editor from "@/components/Editor"
	
	export default {
		name: "Edit",
		components: {
			Editor,
			...Core,
			ButtonGroup
		}
	}
</script>

<style lang="stylus">
[view="edit"] {
	display: grid;
	grid-auto-columns: 1fr;
	grid-gap: 1rem;
}
</style>