<template>
     <div class="container my-4 mx-0 rounded-4 py-3 px-lg-5 px-3 bg-light" >
        <h5 class="text-center my-3">Order Status</h5>
        <div class="row">
            <div class="col-md-8">
                <Stepper/>
            </div>  
            <div class="col-12 col-sm-4 my-4 my-sm-0 align-self-center">
                <h6 class="col-12">Delivery Estimate</h6>
                <div class="d-flex align-items-center">
                    <font-awesome-icon :icon="['fas', 'check']" size="lg" />
                    <p class="ps-2 m-0">Delivery by 30 September 2024</p>
                </div>
            </div>
        </div>
       
     </div>
</template>
<script>
import Stepper from '@/Dashboard/components/Stepper.vue';
export default{
    name:"OrderStatusSection",
    components:{
        Stepper
    }
}
</script>