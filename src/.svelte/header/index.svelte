
<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

export let rawinclude_679e0e24;
export let rawinclude_3be65912;
export let rawinclude_602baf9d;
export let logo_alt;
export let logo_height;
  import { cartStore, cartOpen } from '../../scripts/store.module.js';
  export let cart;
  export let shop;
  export let shopƒƒname; 
shop.name = shopƒƒname;
  const section = {};
  export let sectionƒƒsettings; 
section.settings = sectionƒƒsettings;
  export let menu_json;
  section.settings.menu = JSON.parse(menu_json);
  import Navigation from './components/navigation.liquivelte';
  import PredictiveSearch from './components/predictive-search.liquivelte';
  import CartDrawer from './components/cart-drawer.liquivelte';
  import Logo from './components/logo.liquivelte';
  import DetailsModal from '../../snippets/details-modal.liquivelte';
  import { Appbar, Panel, Button, Block, View, Page } from 'framework7-liquivelte'; 
  import Icon from "../../snippets/icon.liquivelte";
  export let settings; 

  export let logo_html;
  console.log('settings ', settings); 
  
  export let routes;
  export let request;

  export let account_url;
  export let account_text;

  console.log('section header ', section);
  console.log('section.settings.menu ', section.settings.menu);
</script>

<svg xmlns="http://www.w3.org/2000/svg" class="hidden">
  <symbol id="icon-search" viewbox="0 0 18 19" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.03 11.68A5.784 5.784 0 112.85 3.5a5.784 5.784 0 018.18 8.18zm.26 1.12a6.78 6.78 0 11.72-.7l5.4 5.4a.5.5 0 11-.71.7l-5.41-5.4z" fill="currentColor"/>
  </symbol>

  <symbol id="icon-close" class="icon icon-close" fill="none" viewBox="0 0 18 17">
    <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
  </symbol>
</svg>

  <Panel  resizable left reveal swipeOnlyClose="{true}"    cart={cart} logo_height={logo_height} logo_alt={logo_alt} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  sectionƒƒsettings={sectionƒƒsettings} shopƒƒname={shopƒƒname}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} >
    <View   cart={cart} logo_height={logo_height} logo_alt={logo_alt} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  sectionƒƒsettings={sectionƒƒsettings} shopƒƒname={shopƒƒname}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} >
      <Page   cart={cart} logo_height={logo_height} logo_alt={logo_alt} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  sectionƒƒsettings={sectionƒƒsettings} shopƒƒname={shopƒƒname}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} >
        <Block   cart={cart} logo_height={logo_height} logo_alt={logo_alt} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  sectionƒƒsettings={sectionƒƒsettings} shopƒƒname={shopƒƒname}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} > Left panel content </Block>
      </Page>
    </View>
  </Panel>
  <Panel  resizable right reveal swipeOnlyClose="{true}"    cart={cart} logo_height={logo_height} logo_alt={logo_alt} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  sectionƒƒsettings={sectionƒƒsettings} shopƒƒname={shopƒƒname}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} >
    <View   cart={cart} logo_height={logo_height} logo_alt={logo_alt} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  sectionƒƒsettings={sectionƒƒsettings} shopƒƒname={shopƒƒname}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} >
      <CartDrawer    cart={cart} logo_height={logo_height} logo_alt={logo_alt} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  sectionƒƒsettings={sectionƒƒsettings} shopƒƒname={shopƒƒname}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} />
    </View>
  </Panel>
  <header> 
    <Appbar   cart={cart} logo_height={logo_height} logo_alt={logo_alt} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  sectionƒƒsettings={sectionƒƒsettings} shopƒƒname={shopƒƒname}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} >
      <div class="left">
        <Button  small panelToggle="left" class="display-flex"   cart={cart} logo_height={logo_height} logo_alt={logo_alt} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  sectionƒƒsettings={sectionƒƒsettings} shopƒƒname={shopƒƒname}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} >
          <Icon  name="icon-hamburger" width="15"   cart={cart} logo_height={logo_height} logo_alt={logo_alt} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  sectionƒƒsettings={sectionƒƒsettings} shopƒƒname={shopƒƒname}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} />
        </Button>
      </div>
      <div class="center">
        <Logo    cart={cart} logo_height={logo_height} logo_alt={logo_alt} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  sectionƒƒsettings={sectionƒƒsettings} shopƒƒname={shopƒƒname}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} />
      </div>
      <div class="left">
        <Button  small panelToggle="right" class="display-flex"   cart={cart} logo_height={logo_height} logo_alt={logo_alt} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  sectionƒƒsettings={sectionƒƒsettings} shopƒƒname={shopƒƒname}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} >
          <Icon  name="icon-cart" width="40"   cart={cart} logo_height={logo_height} logo_alt={logo_alt} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  sectionƒƒsettings={sectionƒƒsettings} shopƒƒname={shopƒƒname}   rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} />
        </Button>
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
  @import "framework7/framework7-bundle.min.css";
  @tailwind base;
  @tailwind utilities;
  
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



