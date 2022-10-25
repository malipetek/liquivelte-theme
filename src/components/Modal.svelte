<script>
        export let open = false;
        let initialized = false;
        import liquid from '../liquivelte-liquid.js'
        import { onMount } from 'svelte';
        import { quintOut } from 'svelte/easing';
        import { scale } from 'svelte/transition';
        import { disableScrollOnBody, enableScrollOnBody } from '../scripts/utils.js';

        document.addEventListener('keyup', event => {
            if (event.which === 27) {
                open = false;
            }
        })
       onMount(() => {
            initialized = true;
        })
        document.body.addEventListener('shopify:added_to_cart', e => {
            open = false;
        });

        $: if(open) {
            disableScrollOnBody();
        } else {
            enableScrollOnBody(); 
        }
    </script>
    {% if open %}
    <div class="svelte-modal-container" class:initialized="{initialized}">
        <div class="svelte-modal__backdrop" on:click="{() => open = false }"></div>
        <div class="svelte-modal" transition:scale="{ { duration: 300, easing: quintOut } }">
            <div class="svelte-modal-close-icon" on:click="{() => open = false}"><svg width="48.083" height="48.083" viewBox="0 0 48.083 48.083"><g transform="translate(-340.825 -784.889) rotate(45)"><circle style="fill:#707070;opacity:0.8;" cx="17" cy="17" r="17" transform="translate(813 297)" /><line style="fill:none;stroke:#fff;stroke-linecap:round;stroke-width:2px;" y2="16" transform="translate(830 306)" /><line style="fill:none;stroke:#fff;stroke-linecap:round;stroke-width:2px;" x1="16" transform="translate(822 314)" /></g></svg></div>
            <slot />
        </div>
    </div>
    {% endif %}
    <style>
   
    </style>