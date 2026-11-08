<script lang="ts">
	import type { Resume, Technology } from '#lib';
	import Epoch from './epoch.svelte';
	import Project from './project.svelte';
	import IconMail from '@tabler/icons-svelte-runes/icons/mail';
	import IconGithub from '@tabler/icons-svelte-runes/icons/brand-github';
	import IconTelegram from '@tabler/icons-svelte-runes/icons/brand-telegram';
	import StackFilter from './stack-filter.svelte';
	let { resume, filter = $bindable([]) }: { resume: Resume; filter: Technology[] } = $props();

	let stack = $derived(
		Array.from(
			[...resume.jobs, ...resume.education]
				.flatMap((e) => e.projects.flatMap((p) => p.stack))
				.concat(resume.pets.flatMap((e) => e.stack))
				.reduce((counts, tech) => {
					counts.set(tech, (counts.get(tech) || 0) + 1);
					return counts;
				}, new Map<Technology, number>())
				.entries()
		)
	);

	let age = $derived((Date.now() - +resume.birth) / (1000 * 60 * 60 * 24 * 365));
	let experience = $derived(
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
</script>

<svelte:head>
	<title>Резюме {resume.name}</title>
</svelte:head>
<article class="body">
	<StackFilter {stack} bind:filter />
	<main>
		<header>{resume.name}, {years(age)}, стаж {years(experience)}</header>
		<article>
			<header>Контакты</header>
			<section class="contacts">
				{#each resume.contacts as contact (contact.link)}
					{#if contact.type == 'email'}
						<IconMail /><a href={`mailto:${contact.link}`}>{contact.link}</a>
					{:else if contact.type == 'GH'}
						<IconGithub /><a href={`https://github.com/${contact.link}`}>{contact.link}</a>
					{:else if contact.type == 'TG'}
						<IconTelegram /><a href={`https://t.me/${contact.link.substring(1)}`}>{contact.link}</a>
					{/if}
				{/each}
			</section>
		</article>
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
				<header>Pet-проекты</header>
				<section>
					{#each resume.pets.filter( (p) => (filter.length ? p.stack.some( (t) => filter.find((v) => v == t) ) : true) ) as project (project.name)}
						<Project {project} {filter} />
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
	}
	@media print {
		.body {
			background-color: #ffffff;
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
	.contacts {
		display: flex;
		align-items: center;
	}
	.contacts > * {
		padding-right: 16px;
	}
	.epochs header {
		text-align: center;
		font-size: x-large;
		border-top: 1px #111827 solid;
	}
</style>
