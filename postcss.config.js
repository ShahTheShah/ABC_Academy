import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: [
        autoprefixer,
        cssnano
    ]
};

export default config;