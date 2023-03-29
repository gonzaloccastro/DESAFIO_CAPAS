import crypto from "crypto";
export default class ProductDTO {
  constructor(product) {
    this.title = product.title;
    this.description = product.description;
    this.price = product.price;
    this.code = product.code;
    this.category = product.category;
    this.id = crypto.randomBytes(16).toString("hex");
  }
}
