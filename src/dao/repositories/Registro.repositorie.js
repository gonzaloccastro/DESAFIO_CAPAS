import RegistroDTO from "../DTOs/registro.dto.js";
export default class RegistroRepository {
  constructor(dao) {
    this.dao = dao;
  }
  async getCarts() {
    let registro = await this.dao.get();
    return registro;
  }
  async createCart(registro) {
    let registroToInsert = new RegistroDTO(registro);
    let result = await this.dao.create(registroToInsert);
    return result;
  }
}
