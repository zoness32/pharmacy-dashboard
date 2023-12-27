import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    colors: {
      'floatblue': {
        50: '#EDFAFF',
        100: '#D6F2FF',
        200: '#B5EBFF',
        300: '#83E1FF',
        400: '#48CDFF',
        500: '#1EAFFF',
        600: '#0691FF',
        700: '#007DFE',
        800: '#085FC5',
        900: '#0D539B',
        950: '#0E325D'
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
export default config
