import config from "../config/config.js";
import mongoose from "mongoose";
let Carts;
let Products;
let Registros;

switch (config.persistence) {
  case "MONGO":
    const connection = mongoose.connect(config.mongoUrl);
    const { default: CartsMongo } = await import(
      "../dao/mongo/ManagerMongoDB.js"
    );
    const { default: ProductsMongo } = await import(
      "../dao/mongo/ManagerMongoDB.js"
    );
    const { default: RegistroMongo } = await import(
        "../dao/mongo/ManagerMongoDB.js"
    );
    Registros = RegistroMongo;
    Carts = CartsMongo;
    Products = ProductsMongo;
    break;
  case "MEMORY":
    const { default: RegistrosMemory } = await import(
        "./memory/carts.memory.js"
      );
    const { default: CartsMemory } = await import(
      "./memory/carts.memory.js"
    );
    const { default: ProductsMemory } = await import(
      "./memory/products.memory.js"
    );
    Registros = RegistrosMemory;
    Products = ProductsMemory;
    Carts = CartsMemory;
    break;
}
export { Carts, Products, Registros };
