import Vue from 'vue';
import VueRouter from 'vue-router';
//官方的元件

import Home from  '@/components/HelloWorld';
//自訂的分頁元件

Vue.use(VueRouter);

export default new VueRouter({
 routes:[
     {
         name: 'index', //元件呈現的名稱
         path: '/index',//對應的虛擬路徑
         component: Home,//對應的元件
     }
 ]
});