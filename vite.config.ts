import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		sveltekit()
	],

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/assets/styles/_variables.scss" as *; @use "src/assets/styles/_mixins.scss" as *;',
			},
		},
	},
	build: {
		cssMinify: true,
		minify: true,
		sourcemap: true,
		manifest: true
	}
});
