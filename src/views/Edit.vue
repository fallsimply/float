<template>
	<div view="edit">
		<Editor/>
		<ButtonGroup style="position: relative;top: 1rem">
			<Button>
				<template #Icon>
					<Icon name="done"/>
				</template>
				Done
			</Button>
			<Button secondary/>
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