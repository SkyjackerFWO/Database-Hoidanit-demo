import express from "express"
import bodyParser from "body-parser"
// query param ....
import viewEngine from "./config/viewEngine"
import initWebRoutes from "./route/web"
import connectDB from "./config/connectDB"
require('dotenv').config()  // The code for call env-library and use file .env 

let app = express();


 // config body-parser
app.use(bodyParser.json())                             
app.use(bodyParser.urlencoded({ extended : true}))

//config app
viewEngine(app)
initWebRoutes(app)

connectDB();

let port = process.env.PORT || 8069;
// PORT === undefine => port = 8069
app.listen(port, () =>{
    //callback
    console.log('Nodejs server is running on the port : ' + port)
    // check file package.json
})
