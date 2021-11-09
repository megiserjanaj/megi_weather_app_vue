module.exports = {
    purge: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false,
     theme: {
       extend: {},
       colors: {
        white: {
            50: '#ffffff',
            100: '#ffffff',
            200: '#ffffff',
            300: '#ffffff',
            400: '#ffffff',
            500: '#ffffff',
            600: '#e6e6e6',
            700: '#bfbfbf',
            800: '#999999',
            900: '#7d7d7d'
        },
        gunSmoke: {
            50: '#f9f9f9',
            100: '#f3f3f3',
            200: '#e1e1e1',
            300: '#cecece',
            400: '#aaaaaa',
            500: '#858585',
            600: '#787878',
            700: '#646464',
            800: '#505050',
            900: '#414141'
        },
        stratos: {
            50: '#f3f3f6',
            100: '#e8e7ed',
            200: '#c5c4d2',
            300: '#a2a1b7',
            400: '#5c5a81',
            500: '#16134b',
            600: '#141144',
            700: '#110e38',
            800: '#0d0b2d',
            900: '#0b0925'
        },
        blackRock: {
            50: '#f3f3f5',
            100: '#e6e6eb',
            200: '#c2c1cd',
            300: '#9d9baf',
            400: '#535173',
            500: '#090637',
            600: '#080532',
            700: '#070529',
            800: '#050421',
            900: '#04031b'
        },
       },
       fontSize: {
           xs: '0.6rem',
           sm: '0.875rem',
           base: '1rem',
           xl: '1.25rem',
           xxl: '1.5rem',
           xxxl: '1.875rem',
           xxxxl: '2.25rem',

       },
       fontFamily: {
           sans: "'Source Sans Pro', sans-serif",
           anton: "'Anton', sans-serif"
       },
       /*
       screens: {
           'xs': '320px',
           'sm': '640px',
           'md': '768px',
           'lg': '1024px',
           'xl': '1280px'
       }
       */
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }