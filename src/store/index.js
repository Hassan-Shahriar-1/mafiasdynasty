// store/index.js
 
import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
     cart:{
        engstrt:Number,
        engend:Number,
        hlthstr:Number,
        hlthend:Number,
        cash:Number,
        gold:Number,
        stmnstr:Number,
        stmnend:Number
     }
        
    },
    mutations: {
        setcart(state, data) {
          console.log(data);
          state.cart.engstrt = data.cart.engs
          state.cart.engend = data.cart.enge
          state.cart.hlthstr = data.cart.hlths
          state.cart.hlthend = data.cart.hlthe
          state.cart.cash = data.cart.mcash
          state.cart.gold = data.cart.rgold
          state.cart.stmnstr = data.cart.stmns
          state.cart.stmnend = data.cart.stmne
          
          
        },
    }

});