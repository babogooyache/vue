<template>
  <div id="app">
    <router-view/>
    <a href="#" @click.prevent="signout()">signout</a> 
  </div>
</template>
<script>
export default {
  created() {
    // const api = 'https://vue-course-api.hexschool.io/api/babogoo/products';
    const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_NAME}/products`;
    this.axios.get(api).then(response => {
      // console.log(response.data);
      // console.log(process.env.API_PATH);
    });
  },
  methods: {
    signout(){
      const api = `${process.env.API_PATH}/logout`;
      const vm = this;
      this.$http.post(api).then(response => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push('/login');
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import "./assets/all.scss";
</style>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
