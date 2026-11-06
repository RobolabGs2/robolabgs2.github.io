<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { Project } from '#lib';
	import Md from './md.svelte';

	let { project }: { project: Project } = $props();

	let showDescription = $state(true);
</script>

<header>
	<button onclick={() => (showDescription = !showDescription)}>{#if showDescription}^{:else}>{/if}</button>
	{project.name} ({project.stack.map((t) => t.name).join(', ')})
</header>
{#if showDescription}
	<section transition:slide>
		{#if project.repo}<section><a href={project.repo}>Исходный код</a></section>{/if}
		{#if project.link}<section><a href={project.link}>{project.link}</a></section>{/if}
		{#if project.images}
			<section class="images">
			{#each project.images as image (image.url)}
				<img title={image.description} alt={image.description} src={image.url}/>
			{/each}
			</section>
		{/if}
		<Md text={project.description} />
	</section>
{/if}

<style>
	.images {
		display: flex;
		overflow-x: scroll;
		height: 456px;
	}
	.images > img {
		width: 100%;
		margin: 4px;
	}
</style>