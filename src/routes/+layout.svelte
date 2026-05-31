<script lang="ts">
	import './layout.css'

	let { children } = $props()
</script>

<header class="sticky top-0 z-50 bg-surface-50-950 shadow-xl">
	<div
		class="container mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-10 p-4">
		<a href="#/" class="h3">NWP-Story</a>
		<p class="collapse text-xs opacity-60 md:visible">Nachtschmerz Projekt</p>
		<a href="https://skeleton.dev" target="_blank" class="btn preset-filled"
			>Documentation</a>
	</div>
</header>
<main class="main">
	{@render children()}
</main>
