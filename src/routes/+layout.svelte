<script lang="ts">
    import "$src/app.scss";
    import { Container } from "$components";
    import { Header } from '$sections';
</script>

<svelte:head>
    <meta charset="utf-8" />
    <link rel="icon" href="./favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>ABC Академия</title>
</svelte:head>

<Container className="app-container">
    <!-- <Header /> -->
    <div>
        <video src='./bg_video.mp4' autoplay muted loop controls={false} />
    </div>

    <main class="app-main">
        <slot />
    </main>
</Container>

<style lang="scss">
    .app-main {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
    }
    video {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        object-fit: cover;
        backdrop-filter: gray(20);
    }
    div {
        &::after {
            content: '';
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            // background-color: rgba(#000, .6);
        }
    }
</style>