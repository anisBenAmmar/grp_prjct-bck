const express = require("express")
const cors = require("cors")

const app = express();
const port = 8000;

app.use(cors())
app.use(express.json(), express.urlencoded({ extends: true }))

require("./config/mongoose.config")


const AllProductRoutes = require("./routes/Product.routes")
AllProductRoutes(app)


app.listen(port, console.log(`Your server is running smoothly at ${port}`))

