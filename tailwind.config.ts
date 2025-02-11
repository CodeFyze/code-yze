import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
    darkMode: ["class"],
    content: {
    files: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
    extract
  },
  theme: {
    screens, // Tailwind's default screens, in `rem`
    fontSize, // Tailwind's default font sizes, in `rem` (including line heights)
  	extend: {
  		fontFamily: {
  			sans: [
  				'Inter',
  				'ui-sans-serif',
  				'system-ui',
  				'sans-serif',
  				'Apple Color Emoji',
  				'Segoe UI Emoji',
  				'Segoe UI Symbol',
  				'Noto Color Emoji'
  			]
  		},
  		backgroundImage: {
        "blueBg": "url('/blue-background.png')",
        "whiteBg": "url('/white-background.png')",
        "humanWithoutArrows": "url('/human-with-laptop-without-arrows.png')",
        "womanWithLaptop": "url('/women-with-laptop.png')",
        "element3": "url('/element3.png')",
        "innovationBg": "url('/innovation-bg.png')",
        "innovationBgVertical": "url('/innovation-bg-vertical.png')",
        "topServicesBg": "url('/top-services-bg.png')",
        "topServicesBgVertical": "url('/top-services-bg-vertical.png')",
        "aboutUsBg": "url('/about-us-bg.png')",
  		},
  		screens: {
  			xs: '20rem'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
			'pulse-ring': {
			  '0%': {
				transform: 'scale(0.9)',
				opacity: '0.7',
			  },
			  '70%': {
				transform: 'scale(1.1)',
				opacity: '0',
			  },
			  '100%': {
				transform: 'scale(0.9)',
				opacity: '0',
			  },
			}
  		},
  		animation: {
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
			  'accordion-up': 'accordion-up 0.2s ease-out',
			  'pulse-ring': 'pulse-ring 1.5s infinite'
  		},
  	}
  },
  plugins: [
    fluid({
		checkSC144: false // default: true
	  }),
      require("tailwindcss-animate")
]
} satisfies Config;
