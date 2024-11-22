import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://letorguez.github.io',
	base: 'monads-docs',
	integrations: [
		starlight({
			title: 'Monads',
			social: {
				github: 'https://github.com/lean-mind/monads',
			},
			sidebar: [
				{
					label: 'How to use',
					autogenerate: { directory: 'how-to-use' },
				},
				{
					label: 'Either',
					autogenerate: { directory: 'either' },
				},
				{
					label: 'Option',
					autogenerate: { directory: 'option' },
				},
				{
					label: 'Try',
					autogenerate: { directory: 'try' },
				},
				{
					label: 'Future',
					autogenerate: { directory: 'future' },
				},
				{
					label: 'IO',
					autogenerate: { directory: 'io' },
				},
			],
		}),
	],
});
