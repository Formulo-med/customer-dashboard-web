<template>
    <div class="container-sm bg-white p-0 justify-content-center mt-5 px-2">
        <div class="row row-cols-2 row-cols-md-5 gx-3 row-gap-3 py-4 px-2">
            <div class="col">
                <div class="d-flex flex-column p-0 rounded-4 image-placeholder align-items-center justify-content-center clickable" @click="initiateImageUpload">
                    <font-awesome-icon :icon="['fas', 'upload']" size="xl"/>
                    <p class="fs-sm-4">Upload</p>
                    <input type="file" id="fileInput" class="d-none"  accept=".jpg, .jpeg, .heic, .png" ref="fileRef" @change="imageChangeHandler">
                </div>
            </div>

            <ImageHolder v-for="index in 4" 
                :key="index-1" 
                :image="getImage(index-1)" 
                :image-index="index-1" 
                @remove-image="removeImageHandler"
            />
        </div>
    </div>
</template>
<script>
import ImageHolder from '@/Dashboard/components/ImageHolder.vue';
export default{
    name:"ImageUploader",
    components:{
        ImageHolder
    },
    data(){
        return {
            previews: []
        }
    },
    methods:{
        initiateImageUpload(){
            this.$refs.fileRef.click()
        },

        imageChangeHandler(event){
            const image = event.target.files[0]
            if(image){     
                const reader = new FileReader()
                reader.onload = (onLoadEvent) => {
                    this.previews.push(onLoadEvent.target.result)
                }
                reader.readAsDataURL(image)
                this.$emit("imageAdded", event)
            }
        },

        getImage(index){
            if(index < this.previews.length){
                return this.previews[index]
            }
            else{
                return ""
            }
        },

        removeImageHandler(index){
            this.previews.splice(index,1)
            this.$emit("imageRemoved", index)
        }
    }
}
</script>

<style>
.clickable{
    cursor: pointer;
}
</style>