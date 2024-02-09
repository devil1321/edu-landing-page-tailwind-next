import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'sky-figma':'#00C4CC',
        'purple-figma':'#8B3DFF',
        'green-figma':'#4CCC4C',
        'red-figma':'#FF5252',
        'white-figma':'#f1f1f1',

      },
      fontSize:{
        d1:'72px',
        d2:'64px',
        h1:'56px',
        h2:'48px',
        h3:'40px',
        h4:'32px',
        h5:'24px',
        h6:'16px',
        h7:'12px',
        headline:'20px',
        'f-18':'18px',
        'f-14':'14px',
        'f-13':'13px'
      },
    },
  },
  plugins: [],
};
export default config;
