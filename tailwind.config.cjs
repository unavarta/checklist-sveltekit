/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: { 
    colors: {
      gruvlight:{
          text:"#282828",
          bg:"#fbf1c7",
          border:"#d5c4a1",
          aqua:"#8ec07c",
          green:"#b8bb26",
          yellow:"#fabd2f",
          orange:"#fe8019",
          blue:"83a598"
      },
      gruvdark:{
          text:"#fbf1c7",
          bg:"#282828",
          border:"#3c3836",
          aqua:"#689d6a",
          green:"#98971a",
          yellow:"#d79921",
          orange:"#d65d0e",
          blue:"458588"
      },
      code: {
        bg: "#161616",
        border: "#2c2c2c",
        green: "#00f671",
        text: "#DDDDDD",
        darkgreen: "#00AB4F",
        placeholder:"#999999"
      }
    },
    extend: {
      fontFamily: {
        sans: ['Space Mono', ...defaultTheme.fontFamily.mono],
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

