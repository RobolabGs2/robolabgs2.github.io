<script lang="ts">
	import type { Epoch, Technology } from '#lib';
	import Md from './md.svelte';
	import Project from './project.svelte';

	let { epoch, filter }: { epoch: Epoch; filter: Technology[] } = $props();

	function dateToString(date: Date) {
		return `${(date.getUTCMonth() + 1).toString().padStart(2, '0')}.${date.getUTCFullYear()}`;
	}
</script>

<article>
	<header title={epoch.place.full}>
		{epoch.status}, {epoch.place.short},
		{dateToString(epoch.start)}–{#if epoch.end}{dateToString(epoch.end)}{:else}настоящее время{/if}
	</header>
	{#if epoch.comment}
		<section><Md text={epoch.comment} /></section>
	{/if}
	<section>
		{#each epoch.projects.filter( (p) => (filter.length ? p.stack.some( (t) => filter.find((v) => v == t) ) : true) ) as project (project.name)}
			<Project {project} {filter} />
		{/each}
	</section>
</article>

<style>
	article {
		margin: 8px;
		padding: 8px;
		border-radius: 16px;
		background-color: #fbfbfb;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	}
	header {
		font-size: medium;
		font-weight: 700;
		margin-bottom: 1rem;
		color: #111827;
	}
	@media print {
		header {
			margin-bottom: 8px;
		}
		article {
			background-color: #ffffff;
			box-shadow: none;
			margin: 4px;
		}
	}
</style>
