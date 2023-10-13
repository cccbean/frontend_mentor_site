/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				mont: ['Montserrat', 'sans-serif'],
				fraun: ['Fraunces', 'serif'],
				outfit: ['Outfit', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
