<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <!--<router-link class="nav-link" to="/">Home</router-link>-->
              <router-link class="nav-link" :to="{name: 'index'}">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/page">Page</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <img src="./assets/logo.png" />
    <!--<HelloWorld/>-->
    <router-view></router-view>
    <!-- 透過router 來呈現內容 -->
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
