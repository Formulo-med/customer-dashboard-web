import _ from 'underscore';

const productDefaultData = {
	productId: "",
	productName: "Unknown Product",
	productActives: "No actives provided",
	productSkinType: "All Skin Types",
	productPrice: 0,
	productDiscountedPrice: 0,
	productShortDescription: "No description available.",
	productLongDescription: "No product description available.",
	productBenefits:"No benefits described"
};

class ProductDetailsModel {
	constructor(data) {
		this.productId = _.get(data, 'product_id') || productDefaultData.productId;
		this.productName = _.get(data, 'product_name') || productDefaultData.productName;
		this.productActives = _.get(data, 'product_actives') || productDefaultData.productActives;
		this.productSkinType = _.get(data, 'product_skin_type') || productDefaultData.productSkinType;
		this.productSize = _.get(data, 'product_size');
		this.productTag = _.get(data, 'product_tag');
		this.productPrice = parseFloat(_.get(data, 'product_price') || productDefaultData.productPrice);
		this.productDiscountedPrice = parseFloat(_.get(data, 'product_discounted_price') || productDefaultData.productDiscountedPrice);
		this.productShortDescription = _.get(data, 'product_short_description') || productDefaultData.productShortDescription;
		this.productLongDescription = _.get(data, 'product_long_description') || productDefaultData.productLongDescription;
		this.productImages = _.get(data, 'product_images');
		this.productBenefits = _.get(data, 'product_benefits',[]).map(benefit => ({
			iconUrl: _.get(benefit, 'icon_url', ""),
			iconName: _.get(benefit, 'icon_name', "")
		})) || productDefaultData.productBenefits;
	}
}

export default ProductDetailsModel;
