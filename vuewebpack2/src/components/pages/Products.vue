<template>
  <div>
    <div class="text-right">
      <button>Add new products</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="120">啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in products" :key="item.id">
          <td>{{item.category}}</td>
          <td>{{item.title}}</td>
          <td class="text-right">{{item.origin_price}}</td>
          <td class="text-right">{{item.price}}</td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm">編輯</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products:[],
    };
  },
  created(){
    this.getProducts();
  },
  methods: {
    getProducts(){
      const api = `${process.env.API_PATH}/api/
          ${process.env.CUSTOM_NAME}/products`;
      const vm = this;
      this.axios.get(api).then(response => {
        console.log(response.data);
        vm.products = response.data.products;
      });
    },
  }
};
</script>
