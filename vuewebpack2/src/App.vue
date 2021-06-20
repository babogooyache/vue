<template>
  <div id="app">
    <HelloWorld></HelloWorld>

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  // created() {
  //   this.axios.get("https://randomuser.me/api/").then(response => {
  //     console.log(response.data);
  //   });
  // }
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
