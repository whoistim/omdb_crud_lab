var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

var favList =[];

var movieDestroy = function(id){//the id is passed in
  favList.forEach(function (movie){
    if(id === movie.id){
      var index = favList.indexOf(movie);
      console.log(index);
      favList.splice(index,1);
    }
  });
};



app.set("view engine", "ejs");

app.get('/', function(req, res){
  res.render('index');
});

app.get('/search', function(req, res){

  var searchTerm = req.query.movieTitle;
  var url = "http://www.omdbapi.com/?s=" + searchTerm;

  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var obj = JSON.parse(body);
      // console.log(body);
      // if (obj.Error == "Movie not found!") {
      //   res.render("/", {error: obj.Error});
      // }
      res.render("results", {movieList: obj.Search});
    }
  });
});

app.get('/show/:id', function(req, res){
	// console.log(req);
	var omdbId = req.params.id;//get puts the paramas in the URL. use req.params to create a 
  //var to contain the parameter
  //query is another way of getting info from the browser
  //"/watchlater?a=1&b=2"
  var url = "http://www.omdbapi.com/?i=" + omdbId;

  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      obj = JSON.parse(body);
      // console.log(obj);
    }
    res.render("show", {film: obj});
  });
});


// app.post('/movie', function (req, res){
//   console.log("test this");
//   console.log(req.body);
//   res.redirect("show");
// });

app.post('/movie', function(req, res){

  var movie = {title: req.body.title, year: req.body.year, id: req.body.id};
	// the req.things have to match the "name" given the "value" by the requesting form
  favList.push(movie);

	res.render("saved", {myMovies: favList});

});

app.delete('/delete', function(req, res){
  // console.log(favList);

  var destroyID = req.body.id;
  // console.log(destroyID);
  movieDestroy(destroyID);
  console.log(favList);


  // console.log(movie);


  res.render("saved", {myMovies: favList});

});
app.listen(3000);
