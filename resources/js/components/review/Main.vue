<template>
            <!-- <div v-for="product in products" v-bind:key="product.id">
                <div classs="row">
                    <div class="col-md-5 col-md-offset-0">
                        <figure>
                            <img class="product" v-bind:src="product.image">
                        </figure>
                    </div>
                    <div class="col-md-6 col-md-offset-0 description">
                        <router-link tag="h1" :to="{name: 'Id', params: {id: product.id}}">{{product.title}}</router-link>
                        <p v-html="product.description"></p>
                        <button class="btn btn-primary btn-lg" v-on:click="addToCart(product)" v-if="canAddToCart(product)">장바구니담기</button>
                        <button disabled="true" class="btn btn-primary btn-lg" v-else>장바구니담기</button>
                        <span class="inventory-message" v-if="product.availableInventory - cartCount(product.id) === 0">품절</span>
                        <span class="inventory-message" v-else-if="product.availableInventory - cartCount(product.id) < 5">Only {{product.availableInventory - cartCount(product.id)}} 남았습니다!</span>
                        <span class="inventory-message v-else">지금 구매하세요!</span>
                        <div class="rating">
                            <span v-bind:class="{'rating-active' :checkRating(n, product)}" v-for="n in 5" :key="n">☆</span>
                        </div>
                    </div>
                </div>
            </div> -->
    <v-layout align-center justify-space-between row style="width: 100%;">
        <v-item-group
            tag="ul"
            class="event-card-list"
            name="fade-in"
            :css="false"
            appear>
            <li v-for="product in products" v-bind:key="product.id">
                <v-card class="event-card">
                    <v-layout row>
                        <img :src="product.image">
                            <v-layout column justify-space-between style="padding: 0.8em 1.3em; max-width: 390px;">
                                <div>
                                    <h1 class="name">{{product.store_name}}</h1>
                                    <h3 class="address">{{product.store_address}}</h3>
                                    <!-- <div class="rating">
                                        <span v-bind:class="{'rating-active' :checkRating(n, product)}" v-for="n in 5" :key="n">☆</span>
                                    </div> -->
                                </div>
                                <div>
                                    <!-- <p class="desc">어쩌구저쩌구</p> -->
                                    <div class="location">
                                        <!-- <v-icon>location_on</v-icon>    -->
                                         <v-btn color="green" class="white--text" rounded :to="{ name: 'store' , params : {id: product.id}}">review</v-btn>
                                    </div>
                                </div>
                            </v-layout>
                    </v-layout>
                </v-card>
            </li>
        </v-item-group>
    </v-layout>        
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            products: [],
            cart:[]
        };
    },
    methods:{
        checkRating(n, myProducts){
            return myProducts.rating - n >= 0;
        },
        addToCart(aProduct){
            this.cart.push(aProduct.id);
        },
        canAddToCart(aProduct){
            return(
                aProduct.availableInventory > this.cartCount(aProduct.id)
            );
        },
        cartCount(id){
            let count = 0;
            for (var i = 0; i < this.cart.length; i++){
                if (this.cart[i] === id){
                    count++;
                }
            }
            return count;
        }
    },
    computed:{
        cartItemCount(){
            return this.cart.length || '';
        },
    },
    created : function(){
        axios.get('/static/products.json')
        .then((response) => {
            this.products = response.data.products;
            console.log(this.products);
        })
        .catch((err)=>{
            console.log(err);
        });
    }
};
</script>

<style>
.event-card-list {
	margin-top: 4em;
}

.event-card-list li {
	list-style: none;
	margin: 2em 0;
}

.event-card {
	overflow: hidden;
	width: 800px;

	border-radius: 0.3em;
}

.event-card img {
	width: 240px;
	height: 240px;

	object-fit: cover;
}

.event-card .name {
	font-size: 2.3em;
	font-weight: 400;
}

.event-card .name a {
	text-decoration: none;
	/*color: #212121;*/
}

.event-card .address {
	font-size: 1.4em;
	font-weight: 400;
	color: #6D6D6D;
}

.event-card .location {
	font-size: 1em;
	color: #757575;
}

.event-card .location i {
	font-size: 1.1em;
	padding-right: 0.3em;
	margin-bottom: 0.085em;
}

.event-card .rating-active {
	margin-bottom: 0.2em;
	font-size: 1.16em;
	padding-left: 0.1em;
}
</style>