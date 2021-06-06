<template>

  <div class="hello">
  <router-link class="nav-link" to="/page/">card1</router-link>
  <router-link class="nav-link" to="/page/child2">card2</router-link>
  <router-link class="nav-link" to="/page/child3">card3</router-link>
    <div class="card" style="width: 18rem;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
