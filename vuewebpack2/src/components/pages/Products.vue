<template>
  <div>
    <div class="text-right">
      <button class="btn btn-primary" 
        data-toggle="modal" data-target="#productModal"
        v-on:click="openModal()">建立新的產品
      </button>
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
        <tr v-for="(item) in products" :key="item.id">
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

    <!-- Modal -->
    <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import $ from "jquery";
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
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_NAME}/products`;
      const vm = this;
      this.axios.get(api).then(response => {
        console.log(response.data);
        vm.products = response.data.products;
      });
    },
    openModal(){
      $('#productModal').modal('show')
    }
  }
};
</script>
