<script lang="ts">
    export let
        level: 1 | 2 | 3 | 4 | 5 | 6 = 2,
        className: string = '';

    $: baseClass = className ? className + ' ' : '';
</script>

{#if level === 1}
    <h1 class="{baseClass}title"><slot /></h1>

{:else if level === 2}
    <h2 class="{baseClass}title"><slot /></h2>

{:else if level === 3}
    <h3 class="{baseClass}title"><slot /></h3>

{:else if level === 4}
    <h4 class="{baseClass}title"><slot /></h4>

{:else if level === 5}
    <h5 class="{baseClass}title"><slot /></h5>

{:else if level === 6}
    <h6 class="{baseClass}title"><slot /></h6>

{/if}

<style lang="scss">
    $class: ".title";

    #{$class} {
        color: black;
    }
</style>