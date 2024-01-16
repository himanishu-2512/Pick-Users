/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      white: "#ffffff",
      placeholder: "#a3aac2",
      section: {
        divider: "#e0e3eb",
        fill: "#f9f9fb",
      },
      black: {
        light: "#e0e3eb",
        DEFAULT: "#3d445c",
      },
      
      orange: {
        light: "#fffbeb",
        DEFAULT: "#d97706",
      },
    
      blue: {
        light: "#ecf0ff",
        DEFAULT: "#5752ff",
        dark: "#3d37f7",
      },
    
      
      
    }
  },
  plugins: [
  function ({addUtilities}){
    const newUtility={
      ".no-scrollbar::-webkit-scrollbar":{
        display:"none",
      },
      ".no-scrollbar":{
        "scrollbar-width":0,
        "-ms-overflow-style":"none",
      }
    }
    addUtilities(newUtility)
  }

  ],
}

