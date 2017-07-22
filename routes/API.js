import express from 'express';
const router =express.Router();
import APIController  from '../controllers/movies';

router.get('/movies/:id',APIController.getMovieById);
router.get('/movies/update/:id',APIController.getUpdateMovie);
router.put('/movies/update/:id',APIController.putUpdateMovie);
router.delete('/movies/:id',APIController.deleteMovie);
router.get('/movies',APIController.getAllMovies);

module.exports=router;
