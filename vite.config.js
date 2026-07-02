import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'build',        // Keeps same output folder as CRA
    },
    server: {
        port: 3000,             // Same port as CRA
        open: true,             // Auto open browser
    },
});
