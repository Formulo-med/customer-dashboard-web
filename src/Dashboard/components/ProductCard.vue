<template>
	<div class="col-12 col-lg-3 col-md-4 card my-3 p-2 shadow text-start">
		<div
			class="card-img-top"
			@click="showProduct"
		>
			<picture>
				<source
					v-if="product.productImages && product.productImages.length > 0"
					media="(min-width:1025px)"
					:srcset="`/images/${product.productImages[0]}-2.png`"
				>
				<img 
					class="card-img-top" 
					:alt="product.productName"
					:src="(product.productImages && product.productImages.length > 0) ? `/images/${product.productImages[0]}-1.png`: ''" 
					loading="lazy"
				>
			</picture>
		</div>
		<div
			class="card-body"
		>
			<div class="col-9">
				<h5
					class="card-title title-height"
					@click="showProduct"
				>
					{{ product.productName }} 
				</h5>
				<h6 class="card-subtitle subtitle-height pt-1 pb-3">
					Rs. {{ product.productDiscountedPrice }}
				</h6>
				<p class="card-text text-height">
					{{ product.productActives }}
				</p>
			</div>
		</div>
		<div class="card-footer bg-transparent border-0">
			<div class="col-12 d-flex justify-content-end">
				<button
					class="btn btn-warning d-flex  align-items-center rounded-4"
					@click="addToCart"
				>
					<IconSection name="s-bag" /> 
					<span class="px-1 fw-bold">Add to Cart</span>
				</button>
			</div>
		</div>
	</div>
	
</template>
<script>
import IconSection from '@/common/svgs/icons.vue'
export default {
	name:'ProductsCard',
	components:{
		IconSection
	},
	props:{
		product:{
			type:Object,
			required:true,
		}
	},
	methods:{
		showProduct(){
			// this.$router.push({ path: `/products/${this.product.product_id}`})
		},
		addToCart(){
			console.log("Add to cart clicked called")
		}
	}
}
</script>
<style>

.card-img-top, .card-title{
	cursor: pointer;
}


</style>