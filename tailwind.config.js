/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode:'jit',
  theme: {
    extend: {
      colors:{
        black:"#000000",
        white:"#ffffff"
      },
      fontFamily:{
        playFair:["Playfair Display","serif "],
        openSans:["Open Sans","sans-serif"]
      },
      content:{
        logo:"url ('./assets/logo.png')",
        logoHead:"url('./assets/logoHead.png')"
      }
    },
    screens:{
      xs:'480px ',
      sm:'768px',
      md:'1060px'
    }
  },
  plugins: [],
}

