import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from 'dotenv';
import obfuscatorPlugin from "vite-plugin-javascript-obfuscator";

config();

export default defineConfig({
  plugins: [
    react(), // Tu configuración original de React
    obfuscatorPlugin({
      options: {
        debugProtection: true,
        // Aquí puedes añadir más opciones de ofuscación según tus necesidades
        // Consulta la documentación de javascript-obfuscator para más detalles:
        // https://github.com/javascript-obfuscator/javascript-obfuscator
      },
    }),
  ],
  define: {
    // Si necesitas la definición de process.env, asegúrate de mantenerla aquí
    'process.env': process.env
  }
});