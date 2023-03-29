import ManagerMongoDb from "../dao/ManagerMongoDb.js";
import registroModel from "../models/registro.model.js";
import { registroService } from "../dao/repositories/index.js";



async function login(req,res){
    if(!req.user) return res.status(400).send({status: 'error', error: 'Usuario no encontrado'});
    req.session.user = {
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        age: req.user.age
    }
    req.session.admin = true;
    return res.status(200).send({message:'success'})
}


async function failLogin(req,res){
    console.log('failed Strategy')
    res.send({error: 'Failed Strategy'})
}

async function successLogin(req,res){
    if (await req.session.user){
        const userData = await registroModel.findOne({ email: req.session.user.email})
        const {firstName, lastName} = userData
        res.render('products',{firstName, lastName}) 
    }
}

async function logout(req,res){
    req.session.destroy(error => {
        if (error){
            res.status(401).send({message:'ERROR'})
        }else{
            res.status(200).send({message:'LogoutOK'})
        }
    })
}


export {login, failLogin, successLogin, logout}