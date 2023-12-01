import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-node';
import path from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        preprocess({
            scss: {
                sourceMap: true,
                prependData: '@use "src/assets/styles/_variables.scss" as *; @use "src/assets/styles/_mixins.scss" as *;',
            },
            postcss: true,
        }),
        vitePreprocess()
    ],

    kit: {
        adapter: adapter({
            precompress: true
        }),
        alias: {
            $sections: path.resolve("./src/components/sections"),
            $tags: path.resolve("./src/components/tags"),
            $components: path.resolve("./src/components"),

            $styles: path.resolve("./src/assets/styles"),
            $lib: path.resolve("./src/lib"),
            $src: path.resolve("./src"),
        },
    },
};

export default config;
