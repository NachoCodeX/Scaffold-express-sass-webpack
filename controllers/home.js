let getController=(req,res) => {
  let movieName=req.query.search
  if(movieName){
    let regexp=new RegExp("^"+movieName);
    Movie.find({name:regexp},(err,movies)=>{
      res.render('allMovies',{movies});
    });
  }else res.render('index');

}


let postController=(req,res) => {
  const body=req.body;
  let movie=new Movie({
    name:body.name,
    author:body.author
  });

  movie.save((err,result) => {
    if(err) console.error(err);
    res.render('index')});
}


module.exports={
  getController,
  postController
}
