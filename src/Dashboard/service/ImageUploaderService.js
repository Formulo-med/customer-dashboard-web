import axios from 'axios'

export default class ImageUploaderService{
    static uploadImages(images){
        return axios.post("http://localhost:5000/formulo-user/upload-images", images, 
            {
                headers: { 'Authorization': `Bearer token` }
            }
        )
    }
}