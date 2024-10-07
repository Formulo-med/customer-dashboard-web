import axios from "axios";

export default class ProductsService {

	static getWhatsInTheBox(){
		return  axios.get('/json/products.json')
	}
}