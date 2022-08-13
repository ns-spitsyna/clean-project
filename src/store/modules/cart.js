export default {
  state: {
    products: [],
    shoppingList: [],
  },

  getters: {
    allProducts(state) {
        return state.products;
    },
    shoppingList(state) {
      return state.shoppingList;
    },
    productsCount(_, getters){
      return getters.shoppingList.length;
    },
    totalSum(_, getters) {
      return getters.shoppingList.reduce((res, item) =>  res + item.sum, 0);
    },
  },


  mutations: {
    updateProduct(state, products){
        state.products = products;
    },

    addProduct(state, newProduct) {
      if(state.shoppingList.length) {
        let isProductInCart = false;
        state.shoppingList.map(item => {
          if(item.id === newProduct.id) {
            isProductInCart = true;
            item.amount++;
            item.sum = item.amount*item.price;
          }
        });

        if(!isProductInCart) {
          state.shoppingList.push(newProduct);
        }
      } else {
        state.shoppingList.push(newProduct);
      }
    },

    deleteProduct(state, product) {
      state.shoppingList = state.shoppingList.filter(item => item.id !== product.id);
    },
  },

  actions: {
    async getProducts(ctx, limit = 12) {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=' + limit);
        const products = await res.json();
        ctx.commit('updateProduct', products);
    }
  },
};