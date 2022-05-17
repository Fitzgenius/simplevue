<template>
  <div id="header">
    <div class="container">
      <PageTitle>.PATCHS <span>How to guide</span></PageTitle>
    </div>
  </div>
</template>

<script>
  import {
    PageTitle
  } from './style'

  export default {
    name: 'Header',
    components: {
      PageTitle,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #header {
    background: #f5f5f5;
    padding: 20px 0;
    margin-bottom: 25px;
    border-top: #312783 5px solid;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
  }
</style>