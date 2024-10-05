const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/packages/**/*.tsx',
  ],
  darkMode: 'class', // Use class for now, switch to media later
  important: true,
  prefix: '',
  theme: {
    fontFamily: {
      display: ['Helix', ...defaultTheme.fontFamily.sans],
      heading: ['Helix', ...defaultTheme.fontFamily.sans],
      body: ['Helix', ...defaultTheme.fontFamily.sans],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      gridTemplateColumns: {
        'config-table': 'repeat(3, 1fr) auto',
      },
      boxShadow: {
        inputDark: '0 0 0 2px #013944',
        inputLight: '0 0 0 2px #E9F9FA',
      },
      height: {
        70: '278px',
      },
      width: {
        70: '278px',
      },
      borderWidth: {
        6: '6px',
      },
      keyframes: {
        rise: {
          '0%': { transform: 'translate(-50%, 100%)', opacity: '0' },
          '100%': { transform: 'translate(0%, 0%)', opacity: '1' },
        },
        set: {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(50%, 100%)', opacity: '0' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        rise: 'rise 0.6s ease-in-out forwards',
        set: 'set 0.6s ease-in-out forwards',
      },
    },
    colors: {
      transparent: '#00000000',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      bluebs: {
        25: '#EEF1FD',
        50: '#E3E9FF',
        100: '#CFD9FA',
        200: '#BBC8F6',
        300: '#9AAEF5',
        400: '#748EED',
        500: '#5777EB',
        600: '#4864C8',
        700: '#3A52A6',
        800: '#233575',
        900: '#152254',
        950: '#11172D',
      },
      juice: {
        25: '#FFFCF5',
        50: '#FFFAEB',
        100: '#FEF0C7',
        200: '#FEDF89',
        300: '#FCBF30',
        400: '#F5A312',
        500: '#F08B08',
        600: '#DC6803',
        700: '#B54708',
        800: '#93370D',
        900: '#7A2E0E',
        950: '#592109',
      },
      split: {
        25: '#FFFCF5',
        50: '#FFF7E8',
        100: '#FFEECC',
        200: '#FFE1A6',
        300: '#FFD27A',
        400: '#FFBB45',
        500: '#F0A41D',
        600: '#D98909',
        700: '#BD6800',
        800: '#7D4002',
        900: '#5C2C00',
        950: '#2E1605',
      },
      melon: {
        25: '#F6FEF9',
        50: '#EBFAF1',
        100: '#E1F7EA',
        200: '#C6EDD5',
        300: '#A5E0BD',
        400: '#86D5A5',
        500: '#68CA8F',
        600: '#4AA16C',
        700: '#357951',
        800: '#2A5139',
        900: '#1F3D2B',
        950: '#15281D',
      },
      peel: {
        25: '#FFF8F2',
        50: '#FFEAE0',
        100: '#FFDAC9',
        200: '#F7BCA1',
        300: '#F2936B',
        400: '#EE6F3A',
        500: '#E0561B',
        600: '#BD4513',
        700: '#943810',
        800: '#69280C',
        900: '#4C1B07',
        950: '#38180B',
      },
      grape: {
        25: '#FAFAFF',
        50: '#F6F2FD',
        100: '#EDE4FB',
        200: '#D8CAF8',
        300: '#C9AFF4',
        400: '#A57AED',
        500: '#8651E0',
        600: '#682DC2',
        700: '#461791',
        800: '#321361',
        900: '#3E1C96',
        950: '#2F1570',
      },
      crush: {
        25: '#FFF7FC',
        50: '#FFF0F9',
        100: '#FFECF7',
        200: '#FFD9EE',
        300: '#FFC5E6',
        400: '#FFB2DD',
        500: '#FF9FD5',
        600: '#E47FB8',
        700: '#C85F9A',
        800: '#9F306E',
        900: '#70003F',
        950: '#550833',
      },
      tangerine: {
        25: '#FFF9F5',
        50: '#FFF4ED',
        100: '#FFE6D5',
        200: '#FFD6AE',
        300: '#FF9C66',
        400: '#FF692E',
        500: '#FF4405',
        600: '#E62E05',
        700: '#BC1B06',
        800: '#97180C',
        900: '#771A0D',
        950: '#4F140C',
      },
      smoke: {
        25: '#FEFDFB',
        50: '#FBF9F6',
        75: '#F5F4EF',
        100: '#EFECE6',
        200: '#E7E3DC',
        300: '#D4D1C7',
        400: '#C0BBAD',
        500: '#9C9580',
        600: '#857C63',
        700: '#575344',
        800: '#3F3A2E',
        900: '#353026',
      },
      grey: {
        25: '#FCFCFC',
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#D6D6D6',
        400: '#A3A3A3',
        500: '#737373',
        600: '#525252',
        700: '#424242',
        800: '#292929',
        900: '#141414',
        950: '#0C0C03',
      },
      slate: {
        25: '#F7F7FA',
        50: '#F0EFF4',
        100: '#E1E0E8',
        200: '#A29FB7',
        300: '#5F5C7A',
        400: '#494361',
        500: '#39344E',
        600: '#2D293A',
        700: '#201E29',
        800: '#1A181F',
        900: '#16141D',
        950: '#131119',
      },
      error: {
        25: '#FFFBFA',
        50: '#FEF3F2',
        100: '#FEE4E2',
        200: '#FECDCA',
        300: '#FDA29B',
        400: '#F97066',
        500: '#F04438',
        600: '#D92D20',
        700: '#B42318',
        800: '#912018',
        900: '#7A271A',
        950: '#5C1D14',
      },
      warning: {
        25: '#FFFCF5',
        50: '#FFF7E8',
        100: '#FFEECC',
        200: '#FFE1A6',
        300: '#FFD27A',
        400: '#FFBB45',
        500: '#F08B08',
        600: '#D98909',
        700: '#BD6800',
        800: '#7D4002',
        900: '#5C2C00',
        950: '#2E1605',
      },
      success: {
        25: '#F6FEF9',
        50: '#EBFAF1',
        100: '#E1F7EA',
        200: '#C6EDD5',
        300: '#A5E0BD',
        400: '#86D5A5',
        500: '#68CA8F',
        600: '#4AA16C',
        700: '#357951',
        800: '#2A5139',
        900: '#1F3D2B',
        950: '#15281D',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      }
      addUtilities(newUtilities)
    },
    require('tailwindcss-animate'),
  ],
}
