<template>
    <div class="d-flex flex-column py-5 px-3 justify-content-center align-items-center">
        <h4 class="text-center my-3">What to Expect from Your Personalized Skincare Routine</h4>
        
        <div class="row text-center justify-content-center px-2 gap-3">
            <ProductCard v-for="product in products" :key="product.productId" :product="product"></ProductCard>
        </div>
    </div>
</template>
<script>
import ProductsService from '@/ThankyouPage/service/ProductService';
import ProductDetailsModel from '@/ThankyouPage/models/ProductDetailsModel';
import ProductCard from '@/ThankyouPage/components/ProductCard.vue';
export default {
    name:"ExpectationSection",
    components:{
        ProductCard
    },
    data(){
        return {
            products:[]
        }
    },
    mounted(){
       ProductsService.getWhatsInTheBox().then(response => {
            if(response.data && response.data.length !==0 ){
                this.products = response.data.map(product => new ProductDetailsModel(product))
                console.log(this.products)
            }
        }).catch(err => {
            err.message =  "products fetch failed"
        });	   
    }
}

</script>

