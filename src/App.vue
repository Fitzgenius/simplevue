<template>
  <div id="app">
    <Header />
    <div class="container">
      <VideoPage />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue"
import VideoPage from "./components/VideoPage/VideoPage.vue"

export default {
  name: "App",
  title: 'Interesting videos',
  components: {
    Header,
    VideoPage,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
