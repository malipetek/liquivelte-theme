module.exports = {
  theme: {
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        "theme": "var(--f7-theme-color)",
        "themebg": "var(--f7-card-bg-color)"
      },
      fontMetrics: {
        sans: {
            capHeight: 2048,
            ascent: 2728,
            descent: -680,
            lineGap: 0,
            unitsPerEm: 2816,
        },
      },
    }
  },
  variables: {
    DEFAULT: {
      sizes: {
        small: '1rem',
        button: {
          size: '2rem'
        }
      },
      colors: {
        red: {
          50: '#ff3232',
        },
      }
    }
  },
  content: {
    files: ['src/**/*'],
    extract: {
      class: (content) => {
        return [...content.match(/class="([^"]+)"/gi)];
      },
      classes: (content) => {
        return [...content.match(/classes="([^"]+)"/gi)];
      }
    }
  },
  plugins: [require('tailwindcss-capsize')],

};