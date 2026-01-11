/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Enhanced color system
        paper: "#FAFAF8",
        ink: {
          DEFAULT: "#1A1917",
          soft: "#4A4845",
          muted: "#78756F",
        },
        surface: "#FFFFFF",
        border: {
          DEFAULT: "#E5E3DC",
          soft: "#F0EEEA",
        },
        accent: {
          DEFAULT: "#8B2C2C",
          soft: "#A64848",
          light: "#F4EDED",
          dark: "#6B2222",
        },
        hover: "#F7F6F3",
        success: {
          DEFAULT: "#2C5F2D",
          light: "#EDF5ED",
        },
        error: {
          DEFAULT: "#8B2C2C",
          light: "#F9EDED",
        },
        warning: {
          DEFAULT: "#D97706",
          light: "#FEF3C7",
        },
        info: {
          DEFAULT: "#1E40AF",
          light: "#DBEAFE",
        },
      },
      fontFamily: {
        serif: ["Crimson Pro", "Georgia", "serif"],
        sans: [
          "Work Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      fontSize: {
        xs: ["0.8125rem", "1.5"],
        sm: ["0.9375rem", "1.5"],
        base: ["1.0625rem", "1.5"],
        lg: ["1.25rem", "1.5"],
        xl: ["1.5rem", "1.35"],
        "2xl": ["2rem", "1.35"],
        "3xl": ["2.75rem", "1.2"],
        "4xl": ["3.5rem", "1.2"],
        "5xl": ["4rem", "1.1"],
      },
      lineHeight: {
        tight: "1.2",
        snug: "1.35",
        normal: "1.5",
        relaxed: "1.65",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        88: "22rem",
        112: "28rem",
      },
      maxWidth: {
        container: "1200px",
        content: "720px",
        reading: "680px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(26, 25, 23, 0.05)",
        md: "0 4px 12px rgba(26, 25, 23, 0.08)",
        lg: "0 8px 24px rgba(26, 25, 23, 0.12)",
        xl: "0 12px 32px rgba(26, 25, 23, 0.15)",
        "inner-sm": "inset 0 1px 2px rgba(26, 25, 23, 0.05)",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      transitionDuration: {
        fast: "150ms",
        base: "250ms",
        slow: "350ms",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        shimmer: "shimmer 1.5s infinite",
        "spin-slow": "spin 0.8s linear infinite",
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
    },
  },
  plugins: [],
};
