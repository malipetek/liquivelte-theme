<script>
let index = 0;

  import liquid from "../liquid";
  let count = 0;
</script>
<h1> Lazy here  { liquid.append(count, "") } </h1>
<button on:click="{ () => count++ }"> Increment </button>
<style>
  h1 {
    color: green;
  }
</style>