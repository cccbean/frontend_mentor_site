/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				mont: ['Montserrat', 'sans-serif'],
				fraun: ['Fraunces', 'serif'],
				outfit: ['Outfit', 'sans-serif'],
				'red-hat': ['Red Hat Display', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
				'lexend-deca': ['Lexend Deca', 'sans-serif'],
				'big-shoulder': ['Big Shoulders Display', 'sans-serif'],
				'kumbh-sans': ['Kumnh Sans', 'sans-serif'],
				'leage-spartan': ['League Spartan', 'sans-serif'],
				manrope: ['Manrope', 'sans-serif']
			}
		}
	},
	plugins: []
};
