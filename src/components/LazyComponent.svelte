<!-- filename: LazyComponent.svelte -->
<script>
	export let when = false;
	export let component;
	let loading;
	$: if (when) {
		load();
	}
	function load() {
		loading = component();
	}
</script>
{#if when}
	{#await loading then { default: Component }}
		<Component />
	{/await}
{/if}