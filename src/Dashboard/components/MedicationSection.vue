<template>
  <div class="container px-0">
    <div class="row gx-4 gy-4">
        <div class="col-12 col-lg-6">
            <div class="p-3 rounded-4 bg-light h-100">
                <h5 class="text-center mb-4">Medication Prescribed</h5>
                <MedicineComponent v-for="i in 5" :key="i"/>
            </div>
        </div>
        <div class="col-12 col-lg-6">
            <div class="p-3 rounded-4 bg-light h-100">
                <h5 class="text-center mb-4">Routine</h5>
                <RoutineComponent v-for="i in routine" :key="i" :period="i"></RoutineComponent>
            </div>
        </div>
    </div>
</div>
        <!-- <div class="row row-cols-lg-2 row-cols-1 gx-4">
            <div class="col ps-0">
                <div class="col-12 rounded-4 p-3 bg-light">
                    <h5 class="text-center mb-4">Medication Prescribed</h5>
                    <MedicineComponent v-for="i in 5" :key="i"/>
                </div>
            </div>  
            <div class="col pe-0">
                <div class="col-12 rounded-4 p-3 bg-light"></div>
            </div>
        </div> -->
    
</template>
<script>
import MedicineComponent from './MedicineComponent.vue';
import RoutineComponent from './RoutineComponent.vue';
export default {
    name: "MedicineSection",
    components:{
        MedicineComponent,
        RoutineComponent
    },
    data(){
        return {
            routine:["Morning", "Afternoon", "Evening"]
        }
    }
}
</script>