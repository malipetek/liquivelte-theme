<script>
    import { Searchbar, Navbar } from 'framework7-svelte';
    export let searchClosed = false; 
    export let searchBarStatusChange = () => {};
</script>
<Navbar position="top" hidden="{searchClosed}">
  <Searchbar
      on:searchbarEnable="{searchBarStatusChange}"	
      on:searchbarDisable="{searchBarStatusChange}"	
      classes="searchbar"
      customSearch="{true}"
      backdrop="{true}"
      expandable
      disableButton="{true}"
    />
</Navbar>