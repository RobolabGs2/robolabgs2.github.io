<script lang="ts">
	import type { Resume, Technology } from '#lib';
	import Epoch from './epoch.svelte';

	let { resume, filter = $bindable([]) }: { resume: Resume; filter: Technology[] } = $props();

	const stack = $derived(
		[...resume.jobs, ...resume.education]
			.flatMap((e) => e.projects.flatMap((p) => p.stack))
			.filter(deduplicate())
	);
	const stackByType = $derived(
		stack
			.reduce((acc, value) => {
				acc.get(value.type)?.push(value) || acc.set(value.type, [value]);
				acc
					.get(value.type)
					?.sort((a, b) => (a.name.toLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1));
				return acc;
			}, new Map<Technology['type'], Technology[]>())
			.entries()
	);
	const age = $derived((Date.now() - +resume.birth) / (1000 * 60 * 60 * 24 * 365));
	const experience = $derived(
		(Date.now() - +resume.jobs.reduce((j1, j2) => (j1.start < j2.start ? j1 : j2)).start) /
			(1000 * 60 * 60 * 24 * 365)
	);
	function years(y: number): string {
		y |= 0;
		const m = (y | 0) % 10;
		switch (m) {
			case 0:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
				return `${y} лет`;
			case 1:
				return `${y} год`;
			case 2:
			case 3:
			case 4:
				return `${y} года`;
		}
		throw new Error(`${y} not a number`);
	}
	function deduplicate<T>() {
		const visited = new Set();
		return (item: T) => {
			if (visited.has(item)) return false;
			visited.add(item);
			return true;
		};
	}
</script>

<article class="body">
	<article class="stack">
		{#each stackByType as stack (stack[0])}
			<header>
				{stack[0]}
			</header>
			{#each stack[1] as tech (tech.name)}
				<label
					><input
						name="filter"
						bind:group={filter}
						value={tech}
						type="checkbox"
					/>{tech.name}</label
				>
			{/each}
		{/each}
	</article>
	<main>
		<header>{resume.name}, {years(age)}, стаж {years(experience)}</header>
		<article class="epochs">
			<section>
				<header>Опыт работы</header>
				<section>
					{#each resume.jobs as epoch (epoch.start)}
						<Epoch {epoch} {filter} />
					{/each}
				</section>
			</section>
			<section>
				<header>Образование</header>
				<section>
					{#each resume.education as epoch (epoch.start)}
						<Epoch {epoch} {filter} />
					{/each}
				</section>
			</section>
		</article>
	</main>
</article>

<style>
	:global(*) {
		box-sizing: border-box;
		margin: 0px;
		padding: 0px;
	}
	.body {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: start;
		background-color: #f9fafb;
		font-family: 'Roboto', sans-serif;
		font-optical-sizing: auto;
		font-size: small;
		color: #1f1f1f;
	}
	@media (max-width: 888px) {
		.body {
			flex-direction: column;
		}

		.stack {
			margin: 4px;
		}
	}
	main {
		max-width: 704px;
		margin: 16px;
		padding: 4px;
		overflow-y: auto;
	}
	header {
		font-size: medium;
		font-weight: 700;
		margin-bottom: 1rem;
		color: #111827;
	}
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
	.stack label {
		margin-top: 4px;
	}
	.stack input {
		margin-right: 8px;
	}
	.stack header {
		font-weight: bold;
		margin: 4px;
		align-self: center;
	}
</style>
