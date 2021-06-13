<template>
  <ul class="nav">
    <li class="nav-item">
      <router-link class="nav-link" to="/page/">card1</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/page/child2">card2</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/page/child3">card3</router-link>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link" @click.prevent="designatedLink">指定連結</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link" @click.prevent="previousLink">上一頁</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link" @click.prevent="nextLink">下一頁</a>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
    designatedLink(){
      this.$router.push('/page/child2');
    },
    previousLink(){
      this.$router.back();
    },
    nextLink(){
      this.$router.forward();
    },
  }
};
</script>
