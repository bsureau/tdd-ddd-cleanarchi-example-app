import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcss from './postcss.config';

// https://vite.dev/config/
export default defineConfig({
    root: path.resolve(__dirname, './'),
    plugins: [react()],
    resolve: {
        alias: {
            '@adapters': path.resolve(__dirname, '../../../adapters'),
            '@core-logic': path.resolve(__dirname, '../../../core-logic'),
        },
    },
    css: { postcss },
});
