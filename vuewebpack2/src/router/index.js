//官方的元件
import Vue from 'vue';
import VueRouter from 'vue-router';

//自訂的分頁元件
import Home from "@/components/HelloWorld";
import Page from "@/components/pages/page";
import Child from "@/components/pages/child";
import Child2 from "@/components/pages/child2";
import Child3 from  '@/components/pages/child3';


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
      component: Page,
      children: [
        {
          name: "card",
          path: "", //預設是child1
          component: Child, 
          alias: 'child1' 
        },
        {
          name: "card2",
          path: "child2",
          component: Child2
        },
        {
          name: "card3",
          path: "child/:id", //後面的id等於動態路由
          component: Child3
        }
      ]
    }
  ]
});