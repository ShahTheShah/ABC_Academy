<script lang="ts">
    export let className: string = '';
</script>

<div
    class="{ className ? className + ' ' : ''}container"
>
    <slot />
</div>
