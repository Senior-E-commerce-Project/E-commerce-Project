/ @type {import('tailwindcss').Config} */
@tailwind base;
@tailwind components;
@tailwind utilities;
module.exports = {
    content: [
      "./src//*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }