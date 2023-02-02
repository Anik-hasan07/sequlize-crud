const db = require("../models");

const Product = db.products;

// create product

const addProduct = async(req,res)=>{
    //validate request

    if(!req.body.title){
        res.status(400).send({
            message:"Content can not be empty"
        });
        return;
    }
    //create a product
    // let info={
    //     title:req.body.title,
    //     price:req.body.price,
    //     description:req.body.description,
    //     published:req.body.published?req.body.published:false
    // }

    const {title,price,description,published} = req.body

    //save product in the database
    try{
        const product = await Product.create({title,price,description,published});
        res.status(200).send(product)

    }catch(err){
        res.status(500).send({
            message:err.message||"Error occured while creating the product"
        })

    }
}

module.exports={addProduct}