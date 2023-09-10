import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	// output:"server" // -> si queremos que toda la pag sea server side
	output: 'hybrid', // -> si queremos que combine entre ssr, static y dynamic
});
