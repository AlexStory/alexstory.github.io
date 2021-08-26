module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.md",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ["Open Sans", "Helvetica", "Arial", "Sans-Serif"]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
