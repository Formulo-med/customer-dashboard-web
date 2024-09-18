import _ from 'underscore';

const productDefaultData = {
	product_id: "",
	product_name: "Unknown Product",
	product_actives: "No actives provided",
	product_skin_type: "All Skin Types",
	product_price: 0,
	product_discounted_price: 0,
	product_short_description: "No description available.",
	product_long_description: "No product description available.",
	product_benefits:[]
};

class ProductDetailsModel {
	constructor(data) {
		this.product_id = _.get(data, 'product_id') || productDefaultData.product_id;
		this.product_name = _.get(data, 'product_name') || productDefaultData.product_name;
		this.product_actives = _.get(data, 'product_actives') || productDefaultData.product_actives;
		this.product_skin_type = _.get(data, 'product_skin_type') || productDefaultData.product_skin_type;
		this.product_size = _.get(data, 'product_size');
		this.product_tag = _.get(data, 'product_tag');
		this.product_price = parseFloat(_.get(data, 'product_price') || productDefaultData.product_price);
		this.product_discounted_price = parseFloat(_.get(data, 'product_discounted_price') || productDefaultData.product_discounted_price);
		this.product_short_description = _.get(data, 'product_short_description') || productDefaultData.product_short_description;
		this.product_long_description = _.get(data, 'product_long_description') || productDefaultData.product_long_description;
		this.product_images_1 = _.get(data, 'product_images_1');
		this.product_images_3 = _.get(data, 'product_images_3');
		this.productBenefits = _.get(data, 'product_benefits') || productDefaultData.product_benefits.map(benefit => ({
			iconUrl: _.get(benefit, 'icon_url', ""),
			iconName: _.get(benefit, 'icon_name', "")
		}));
	}
}

export default ProductDetailsModel;
