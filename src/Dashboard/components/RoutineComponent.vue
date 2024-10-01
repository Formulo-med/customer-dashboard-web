<template>
    <div class="row p-3 align-items-center">
        <h6>{{period}}</h6>
        <div class="col-3 m-0">
            <img src="/images/paracetamol.png" class="img-fluid" alt="...">
        </div>
        <div class="col-9 m-0">
            <p class="m-0 p-1 fw-bold">Paracetamol</p>
            <p class="m-0 p-1">After breakfast</p>
        </div>
    </div>
</template>
<script>
export default{
    name:"MedicineComponent",
    props:{
        period:{
            type:String,
            required:true
        }
    }
}
</script>
<style>

</style>