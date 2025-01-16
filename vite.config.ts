import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/alfa-chat/",
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, './src')}`,
      '@widjets': `${path.resolve(__dirname, './src/widjets')}`,
      '@features': `${path.resolve(__dirname, './src/features')}`,
      '@entities': `${path.resolve(__dirname, './src/entities')}`,
      '@hooks': `${path.resolve(__dirname, './src/app/shared/hooks')}`,
      '@pages': `${path.resolve(__dirname, './src/pages')}`,
      '@icons': `${path.resolve(__dirname, './src/app/shared/icons/index.ts')}`,
      '@ui': `${path.resolve(__dirname, './src/app/shared/ui/index.ts')}`,
      '@shared-types': `${path.resolve(__dirname, './src/app/shared/types')}`,
      '@providers': `${path.resolve(__dirname, './src/app/providers')}`,
      '@styles': `${path.resolve(__dirname, './src/app/styles')}`,
      '@layouts': `${path.resolve(__dirname, './src/app/layouts')}`
    },
  }
})
