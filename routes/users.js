import express from 'express'
import { updateuser,deleteuser,getSingleuser,getAlluser } from '../controllers/userController.js';

import {verifyUser,verifyAdmin} from '../utils/verifyToken.js';


const router=express.Router();

router.put('/:id',verifyUser,updateuser);
router.delete('/:id',verifyUser,deleteuser);
router.get('/:id',verifyUser,getSingleuser);
router.get('/',verifyAdmin,getAlluser);
export default router