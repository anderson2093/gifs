/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",

  ],
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 640px) { ... }

      'md': '960px',
      // => @media (min-width: 768px) { ... }

      'lg': '1366px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1920px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '2040px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

