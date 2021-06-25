//官方的元件
import Vue from 'vue';
import Router from 'vue-router';

//自訂的分頁元件
import Login from "@/components/pages/Login";


Vue.use(Router);

export default new Router({
    routes: [
        {
            name: 'Login', //元件呈現的名稱
            path: '/login',//對應的虛擬路徑
            component: Login,//對應的元件
        }
    ]
});

