const ProductController = require("../controllers/Product.controller")
const UsersController = require("../controllers/user.controller")

const ShoppingCartController = require ("../controllers/ShoppingCart.controller")
const JwtController = require("../controllers/Jwt.controller")


module.exports = (app) => {
    app.get("/api/allProduct", JwtController.authenticateToken,ProductController.findAllProduct)
    app.get("/api/allMyProduct", JwtController.authenticateToken, ProductController.findMyProduct)
    app.post("/api/addProduct", JwtController.authenticateToken, ProductController.CreateProduct)
    app.get("/api/view/:Product_id", JwtController.authenticateToken, ProductController.findProduct)
    app.delete("/api/deleteProduct/:Product_id", JwtController.authenticateToken, JwtController.authenticateToken, ProductController.DeleteProduct)
    app.put("/api/edit/:Product_id", JwtController.authenticateToken, ProductController.UpadateOneProduct)
    app.post("/api/user/register",UsersController.register )
    app.post("/api/user/login",UsersController.login )
    app.post("/api/addCart", JwtController.authenticateToken, ShoppingCartController.addItemToCart)
    app.delete("/api/deleteCart", JwtController.authenticateToken, ShoppingCartController.removeItemFromCart)
}
