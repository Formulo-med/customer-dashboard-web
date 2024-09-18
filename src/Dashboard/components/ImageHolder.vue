<template>
    <div class="col">
        <div class="p-0 rounded-4 image-placeholder position-relative clickable m-0">
            <button v-if="image!==''" 
                class="position-absolute top-0 start-100 translate-middle rounded-circle p-0 border-0"
                @click="removeImage">
                <font-awesome-icon :icon="['fas', 'circle-xmark']" size="xl"/>
            </button>
            <img  v-if="image!==''" :src="image" alt=" " class="image rounded-4 h-100 w-100 border"/>
        </div>
    </div>
</template>

<script>
export default {
    name:"ImageHolder",
    props:{
        image:String,
        imageIndex:Number
    },
    methods:{
        removeImage(){
            this.$emit("removeImage", this.imageIndex)
        }
    }
}
</script>

<style>
.image-placeholder{
    background-color: #FFF1D6;
    aspect-ratio: 2/2.2;
}
.image{
    object-fit: cover;
}
.clickable{
    cursor: pointer;
}
</style>