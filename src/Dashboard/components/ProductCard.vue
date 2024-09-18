<template>
	<div class="col-12 col-lg-3 col-md-4 card my-3 p-2 shadow text-start">
		<!-- <picture class="img-height">
				<source
					media="(min-width:1025px)"
					:src="product.product_images_3[0]" 
				>
				<img 
					class="img-fluid card-img-top object-fit-cover" 
					:alt="product.product_name"
					:src="product.product_images_1[0]" 
					loading="lazy"
				>
		</picture>
		
		<div class="pt-3 pb-1 px-1 text-start">
			<h6>{{ product.product_name }} </h6>
			<h6 class="my-2"> Rs. {{ product.product_discounted_price }}</h6>
			<p class="my-0">{{ product.product_actives }}</p>
		</div>
		
		<div class="card-footer d-flex justify-content-end my-2 bg-light">
			<button
				class="btn btn-warning d-flex align-items-center rounded-4"
				@click="addToCart"
			>
				<IconSection name="s-bag" /> 
				<span class="px-1 fw-bold">Add to Cart</span>
			</button>
		</div> -->
		<div
			class="card-img-top"
			@click="showProduct"
		>
			<picture>
				<source
					v-if="product.product_images_3 && product.product_images_3.length > 0"
					media="(min-width:1025px)"
					:srcset="product.product_images_3[0]" 
				>
				<img 
					class="card-img-top" 
					:alt="product.product_name"
					:src="(product.product_images_1 && product.product_images_1.length > 0) ? product.product_images_1[0] : ''" 
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
					{{ product.product_name }} 
				</h5>
				<h6 class="card-subtitle subtitle-height pt-1 pb-3">
					Rs. {{ product.product_discounted_price }}
				</h6>
				<p class="card-text text-height">
					{{ product.product_actives }}
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
// import IconSection from '@/common/svgs/icons.vue'
export default {
	name:'ProductsCard',
	// components:{
	// 	IconSection
	// },
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