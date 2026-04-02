import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['chrome >= 49', 'safari >= 10'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Catatan Uang',
        short_name: 'CATAT',
        description: 'Kelola keuangan harian dengan mudah',
        theme_color: '#0ea5e9',
        icons: [
          {
            src: 'icon-192x192.png', // Pastikan file ini ada di folder public
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
