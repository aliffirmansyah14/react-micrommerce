/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         keyframes: {
            "fade-left": {
               "0%": {
                  transform: "translateX(100%)",
               },
               "100%": {
                  transform: "translateX(0%)",
               },
            },
            scale: {
               "0%": {
                  transform: "scale(0)",
               },
               "100%": {
                  transform: "scale(1)",
               },
            },
         },
         animation: {
            "to-left": "fade-left .2s ease-in-out ",
            "scale-in": "scale .3s ease-in-out",
         },
      },
   },
   plugins: [],
   darkMode: "class",
};
