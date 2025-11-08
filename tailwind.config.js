module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(210, 15%, 90%)",
        input: "hsl(210, 15%, 90%)",
        ring: "hsl(185, 70%, 32%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(210, 30%, 20%)",
        primary: {
          DEFAULT: "hsl(185, 70%, 22%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(185, 60%, 38%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        tertiary: {
          DEFAULT: "hsl(34, 45%, 75%)",
          foreground: "hsl(185, 70%, 22%)",
        },
        neutral: {
          DEFAULT: "hsl(210, 15%, 96%)",
          foreground: "hsl(210, 30%, 20%)",
        },
        success: "hsl(160, 60%, 35%)",
        warning: "hsl(40, 90%, 45%)",
        gray: {
          50: "hsl(210, 20%, 98%)",
          100: "hsl(210, 18%, 95%)",
          200: "hsl(210, 15%, 90%)",
          300: "hsl(210, 12%, 80%)",
          400: "hsl(210, 10%, 70%)",
          500: "hsl(210, 9%, 55%)",
          600: "hsl(210, 8%, 45%)",
          700: "hsl(210, 10%, 35%)",
          800: "hsl(210, 15%, 25%)",
          900: "hsl(210, 20%, 15%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(210, 15%, 96%)",
          foreground: "hsl(210, 30%, 20%)",
        },
        accent: {
          DEFAULT: "hsl(34, 45%, 75%)",
          foreground: "hsl(185, 70%, 22%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(210, 30%, 20%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(210, 30%, 20%)",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      fontSize: {
        'h1': ['2.488rem', { lineHeight: '1.2', letterSpacing: '-0.025em', fontWeight: '500' }],
        'h2': ['1.875rem', { lineHeight: '1.2', fontWeight: '500' }],
        'h3': ['1.563rem', { lineHeight: '1.2', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.5', fontWeight: '300' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '300' }],
        'button': ['0.938rem', { fontWeight: '400' }],
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      borderRadius: {
        lg: "8px",
        md: "6px",
        sm: "4px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
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
