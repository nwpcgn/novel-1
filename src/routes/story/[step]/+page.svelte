<script lang="ts">
	let { data } = $props()
	const maxSteps = 3
	let current = $derived(data?.step)
	let next = $derived(Math.min(parseInt(current) + 1, maxSteps))
</script>

{#key current}
	<section
		class="page nwp img-page"
		style="background-image: url('./img/drink_milk2.png');">
	</section>

	<section class="nwp page center">
		<div class="space-y-16 p-4 text-center">
			<h3 class="h3 opacity-75">Step {current}</h3>

			{#if current != next}
				<div>
					<a href="#/story/{next}" class="preset-filled btn btn-sm">Next</a>
				</div>
			{:else}
				<div>
					<a href="#/story" class="preset-filled btn btn-sm">Back</a>
				</div>
			{/if}
		</div>
	</section>
{/key}
