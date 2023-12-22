const express = require('express')
const router = express.Router()


const {create,getAll,getById,update,deleteOne} = require('../controller/crudController')


router.get('/home',(req,res)=>{
    res.send("This is home page")
})
router.post('/create',create)
router.get('/getAll',getAll)
router.get('/getById/:id',getById)
router.put('/update/:id',update)
router.delete('/deleteOne/:id',deleteOne)





module.exports = router;
