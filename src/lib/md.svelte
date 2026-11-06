<script lang="ts">
	/* eslint-disable svelte/no-at-html-tags */
	import { compile } from 'mdsvex';
	let { text }: { text: string } = $props();
</script>
{#await compile(text)}
	...
{:then md} 
	{@html md?.code}
{/await}
