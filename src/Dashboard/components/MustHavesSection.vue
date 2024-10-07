<template>
    <div class="container my-4 mx-0 rounded-4 py-3 px-lg-5 px-3 bg-light" >
       <h5 class="text-center my-3">Must Haves</h5>
       <div class="row">
            <div class="col-md-4 col-12" v-for="i in 3" :key="i">
                <MustHaveProductComponent/>
            </div>
       </div>
    </div>
</template>
<script>
import MustHaveProductComponent from './MustHaveProductComponent.vue';
export default{
   name:"MustHavesSection",
   components:{
        MustHaveProductComponent
   }
}
</script>