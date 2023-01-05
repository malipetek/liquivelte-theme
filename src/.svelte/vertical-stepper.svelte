<script>
  import { getContext, setContext } from 'svelte';
  export let themeImports = getContext('svelteProps');
  export let rawIncludes = getContext('rawIncludes');
  export let lec = getContext('lec');

  import cachedLiquid from 'liquivelte-liquid.js';
  const liquid = cachedLiquid(lec);
  let index = 0;

  import { Stepper, Button } from 'framework7-liquivelte';
  import Icon from './icon.liquivelte';
  export let onChange = () => 1;
  export let onClick = () => 1;
  export let disabled = false;
  export let small;
  export let large;
  export let value = 0;
</script>

{#if value != 0 }
  <Stepper  classes="vertical " onChange="{onChange}" value="{ value }" small     lec={lec} />
{:else}
  <Button   
      onClick="{onClick}"
      large
      raised
      outline
      disabled="{ disabled }" 
      classes="bg-white"
           lec={lec} >
    <Icon  name="icon-plus" width="20"      lec={lec} />
  </Button>
{/if}

<style global lang="postcss">
  .stepper.vertical {
    z-index: 8;
    flex-direction: column-reverse;
    height: 120px;
    background-color: var(--f7-card-bg-color);
    & > * {
      height: 40px;
    }
    .stepper-button-plus:last-child {
      border-radius: var(--f7-stepper-border-radius) var(--f7-stepper-border-radius) 0 0;
    }
    .stepper-button-minus:first-child {
      border-radius: 0 0 var(--f7-stepper-border-radius) var(--f7-stepper-border-radius);
    }
    .stepper-input-wrap, .stepper-value {
      flex-shrink: 1;
      text-align: center;
      border-width: 0;
      border-left: var(--f7-stepper-border-width) solid var(--f7-theme-color);
      border-right: var(--f7-stepper-border-width) solid var(--f7-theme-color);
    }
    .stepper-input-wrap input, .stepper-value {
      width: calc(40px - var(--f7-stepper-border-width) * 2);
    }
  }
</style>