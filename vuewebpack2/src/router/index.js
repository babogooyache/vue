//官方的元件
import Vue from 'vue';
import Router from 'vue-router';

//自訂的分頁元件
import HelloWorld from "@/components/HelloWorld";
import Login from "@/components/pages/Login";


Vue.use(Router);

export default new Router({
    routes: [
        {
            //如果進入非預設的頁面，都導入 login
          path: '*',
          redirect: 'login',
        },
        {
          name: 'HelloWorld', //元件呈現的名稱
          path: '/', //對應的虛擬路徑
          component: HelloWorld, //對應的元件
          meta: { requiresAuth: true },
        },
        {
            name: 'Login', //元件呈現的名稱
            path: '/login',//對應的虛擬路徑
            component: Login,//對應的元件
        }
    ]
});

