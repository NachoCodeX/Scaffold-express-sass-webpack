import Movie from '../models/movie';

let getMovieById = (req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
    if(movie){ res.send(movie); }
    else res.send('movit not exists');
  });
};

let getUpdateMovie=(req,res) => {
  Movie.findById(req.params.id, (err, movie) => {
    res.render('updateMovie',{movie});
  });
};

let putUpdateMovie=(req,res) => {
  let query={'_id':req.params.id},movieUpdated={name:req.body.name,author:req.body.author};
  Movie.findOneAndUpdate(query,movieUpdated,{upsert:true},(err,doc) => {
    return res.redirect('/api/movies');
  });
};

let deleteMovie=(req,res) => {
  Movie.remove({_id:req.params.id},(err) => {
    return res.redirect('/api/movies');
  });
};

let getAllMovies=(req,res) => {
  Movie.find({},(err,movies) => {
    res.render('allMovies',{movies});
  });
};

module.exports={
  getMovieById,
  getUpdateMovie,
  putUpdateMovie,
  deleteMovie,
  getAllMovies
};
