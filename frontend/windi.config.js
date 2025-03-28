import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {},
  },
  extract: {
    include: ['src/**/*.{js,ts,jsx,tsx}'],
  },
  plugins: [],
})
