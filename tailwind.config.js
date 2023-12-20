/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    // Custom text sizes sometimes look cooler - remove if want to use Tailwind default
    fontSize: {
      "xs": ".688rem", // 12px
      "sm": "0.813rem", // 13px 
      "base": '1rem', // 16px
      "lg": "1.25rem", // 20px
      "xl": "1.5rem", // 24px
      "2xl": "2rem", // 32px
      "3xl": "2.25rem", // 36px
      "4xl": "4rem",  // 64px 
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "primary": "var(--gray-12)",
        "secondary": "var(--gray-11)",
        "accent": "var(--color-accent)",
        "muted": "var(--gray-10)",
        "disabled": "var(--gray-9)",
        "inverted": "var(--gray-inverted)",
        "background": "var(--gray-1)",
        "outline": {
          DEFAULT: "var(--color-border)",
          "high": "var(--gray-6)",          
        },        
        "ui": {
          DEFAULT: "var(--gray-3)",
          "low": "var(--gray-2)",
          "mid": "var(--gray-4)",
          "high": "var(--gray-5)",
          "accent": "var(--color-accent-light)",          
        },
        "focus": {
          DEFAULT: "var(--gray-12)",          
        },        
      },  
      gridTemplateRows: {
        'app-layout': "minmax(auto,56px) 1fr auto", // header, content, footer        
      },      
      gridTemplateColumns: {
        'sidebar-layout': "minmax(auto, 320px) 1fr", // Sidebar, content       
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}