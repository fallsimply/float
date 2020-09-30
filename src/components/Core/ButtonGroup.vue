<template>
    <div class="buttonGroup">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "ButtonGroup"
}
</script>

<style lang="stylus">
div.buttonGroup
    display: grid
    grid-gap: .5rem
    height: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(1.5rem, max-content))
    button:focus
        outline: none
        border: 2px solid var(--txtColor)
        padding: .125rem .375rem
        box-shadow: none
</style>