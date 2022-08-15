
import Vue from 'vue';
import Router from 'vue-router';
import ProductList from '../components/ProductList.vue';
import ShoppingList from '../components/ShoppingList.vue'

Vue.use(Router);

export default new Router({
    routes: [
      {
        path: '/',
        name: 'main',
        component: ProductList,
      },
      {
        path: '/cart',
        name: 'cart',
        component: ShoppingList,
        props: true
      },
    ],
    mode: 'history',
});
