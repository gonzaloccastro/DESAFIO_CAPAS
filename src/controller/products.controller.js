import ManagerMongoDb from "../dao/ManagerMongoDb.js";

const productManger = new ManagerMongoDb.ProductManger(); 

async function getAllProducts(req,res) {
    const {limit, page, sort, query} = req.query
    let queryList = {limit, page, sort, query}
    
    try{
        const products = await productManger.getProduct(queryList);
        res.send({status: 'success', products})
    }
    catch (err){
        res.status(500).send(err.message);
    }
};

async function createNewProduct(req,res){
    const newProduct = {
        ...req.body,
        };
        try {
        const response = await productManger.createProduct(newProduct);
        res.send(response);
        } catch (err) {
        res.status(500).send(err.message);
        }
};

async function modifyProduct(req,res){
    const {id} = req.params;
    const product = req.body;
    try{
        const response = await productManger.updateProduct(id, product);
        res.send(response); 
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}


async function deleteProduct (req,res){
    const {id} = req.params;
    try{
        const response = await productManger.deleteProduct(id);
        res.send({
            message: 'Product deleted successfully',
            id: id
        })
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}

export {getAllProducts, createNewProduct, modifyProduct, deleteProduct}