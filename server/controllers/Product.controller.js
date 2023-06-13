const { Product } = require("../models/Product.model")

module.exports.test = (req, res) => {
    res.json("The server say hello world")
}

//Create a new Product
module.exports.CreateProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => { res.json({ Product: newProduct }) })
        .catch(err => res.status(400).json({
            messge: "Somthing went wrong", error: err
        }))
}

//Read AllProduct
module.exports.findAllProduct = (req, res) => {
    Product.find({ myProduct: 0 })
        .then(Product => { res.json(Product) })
        .catch(err => res.status(400).json({
            messge: "Somthing went wrong", error: err
        }))

}

//Read all myProduct
module.exports.findMyProduct = (req, res) => {
    Product.find({ myProduct: req.params.user_id })
        .then(Product => { res.json(Product) })
        .catch(err => res.status(400).json({
            messge: "Somthing went wrong", error: err
        }))

}

// Get Product
module.exports.findProduct = (req, res) => {
    Product.find({ _id: req.params.Product_id })
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.status(400).json(err))
}



//Delete One Product
module.exports.DeleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.Product_id })
        .then(result => res.json("Delete with succ"))
        .catch(err => res.status(400).json(err))
}

//Update One Product
module.exports.UpadateOneProduct = (req, res) => {
    console.log(req.body)
    Product.findOneAndUpdate({ _id: req.params.Product_id }, req.body, { new: true })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
}


