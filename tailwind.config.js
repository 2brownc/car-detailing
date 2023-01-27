/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pt_primary: '#88300a',
        pt_secondary: '#fec163',
        pt_tertiary: '#de4313',
        pt_quaternary: '#63a0fe',
        pt_quinary: '#13aede',
        pt_body: '#fff5e7',
        pt_border: '#88300a',
        //        pt_divider: '#fbc19d',
        pt_divider: '#fde0ce',
        pt_button: '#88300a',
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [
    require("daisyui")
  ],
}
