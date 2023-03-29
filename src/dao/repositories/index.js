import { Carts, Products, Registros } from "../factory.js";
import RegistroRepository from "./Registro.repositorie.js";
import CartsRepository from "./Carts.repositorie.js";
import ProductRepository from "./Products.repositorie.js";

export const registroService = new RegistroRepository(new Registros());
export const cartsService = new CartsRepository(new Carts());
export const productsService = new ProductRepository(new Products());
