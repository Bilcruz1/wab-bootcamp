/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			fontFamily: {
				roboto: ['"Roboto Flex"', 'sans-serif'],
				satoshi: ['satoshi'],
				playpen: ['"Playpen Sans"', 'sans-serif'],
			},
			backgroundImage: {
				'custom-gradient': 'linear-gradient(90deg, #6A9113, #141517)',
			},
			// fontFamily: {
			// 	Robotoflex: ['Roboto Flex', 'sans - serif'],
			// },
			keyframes: {
				fadeSlideDown: {
					'0%': { opacity: '0', transform: 'translateY(-20%)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeSlideUp: {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(-20%)' },
				},
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-20%)' }, // shift exactly one track width
				},

				// marquee: {
				// 	'0%': { transform: 'translateX(0)' },
				// 	'100%': { transform: 'translateX(-100%)' }, // shift full width
				// },
			},
			animation: {
				fadeSlideDown: 'fadeSlideDown 0.5s ease-in-out',
				fadeSlideUp: 'fadeSlideUp 0.5s ease-in-out',
				marquee: 'marquee 15s linear infinite',
			},
		},
	},
	plugins: [],
	corePlugins: {
		textFillColor: false, // Disabling the core plugin to create custom utility
	},
};
