<script lang="ts">
    interface ISource {
        srcset: string;
        media : string;
    }

    export let
        src: string = '',
        alt: string = '',
        sources: ISource[] = [],
        className: string  = '';
</script>

<picture class="{className ? className + '__wrapper ' : ''}image__wrapper">
    {#each sources as source, i(i)}
        <source {...source} />
    {/each}
    <img
        {src} {alt}
        class="{className ? className + ' ' : ''}image"
   />
</picture>

<style lang="scss">
    $class: ".image";

    #{$class} {
        width: 100%; height: auto;
        object-fit: contain;
    }
</style>