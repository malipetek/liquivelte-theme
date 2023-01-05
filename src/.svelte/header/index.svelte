
<script>
  import { getContext, setContext } from 'svelte';
  export let themeImports = getContext('svelteProps');
  export let rawIncludes = getContext('rawIncludes');
  export let lec = getContext('lec');

  import cachedLiquid from 'liquivelte-liquid.js';
  const liquid = cachedLiquid(lec);
  let index = 0;

export let rawinclude_679e0e24;
export let rawinclude_3be65912;
export let rawinclude_602baf9d;
  import { cartStore, cartOpen } from '../../scripts/store.module.js';
  export let cart = themeImports['cart'];
  export let shop = themeImports['shop'];
  export let shopƒƒname; 
shop.name = themeImports['shopƒƒname'];
  const section = {};
  export let sectionƒƒsettings; 
section.settings = themeImports['sectionƒƒsettings'];
  export let menu_json = themeImports['menu_json'];
  section.settings.menu = JSON.parse(menu_json);
  import Navigation from './components/navigation.liquivelte';
  import PredictiveSearch from './components/predictive-search.liquivelte';
  import CartDrawer from './components/cart-drawer.liquivelte';
  import Logo from './components/logo.liquivelte';
  import DetailsModal from '../../snippets/details-modal.liquivelte';
  import { Appbar, Panel, Button, Link, Badge, Block, View, Page, Popup } from 'framework7-liquivelte'; 
  import Icon from "../../snippets/icon.liquivelte";
  export let settings = themeImports['settings']; 

  export let logo_html = themeImports['logo_html'];
  console.log('settings ', settings); 
  
  export let routes = themeImports['routes'];
  export let request = themeImports['request'];

  export let account_url = themeImports['account_url'];
  export let account_text = themeImports['account_text'];

  console.log('section header ', section);
  console.log('section.settings.menu ', section.settings.menu);

  cartStore.subscribe(state => {
    if(state) {
      cart = state;
    }
  });
</script>

<svg xmlns="http://www.w3.org/2000/svg" class="hidden">
  <symbol id="icon-search" viewbox="0 0 18 19" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.03 11.68A5.784 5.784 0 112.85 3.5a5.784 5.784 0 018.18 8.18zm.26 1.12a6.78 6.78 0 11.72-.7l5.4 5.4a.5.5 0 11-.71.7l-5.41-5.4z" fill="currentColor"/>
  </symbol>

  <symbol id="icon-close" class="icon icon-close" fill="none" viewBox="0 0 18 17">
    <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
  </symbol>
</svg>

  <Panel  resizable left reveal swipe swipeOnlyClose="{true}"    cart={cart} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  shopƒƒname={shopƒƒname} sectionƒƒsettings={sectionƒƒsettings}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} >
    <View   cart={cart} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  shopƒƒname={shopƒƒname} sectionƒƒsettings={sectionƒƒsettings}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} >
      <Navigation  links="{ section.settings.menu.links }"  cart={cart} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  shopƒƒname={shopƒƒname} sectionƒƒsettings={sectionƒƒsettings}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} />
    </View>
  </Panel>
  <Panel  classes="cart-popup" resizable right reveal swipe swipeOnlyClose="{true}"    cart={cart} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  shopƒƒname={shopƒƒname} sectionƒƒsettings={sectionƒƒsettings}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} >
    <View   cart={cart} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  shopƒƒname={shopƒƒname} sectionƒƒsettings={sectionƒƒsettings}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} >
      <CartDrawer    cart={cart} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  shopƒƒname={shopƒƒname} sectionƒƒsettings={sectionƒƒsettings}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} />
    </View>
  </Panel>
  <header> 
    <Appbar   cart={cart} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  shopƒƒname={shopƒƒname} sectionƒƒsettings={sectionƒƒsettings}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} >
      <div class="left pt-[10px] pl-[10px]">
        <Button  small panelToggle="left" classes="display-flex"   cart={cart} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  shopƒƒname={shopƒƒname} sectionƒƒsettings={sectionƒƒsettings}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} >
          <Icon  name="icon-hamburger" width="25"   cart={cart} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  shopƒƒname={shopƒƒname} sectionƒƒsettings={sectionƒƒsettings}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} />
        </Button>
      </div>
      <div class="center">
        <Logo    cart={cart} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  shopƒƒname={shopƒƒname} sectionƒƒsettings={sectionƒƒsettings}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} />
      </div>
      <div class="right pt-[10px] pr-[10px]">
        <Link  small panelToggle="right" classes="display-flex"   cart={cart} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  shopƒƒname={shopƒƒname} sectionƒƒsettings={sectionƒƒsettings}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} >
          <div class="icon relative">
            <Icon  name="icon-cart" width="30"   cart={cart} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  shopƒƒname={shopƒƒname} sectionƒƒsettings={sectionƒƒsettings}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} />
            {#if cart.items }
              <Badge  color="red"  cart={cart} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  shopƒƒname={shopƒƒname} sectionƒƒsettings={sectionƒƒsettings}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} > { cart.items.length } </Badge>
            {/if}
          </div>
        </Link>
      </div>
    </Appbar>
  </header>

{#if settings.cart_type == "notification" }
  {@html rawinclude_679e0e24[index || 0]}
{/if}

{@html rawinclude_3be65912[index || 0]}

{#if request.page_type == 'index' }
  {@html rawinclude_602baf9d[index || 0]}
{/if}


<style global lang="postcss">
  :root {
    --f7-panel-right-width: 400px;
  }
  .panel {
    min-width: 100px;
    max-width: 90vw;
  }

  header-drawer {
      justify-self: start;
      margin-left: -1.2rem;
    }
  
    .header__heading-logo {
      max-width: var(--section-settings-logo_width);
    }
  
    @media screen and (min-width: 990px) {
      header-drawer {
        display: none;
      }
    }
  
    .menu-drawer-container {
      display: flex;
    }
  
    .list-menu {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  
    .list-menu--inline {
      display: inline-flex;
      flex-wrap: wrap;
    }
  
    summary.list-menu__item {
      padding-right: 2.7rem;
    }
  
    .list-menu__item {
      display: flex;
      align-items: center;
      line-height: calc(1 + 0.3 / var(--font-body-scale));
    }
  
    .list-menu__item--link {
      text-decoration: none;
      padding-bottom: 1rem;
      padding-top: 1rem;
      line-height: calc(1 + 0.8 / var(--font-body-scale));
    }
  
    @media screen and (min-width: 750px) {
      .list-menu__item--link {
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
      }
    }
    .header {
      padding-top: var(--section-settings-padding_top); /* {{  | times: 0.5 | round: 0 }}px; */
      padding-bottom: var(--section-settings-padding_bottom); /* {{  | times: 0.5 | round: 0 }}px; */
    }
  
    .section-header {
      margin-bottom: var(--section-settings-margin_bottom); /* | times: 0.75 | round: 0 }}px; */
    }
  
    @media screen and (min-width: 750px) {
      .section-header {
        margin-bottom: var(--section-settings-margin_bottom);
      }
    }
  
    @media screen and (min-width: 990px) {
      .header {
        padding-top: var(--section-settings-padding_top);
        padding-bottom: var(--section-settings-padding_bottom);
      }
    }
    :global(.header__icon svg) {
      width: 40px;
    }
    :global(.menu-drawer__navigation svg) {
      width: 40px;
    } 
  </style>



