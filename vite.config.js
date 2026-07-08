import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [
                    ['babel-plugin-react-compiler', {}]   // ← Enables React Compiler
                ],
            },
        }),
    ],
    server: {
        port: 3000,             // Same port as CRA
        open: true,             // Auto open browser
    },
});
