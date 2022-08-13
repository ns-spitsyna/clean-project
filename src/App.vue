<template>
	<div id="app">
		<div class="container">
			<!--
			<router-view></router-view>
			<router-link to='/page'>Нажми меня нежно</router-link> -->

			<h1>Корзина {{ productsCount }}</h1>
			<hr>
			<ProductList/>
			<ShoppingList/>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
import ProductList from './components/ProductList.vue';
import ShoppingList from './components/ShoppingList.vue';

export default {
    name: 'App',
	components: {
		ProductList,
		ShoppingList,
	},

	computed: {
		...mapGetters([ 'validPosts', 'postsCount', 'productsCount'])
	},
}
</script>
<style lang="scss" scoped>

.container {
    width: 1140px;
    max-width: 100%;
	margin: 0 auto;
}
</style>