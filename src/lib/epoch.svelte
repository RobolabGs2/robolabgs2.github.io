<script lang="ts">
	import type { Epoch, Technology } from '#lib';
	import Md from './md.svelte';
	import Project from './project.svelte';

	let { epoch, filter }: { epoch: Epoch; filter?: Technology[] } = $props();
</script>

<article>
	<header title={epoch.place.full}>{epoch.status}, {epoch.place.short}</header>
	{#if epoch.comment}
		<section><Md text={epoch.comment} /></section>
	{/if}
	<section>
		{#each epoch.projects.filter( (p) => (filter ? p.stack.some( (t) => filter.find((v) => v == t) ) : true) ) as project (project.name)}
			<Project project={project} />
		{/each}
	</section>
</article>

<style>
	article {
		margin: 8px;
		border-top: 1px solid black;
	}
</style>
