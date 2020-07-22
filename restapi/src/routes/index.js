import express from 'express'
import {index} from '../controllers/index.controller'

var router = express.Router();

/* GET home page. */
router.get('/',index)

export default router
