<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { Project } from '#lib';
	import Md from './md.svelte';
	import ShevronUp from '@tabler/icons-svelte-runes/icons/chevron-up';
	import ShevronDown from '@tabler/icons-svelte-runes/icons/chevron-down';

	let { project }: { project: Project } = $props();

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
		{project.name} ({project.stack.map((t) => t.name).join(', ')})
	</header>
	{#if showDescription}
		<section class="content" transition:slide>
			{#if project.repo}<section class="link"><a href={project.repo}>Исходный код</a></section>{/if}
			{#if project.link}<section class="link"><a href={project.link}>{project.link}</a></section>{/if}
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
		button, .images, .link {
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
