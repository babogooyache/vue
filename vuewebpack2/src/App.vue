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
  created() {
    // const api = 'https://vue-course-api.hexschool.io/api/babogoo/products';
    const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_NAME}/products`;
    this.axios.get(api).then(response => {
      console.log(response.data);
      // console.log(process.env.API_PATH);
    });
  }
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
