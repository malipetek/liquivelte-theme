<!-- filename: LazyComponent.svelte -->
<script>
let index = 0;

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