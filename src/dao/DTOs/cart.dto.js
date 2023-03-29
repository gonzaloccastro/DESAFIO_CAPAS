import crypto from "crypto";
export default class CartDTO {
  constructor(cart) {
    this.products = cart.products;
    this.quantity = cart.quantity;
    this.price = cart.price;
    this.id = crypto.randomBytes(16).toString("hex");
  }
}
