/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'color-carlos': '#2196f3',
			},
			backgroundImage: {
				'radial-gradient': 'linear-gradient(89.7deg, rgb(0, 0, 0) -10.7%, rgb(53, 92, 125) 88.8%);',
				
			},
			backgroundColor: {
				'backgroundCarouselBlack': 'rgba(199, 239, 255, 0.1)',
			},
		}
	},
	plugins: [],
}
