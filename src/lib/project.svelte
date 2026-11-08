<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { Project, Technology } from '#lib';
	import Md from './md.svelte';
	import ShevronUp from '@tabler/icons-svelte-runes/icons/chevron-up';
	import ShevronDown from '@tabler/icons-svelte-runes/icons/chevron-down';

	let { project, filter }: { project: Project; filter: Technology[] } = $props();

	let showDescription = $state(true);
</script>

<article>
	<header>
		<button onclick={() => (showDescription = !showDescription)}>
			{#if showDescription}
				<ShevronUp size={16} />
			{:else}
				<ShevronDown size={16} />
			{/if}
		</button>
		{project.name} ({#each project.stack as tech (tech.name)}<span
				class={`stack ${filter.find((x) => x == tech) != null ? 'selectedFilter' : ''}`}
			>
				{tech.name}
			</span>{/each})
	</header>
	{#if showDescription}
		<section class="content" transition:slide>
			<section class="link">
				{#if project.repo}<a href={project.repo}>Исходный код</a>{/if}
				{#if project.link}<a href={project.link}>{project.link}</a>{/if}
			</section>
			{#if project.images}
				<section class="images">
					{#each project.images as image (image.url)}
						<img title={image.description} alt={image.description} src={image.url} />
					{/each}
				</section>
			{/if}
			<Md text={project.description} />
		</section>
	{/if}
</article>

<style>
	.stack:not(:last-child)::after {
		content: ', ';
	}
	.selectedFilter {
		color: red;
	}
	header {
		font-size: small;
		font-weight: 700;
		margin-bottom: 1rem;
		color: #111827;
	}
	article {
		background-color: #ffffff;
		padding: 16px;
		margin: 8px;
		border-radius: 16px;
	}
	.images {
		display: flex;
		overflow-x: scroll;
		max-height: 456px;
	}
	.images > img {
		max-width: 100%;
		margin: 4px;
		object-fit: contain;
	}
	@media print {
		article {
			padding: 4px;
			margin: 4px;
		}
		header {
			margin-bottom: 8px;
		}
		button,
		.images {
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
