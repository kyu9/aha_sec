import express from 'express'
import {index} from '../controllers/index.controller'

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
    res.send('Run!')
})

export default router
