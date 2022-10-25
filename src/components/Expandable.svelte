<script>
	import { slide } from 'svelte/transition'
	export let expanded = false;
	let clazz;
	export { clazz as class };
	export let label = '';
	export let transparent = false;
	export let onchange = () => {};
</script>
{#if transparent }
	<div class="expandable {`${clazz || ''}`}">
		<slot></slot>
	</div>
{:else}
	<div class="expandable {`${clazz || ''}`}" class:expanded>
		<div class="expandable-header" >
			<div class="expandable-label-left" on:click="{() => expanded = !expanded}">	
				<div class="expandable expandable-btn" >
				</div>
				{#if label }
				<div class="expandable-label f-14 ml-10 text-black"> { label } </div>
				{/if}
			</div>
			<div class="handle-content">
				<slot name="handle" />
			</div>
		</div>
		{#if expanded}
		<div transition:slide 
			 on:introend="{() => onchange(expanded)}"
			 on:outroend="{() => onchange(expanded)}"
		>
			<slot/>
		</div>
		{/if}
	</div>
{/if}
<style>
	.handle-content {
		float: right;
	}
	.expandable-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.expandable-label-left {
		display: flex;
		align-items: center;
		cursor: pointer;
	}
	.expandable-label {
		height: 22px;
	}
	.expandable.expandable-btn {
		position: relative;
		width: 24px;
		height: 24px;
	}
	
	.expandable.expandable-btn:before, .expandable.expandable-btn:after{
		content: '';
		display: block;
		width: 1px;
		height: 24px;
		position: absolute;
		background-color: #AAAAAA;
		left: 12px;
		transition: transform .3s cubic-bezier(0.86, 0, 0.07, 1);
	}
	.expandable.expandable-btn:after{
		transform: rotate(90deg);
	}
	.expanded .expandable.expandable-btn:after {
		transform: rotate(135deg);
	}
	.expanded .expandable.expandable-btn:before {
		transform: rotate(45deg);
	}
</style>