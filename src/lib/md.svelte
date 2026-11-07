<script lang="ts" module>
	import { compile } from 'mdsvex';
	type PreprocessorReturn =
		| {
				code: string;
				data?: Record<string, unknown>;
				map?: string;
		  }
		| undefined;
	const cache = new Map<string, PreprocessorReturn>();
	function getMd(text: string) {
		if (cache.has(text)) {
			return cache.get(text);
		}
		return compile(text).then((res) => {
			cache.set(text, res as any as PreprocessorReturn);
			return res;
		});
	}
</script>

<script lang="ts">
	/* eslint-disable svelte/no-at-html-tags */
	let { text }: { text: string } = $props();
</script>

<article>
	{#await getMd(text)}
		...
	{:then md}
		{@html md?.code}
	{/await}
</article>

<style>
	article {
		padding-left: 16px;
	}
</style>
