import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from 'dotenv';
import obfuscatorPlugin from "vite-plugin-javascript-obfuscator";
import path from 'path';

config();

export default defineConfig({
    plugins: [
        react(),
        /*obfuscatorPlugin({
            options: {
                debugProtection: true,
                // Aquí puedes añadir más opciones de ofuscación
            },
        }),*/
    ],
    define: {
        'process.env': process.env
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    // ------------------------------------
});