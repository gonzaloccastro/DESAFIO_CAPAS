import ProductsDTO from "../DTOs/product.dto.js";
export default class ProductRepository {
  constructor(dao) {
    this.dao = dao;
  }
  async getProducts() {
    let carts = await this.dao.get();
    return carts;
  }
  async createProduct(product) {
    let productToInsert = new ProductsDTO(product);
    let result = await this.dao.create(productToInsert);
    return result;
  }
}
