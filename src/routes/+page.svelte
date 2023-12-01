<script lang="ts">
    import { Title } from '$tags';
</script>

<div>
    <Title level={1}>ABC</Title>
</div>

<style lang="scss">
    div {
        :global(.title) {
            color: rgba(red, 1);
            font-size: 120px;
            text-shadow: 0px 0px 1px #fff;
        }
    }
</style>