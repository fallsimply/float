<template>
    <button class="exit" :primary="!secondary" :secondary="secondary" :square="square">
        <slot name="icon">
            <Icon pack="general" name="close"/>
        </slot>
        <slot>Close</slot>
    </button>
</template>

<script>
import Icon from "@/components/Core/Icon";
export default {
    name: "Button",
    props: {
        secondary: {
            type: Boolean,
            default: false
        },
        square: {
            type: Boolean,
            default: false,
        }
    },
    components: {
        Icon
    }
}
</script>

<style lang="stylus">
button
    padding: .25rem .5rem
    font-size: 1rem
    line-height: 1.5rem
    border-radius: .25rem
    display: grid
    grid-auto-flow: column
    grid-template-columns: 1.5rem 1fr
    grid-gap: .25rem
    svg
        height: 1.5rem
        height: 1.5rem
button[primary]
    background: var(--btnBg)
    color: var(--txtColor)
    border: none
button[secondary]
    background: transparent
    border: none
    color: var(--txtColor)
button[square]
    padding: .25rem
</style>