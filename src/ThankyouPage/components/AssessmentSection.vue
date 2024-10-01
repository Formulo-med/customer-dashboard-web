<template>
    <div class="d-flex flex-column">
        <h2 class="text-center my-5">
            Thank you 😊
        </h2>
        <div class="bg-light py-2">
            <div class="container my-5">
                <h2 class="text-center">
                    Upload your photos for accurate assessment
                </h2>
                <p class="text-center mt-4">
                    Kindly upload 4 clear photos of the affected area to help our doctor understand your skin concern and offer the best possible advice. 
                </p>
                <ImageUploader @image-added="addImageHandler" @image-removed="removeImageHandler"/>
                <div class="container d-flex justify-content-center mt-5">
                    <button class="btn bold btn-warning text-black rounded-4 px-4 col-sm-2 col-4" 
                        @click="saveImages"
                        :disabled="images.length<4"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageUploader from '@/ThankyouPage/components/ImageUploader.vue';
import ImageUploaderService  from '@/ThankyouPage/service/ImageUploaderService';
export default{
    name:"AssessmentComponent",
    components:{
        ImageUploader
    },
    data(){
        return {
            images:[]
        }
    },
    methods:{
        addImageHandler(event){
            this.images.push(event.target.files[0])
        },
        removeImageHandler(index){
            this.images.splice(index, 1)
        },
        saveImages(){            
            const formData = new FormData()
            
            this.images.forEach((image)=>{
                formData.append('images', image)
            })
           
            ImageUploaderService.uploadImages(formData).then(
                response=>console.log(response)
            ).catch(err=>{
                err.message ="Image upload failed."
            })
        }
    }
}
</script>