<script lang="ts">
    export let
        href     : string = '#',
        className: string = '',
        target   : '_blank' | '_self' | '_parent' | '_top' = '_self';
</script>

<a
    data-sveltekit-preload-data="hover"
    class="{className ? className + ' ' : ''}link"
    {href}
    {target}
    on:click
>
    <slot />
</a>

<style lang="scss">
    $class: '.link';

    #{$class} {

    }
</style>