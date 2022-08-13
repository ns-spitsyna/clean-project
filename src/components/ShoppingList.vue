<template>
<div class="shopping-list">
    <div  v-if="isShowShoppingList">
        <h2>Список товаров</h2>
        <div class="shopping-list-item" v-for="product in shoppingList" :key="product.id">
            <strong class="shopping-list-title">{{ product.title }}</strong>
            <div class="shopping-list-price">Цена: {{ product.id }} руб.</div>
            <div class="shopping-list-count"> {{ product.amount }} шт.</div>
            <div class="shopping-list-count"> {{ product.sum }} руб.</div>
            <button
                class="delete-button"
                :data-price="product.id"
                :data-title="product.title"
                type="submit"
                @click="deletePr(product.id)">
                Удалить
            </button>
        </div>
        <div class="shopping-list-total">
            <strong>Итого: {{ totalSum }} руб.</strong>
            <button
            class="pay-button"
            type="submit"
            >
            Оплатить
        </button>
        </div>

    </div>
    <div v-else><h2>Корзина пустая</h2></div>
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    name: 'ProductList',

    computed: {
	    ...mapGetters([ 'shoppingList', 'totalSum']),

        isShowShoppingList() {
            return this.shoppingList.length > 0;
        }
	},

    methods: {
        ...mapMutations([ 'deleteProduct']),

        deletePr(id) {
            this.deleteProduct({id});
        },
	},
}
</script>
<style lang="scss" scoped>
.shopping-list {
    .shopping-list-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 0;
        border-bottom: 1px solid #cecece;
    }
    .shopping-list-title {
        width: 20%;
    }
    .delete-button {
        height: 100%;
    }
    .shopping-list-total {
        display: flex;
        width: 100%;
        flex-flow: column;
        strong {
            padding: 20px 0;
        }
        .pay-button {
            width: 100px;
            height: 30px;
        }
    }
}
</style>