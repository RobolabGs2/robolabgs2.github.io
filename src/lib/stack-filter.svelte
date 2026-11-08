<script lang="ts">
	import { Technology } from '#lib';
	import { onMount } from 'svelte';

	let {
		stack,
		filter = $bindable()
	}: {
		stack: [Technology, number][];
		filter: Technology[];
	} = $props();

	let stackByType = $derived(
		Array.from(
			stack
				.reduce(
					(acc, value) => {
						const type = value[0].type;
						acc.get(type)?.push(value) || acc.set(type, [value]);
						acc
							.get(type)
							?.sort((a, b) => (a[0].name.toLowerCase() < b[0].name.toLocaleLowerCase() ? -1 : 1));
						return acc;
					},
					new Map<Technology['type'], [Technology, number][]>([
						['стек', []],
						['доменная область', []],
						['язык', []],
						['игровой движок', []],
						['база данных', []],
						['библиотека/фреймворк/API', []],
						['CI/CD', []]
					])
				)
				.entries()
		)
	);

	let hashReady = $state(false);
	onMount(() => {
		try {
			const params = new URLSearchParams(location.hash.slice(1));

			filter = (params.get('filter') ?? '')
				.split(',')
				.filter(Boolean)
				.map((x) => Technology.deserialize(x))
				.filter((x) => x != null);

			hashReady = true;
		} catch (e) {
			console.error(e);
		}
	});

	$effect(() => {
		if (!hashReady) return;

		const params = new URLSearchParams(location.hash.slice(1));
		params.set('filter', filter.map((x) => x.serialize()).join(','));

		const nextHash = params.toString();
		if (location.hash.slice(1) !== nextHash) {
			location.hash = nextHash;
		}
	});
</script>

<article class="stack">
	<header>Фильтр проектов</header>
	{#each stackByType as stack (stack[0])}
		<header>
			{stack[0]}
		</header>
		{#each stack[1] as [tech, count] (tech.name)}
			<label>
				<input name="filter" bind:group={filter} value={tech} type="checkbox" />{tech.name} ({count})
			</label>
		{/each}
	{/each}
</article>

<style>
	.stack {
		display: flex;
		flex-direction: column;
		align-items: start;
		background-color: #ffffff;
		padding: 16px;
		margin: 8px;
		border-radius: 12px;
		overflow-y: auto;
		border: 1px solid #e5e7eb;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
	}
	label {
		margin-top: 4px;
	}
	input {
		margin-right: 8px;
	}
	header {
		font-weight: bold;
		margin: 4px;
		align-self: center;
	}
	header:first-child {
		font-size: large;
	}
	@media (max-width: 888px) {
		.stack {
			margin: 4px;
		}
	}
	@media print {
		.stack {
			border: 0;
			clip: rect(0 0 0 0);
			height: 1px;
			margin: -1px;
			overflow: hidden;
			padding: 0;
			position: absolute;
			white-space: nowrap;
			width: 1px;
		}
	}
</style>
