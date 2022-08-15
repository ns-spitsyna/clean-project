<template>
	<div id="app">
		<div class="container">
			<h1>Корзина <router-link :to="{ name: 'cart'}">{{ productsCount }}</router-link></h1>
			<hr>
			<router-view></router-view>

		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name: 'App',

	computed: {
		...mapGetters(['productsCount']),
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