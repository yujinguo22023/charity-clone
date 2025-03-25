
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Montserrat', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				green: {
					50: '#f0f9f1',
					100: '#dcf1e0',
					200: '#bce3c4',
					300: '#8fcf9d',
					400: '#5fb673',
					500: '#3c9a53',
					600: '#2c7d40',
					700: '#266537',
					800: '#23512f',
					900: '#1f4429',
					950: '#0e2615',
				},
				blue: {
					50: '#eef8ff',
					100: '#d9eeff',
					200: '#bce0ff',
					300: '#8ecdff',
					400: '#59afff',
					500: '#338bff',
					600: '#1864f8',
					700: '#1652e5',
					800: '#1743bc',
					900: '#193b94',
					950: '#142657',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				"fade-in": {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"fade-out": {
					"0%": {
						opacity: "1"
					},
					"100%": {
						opacity: "0"
					}
				},
				"scale-in": {
					"0%": {
						opacity: "0",
						transform: "scale(0.97)"
					},
					"100%": {
						opacity: "1",
						transform: "scale(1)"
					}
				},
				"slide-down": {
					from: { transform: "translateY(-10px)", opacity: "0" },
					to: { transform: "translateY(0)", opacity: "1" }
				},
				"slide-up": {
					from: { transform: "translateY(10px)", opacity: "0" },
					to: { transform: "translateY(0)", opacity: "1" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.4s ease-out forwards",
				"fade-out": "fade-out 0.3s ease-out forwards",
				"scale-in": "scale-in 0.4s ease-out forwards",
				"slide-down": "slide-down 0.3s ease-out forwards",
				"slide-up": "slide-up 0.3s ease-out forwards"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
