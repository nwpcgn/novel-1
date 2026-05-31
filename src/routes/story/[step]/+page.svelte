<script lang="ts">
	let { data } = $props()
	const maxSteps = 3
	let current = $derived(data?.step)
	let next = $derived(Math.min(parseInt(current) + 1, maxSteps))
</script>

{#key current}
	<section class="page nwp center opacity-50">
		<div class="p-4">
			<img src="/img/drink-milk-1.png" alt="img" />
		</div>
	</section>

	<section class="nwp page center">
		<div class="space-y-16 p-4 text-center">
			<h3 class="h3 opacity-75">Step {current}</h3>

			{#if current != next}
				<div>
					<a href="#/story/{next}" class="btn preset-filled btn-sm">Next</a>
				</div>
			{:else}
				<div>
					<a href="#/story" class="btn preset-filled btn-sm">Back</a>
				</div>
				
				<iframe src="https://www.pornhub.org/embed/68274a4683bca" frameborder="0" width="560" height="315" scrolling="no" allowfullscreen></iframe>
			{/if}
		</div>
	</section>
{/key}
