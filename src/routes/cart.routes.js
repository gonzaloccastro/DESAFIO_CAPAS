import { Router } from "express";
import {getCarts, createNewCart, addThisProductToCart, deleteThisProduct, completePurchase, deleteCart} from "../controller/carts.controller.js";

const router = Router();

router.get('/', (req, res) => {getCarts})

router.get('/:cid/purchase', (req, res) => {completePurchase})

router.post('/', (req, res) => {createNewCart})

router.put('/:cid/products/:pid', (req, res) => {addThisProductToCart})

router.delete('/:cid/products/:pid', (req, res) => {deleteThisProduct})

router.delete('/:cid' , (req,res)=>{deleteCart})

export default router;