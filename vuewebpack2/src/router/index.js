//官方的元件
import Vue from 'vue';
import VueRouter from 'vue-router';

//自訂的分頁元件
import Home from "@/components/HelloWorld";
import Page from "@/components/pages/page";
import Child from "@/components/pages/child";
import Child2 from "@/components/pages/child2";
import Child3 from '@/components/pages/child3';
import Menu from  '@/components/pages/menu';


Vue.use(VueRouter);

export default new VueRouter({
  // mode:'history',
  linkActiveClass:'is-active',
  linkExactActiveClass:'is-ExactActive',
  routes: [
    {
      name: "index", //元件呈現的名稱
      path: "/", //對應的虛擬路徑
      component: Home //對應的元件
    },
    {
      // name: "Page",
      path: "/page",
      // component: Page,
      components: {   //components 可以載入多個元件的
        default: Page,  // default 屬性來載入路由路徑對應的預設組件
        menu: Menu 
      },
      children: [
        {
          name: "card",
          path: "", //預設是child1，
          //當沒有設定路徑的時候，就是指定上層部份預設指向目， 要把 name: "Page",註解掉。

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
          path: "child3", //後面的id等於動態路由
          component: Child3
        }
      ]
    }
  ]
});