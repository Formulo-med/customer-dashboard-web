<template>
    <div class="col-12">
        <h6 class="mb-4">Order Id: 5894941664868347</h6>
        <div class="row px-3">
          <div class="col-12 col-sm-2 d-flex flex-sm-column align-items-sm-center p-0">
            <div class="d-flex flex-column">
                <IconSection name="box"/>
                <div class="col-1 v-line d-block d-sm-none align-self-center py-3"></div>
            </div>
            <p class="m-0 ms-2 ms-sm-0 mt-3 mt-sm-0 text-center ">Order Placed</p>
          </div>
          <div class="col-1 h-line d-sm-block d-none align-self-center"></div>
          
          <div class="col-12 col-sm-2 d-flex flex-sm-column align-items-sm-center p-0">
            <div class="d-flex flex-column">
                <IconSection name="shipped"/>
                <div class="col-1 v-line d-block d-sm-none align-self-center py-3"></div>
            </div>
            <p  class="m-0 ms-2 ms-sm-0 mt-3 mt-sm-0 text-center">Shipped</p>
          </div>
          <div class="col-1 h-line d-sm-block d-none align-self-center"></div>

          <div class="col-12 col-sm-2 d-flex flex-sm-column align-items-sm-center p-0">
            <div class="d-flex flex-column">
                <IconSection name="out-for-delivery"/>
                <div class="col-1 v-line d-block d-sm-none align-self-center py-3"></div>
            </div>
            <p  class="m-0 ms-2 ms-sm-0 mt-3 mt-sm-0 text-center">Out For Delivery</p>
          </div>
          <div class="col-1 h-line d-sm-block d-none align-self-center"></div>

          <div class="col-12 col-sm-2 d-flex flex-sm-column align-items-center p-0">
            <IconSection name="delivered"/>
            <p  class="m-0 ms-2 ms-sm-0 text-center">Delivered</p>
          </div>
        </div>
    </div>
</template>
<script>
import IconSection from '@/common/svgs/icons.vue'
export default{
   name:"StepperComponent",
   components:{
    IconSection
   }
}
</script>
<style>
    .icon-uniform{
        aspect-ratio: 1/1
    }
    .h-line{
        height: 3px;
        border-top: 3px solid #FDD51E;
    }
    .v-line{
        height: 5vh;
        border-left: 3px solid #FDD51E;
    }
</style>