import express from 'express';
import HomeController from '../controllers/home';
const router =express.Router();

router.get('/',HomeController.getController);
router.post('/',HomeController.postController);

module.exports=router;
