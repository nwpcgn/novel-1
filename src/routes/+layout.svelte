<script lang="ts">
	import './layout.css'

	let { children } = $props()
	const nav = [
		{
			name: 'Lobby',
			href: '/',
			hidden: false
		},
		{
			name: 'Story',
			href: '/story',
			hidden: false
		},
		{
			name: 'Battle',
			href: '/battle',
			hidden: false
		},
		{
			name: 'Settings',
			href: '/demo',
			hidden: false
		}
	]
</script>

<div class="navbar bg-neutral text-neutral-content">
	<div class="flex-1">
		<button class="btn text-xl btn-neutral">daisyUI</button>
	</div>

	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			{#each nav as { name, href }, i (href)}
				<li>
					<a href="#{href}">{name}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
<main class="main">
	{@render children()}
</main>
