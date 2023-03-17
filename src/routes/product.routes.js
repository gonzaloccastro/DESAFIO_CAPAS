import { Router } from "express";
import {getAllProducts, createNewProduct, modifyProduct, deleteProduct} from "../controller/products.controller.js";

const router = Router();

router.get('/', (req, res) => {getAllProducts});

router.post('/', (req,res) => {createNewProduct})

router.put('/:id', (req, res) => {modifyProduct})

router.delete('/:id', (req, res) => {deleteProduct})

export default router;