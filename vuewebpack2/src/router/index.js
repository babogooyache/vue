//官方的元件
import Vue from 'vue';
import VueRouter from 'vue-router';

//自訂的分頁元件
import Home from "@/components/HelloWorld";
import Page from  '@/components/pages/page';


Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: "index", //元件呈現的名稱
      path: "/", //對應的虛擬路徑
      component: Home //對應的元件
    },
    {
      name: "Page", 
      path: "/page", 
      component: Page 
    }
  ]
});