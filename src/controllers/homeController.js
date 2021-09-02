
import db from "../models/index.js"
let getHomePage = async(req,res) =>{
    try{    
        let data = await db.User.findAll()
        
        return res.render('homePage.ejs',{
            data : JSON.stringify(data)
        })
    } catch (e){
        console.log(e)
    }

}

module.exports = {
    getHomePage : getHomePage,
} // luu vao trong 1 object de cho co the goi nhieu hon 