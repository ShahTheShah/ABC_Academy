<script lang="ts">

    type TButtonType = 'button' | 'reset' | 'submit' | null | undefined;

    export let
        type     : TButtonType = 'button',
        className: string      = '';

</script>

<button
    {type}
    class="{ className ? className + ' ' : ''}button"
    on:click
>
    <slot />
</button>