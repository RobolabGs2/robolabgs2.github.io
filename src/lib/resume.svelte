<script lang="ts">
	import type { Resume, Technology } from '#lib';
	import Epoch from './epoch.svelte';

	let { resume, filter }: { resume: Resume; filter?: Technology[] } = $props();

	const stack = $derived(
		[...resume.jobs, ...resume.education]
			.flatMap((e) => e.projects.flatMap((p) => p.stack))
			.filter(deduplicate())
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

<article>
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
		<article class="stack">
			{#each stack as tech (tech.name)}
				<div>
					{tech.name}
				</div>
			{/each}
		</article>
	</main>
</article>

<style>
	article {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	main {
		max-width: 704px;
	}
</style>
