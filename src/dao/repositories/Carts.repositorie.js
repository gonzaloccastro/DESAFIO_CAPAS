import CartsDTO from "../DTOs/cart.dto.js";
export default class CartRepository {
  constructor(dao) {
    this.dao = dao;
  }
  async getCarts() {
    let carts = await this.dao.get();
    return carts;
  }
  async createCart(cart) {
    let cartToInsert = new CartsDTO(cart);
    let result = await this.dao.create(cartToInsert);
    return result;
  }
}
