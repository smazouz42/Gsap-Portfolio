import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
				fira : ['var(--font-fira)'],
			},
      keyframes: {
        animate: {
          '0%': { left: '0', transform: 'translateX(-100%)' },
          '100%': { left: '100%', transform: 'translateX(0%)' },
        },
      },
      animation: {
        animate: 'animate 4s infinite linear',
      },
    },
  },
  plugins: [],
} satisfies Config;
