<template>
<div class="product-list">
  <div class="product-card-item" v-for="product in allProducts" :key="product.id">
        <div class="product-card-img"><img :src="product.thumbnailUrl" /></div>
        <strong class="product-card-title">{{ product.title }}</strong>
        <div class="product-card-price">Цена: {{ product.id }} руб.</div>
        <button
            class="product-card-button"
            :data-price="product.id"
            :data-title="product.title"
            :data-image="product.thumbnailUrl"
            type="submit"
            @click="submit">
                Купить
        </button>
    </div>
</div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
export default {
    name: 'ProductList',

    computed: {
	 ...mapGetters(['allProducts', 'shoppingList'])
	 },

     methods: {
		...mapActions(['getProducts']),
        ...mapMutations(['addProduct']),
        submit(event) {
            this.addProduct({
                id: event.target.getAttribute('data-price'),
                title: event.target.getAttribute('data-title'),
                price: +event.target.getAttribute('data-price'),
                thumbnailUrl: event.target.getAttribute('data-image'),
                amount: 1,
                sum: +event.target.getAttribute('data-price'),
            });
        }
	 },

    async mounted() {
		this.getProducts();
	}
}
</script>
<style lang="scss" scoped>
.product-list {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    height: 100%;

    .product-card-item {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        text-align: center;
        background-color: rgb(172, 197, 226);
        width: 27%;
        border: 1px solid rgb(131, 131, 131);
        margin-bottom: 20px;
        margin-right: 20px;
        padding: 16px;
        border-radius: 8px;
        .product-card-img {
            img {
                width: 100px;
            }
        }
    }

    .product-card-price {
        margin: 32px 0;
    }
}
</style>