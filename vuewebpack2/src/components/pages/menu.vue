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
  </ul>


</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
