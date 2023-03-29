import { cartsService } from "../dao/repositories/index.js";

async function getCarts(req,res){
    try{
        const cart = await cartsService.getCarts()
        res.send(cart)
    }
    catch (err){
        res.status(500).send(err.message)
    }
};


async function completePurchase(req,res){
    try{
        const cart = await cartsService.getCarts()
        if (condition) {
            
        } else {
            
        }

    }
    catch (err){
        res.status(500).send(err.message)
    }
};

async function createNewCart(req, res){
    try{
        const response = await cartsService.createCart([])
        res.send(response)
    }
    catch (err){
        res.status(500).send(err.message)
    }
};

async function addThisProductToCart(req, res) {
    const {cid} = req.params;
    const {pid} = req.params;
    let {quantity} = req.body
    try {
        const response = await cartsService.addProductToCart(cid, pid, quantity);
        res.send(response);
      } catch (err) {
        res.status(500).send(err.message);
      }
};

async function deleteThisProduct(req,res){
    const {cid} = req.params;
    const {pid} = req.params;

    try {
        const response = await cartsService.removeProductFromCart(cid, pid);
        res.send({
            message: 'Product deleted successfully',
            id: pid
        })
      } catch (err) {
        res.status(500).send(err.message);
      }
};

async function deleteCart(req,res){
    const {cid} = req.params;
    try {
        const response = await cartsService.deleteAllProductCart(cid);
        res.send({
            message: 'Cart deleted successfully',
            id: cid
        })
    }
    catch (err) {
        req.status(500).send(err.message)
    }
};

export{getCarts, createNewCart, addThisProductToCart, completePurchase, deleteThisProduct, deleteCart}