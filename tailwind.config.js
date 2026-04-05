/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        logo: ['"Irish Grover"', 'cursive'],
      },
      colors: {
        primary: {
          DEFAULT: "var(--color-primary-200)", 
          light: "var(--color-primary-100)",
          strong: "var(--color-primary-300)",
        },
        "primary-text": "var(--color-primary-text)",
        "secondary-text": "var(--color-secondary-text)",
        "container-bg": {
          basic: "var(--color-container-bg-basic)",
          transparent: "var(--color-container-bg-transparent)",
        },
        address: {
          free: "var(--color-address-free)",
          dynamic: "var(--color-address-dynamic)",
          reserved: "var(--color-address-reserved)",
          allocated: "var(--color-address-allocated)",
          remaining: "var(--color-address-remaining)",
        },
        status: {
          info: "var(--color-status-info)",
          success: "var(--color-status-success)",
          warning: "var(--color-status-warning)",
          error: "var(--color-status-error)",
        },
        "sid-bar": {
          bg: "var(--color-sid-bar-bg)",
          "primary-text": "var(--color-sid-bar-primary-text)",
          "secondary-text": "var(--color-sid-bar-secondary-text)",
          'active-bg': "var(--color-sid-bar-active-bg)",
          'haver-bg': "var(--color-sid-bar-haver-bg)"
        },
        form: {
          bg: "var(--color-form-bg)",
          "primary-text": "var(--color-form-primary-text)",
        },
      },
    },
  },
  plugins: [],
}