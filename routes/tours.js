import express from 'express';
import { createTour, getFeaturedTour } from '../controllers/tourController.js';
import { updateTour } from '../controllers/tourController.js';
import { deleteTour } from '../controllers/tourController.js';
import { getSingleTour } from '../controllers/tourController.js';
import { getAllTour } from '../controllers/tourController.js';
import { getTourBySearch } from '../controllers/tourController.js';
import { getTourCount } from '../controllers/tourController.js';

import { verifyAdmin } from '../utils/verifyToken.js';
const router=express.Router();

router.post('/',verifyAdmin,createTour)
router.put('/:id',verifyAdmin,updateTour);
router.delete('/:id',verifyAdmin,deleteTour);
router.get('/:id',getSingleTour);
router.get('/',getAllTour);
router.get('/search/getTourBySearch',getTourBySearch);
router.get('/search/getFeaturedTour',getFeaturedTour);
router.get('/search/getTourCount',getTourCount);

export default router