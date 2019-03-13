//List of marvel movies, by IMDB ID
const moviesIMDB = ["tt0458339", "tt4154664", "tt0371746", "tt1228705", "tt0800080", "tt0800369", "tt0848228", "tt1300854", "tt1981115", "tt1843866",
"tt2015381", "tt3896198", "tt2395427", "tt0478970", "tt3498820", "tt1825683", "tt2250912", "tt5095030", "tt1211837", "tt3501632", "tt4154756"];
//Array where I will save all my movie objects
const movies = [];
//For cycle to push each movie object from the data to my array
for(let i = 0; i < moviesIMDB.length; i++){
  fetch('http://www.omdbapi.com/?i=' + moviesIMDB[i] + '&apikey=69ecdec').then( (data) => {
    return data.json();
  }).then((dataAsJSON) => {
    movies[i] = dataAsJSON;
  });
}
//Checking in console that my array is created correctly and has all movies inside
console.log(movies);


function ThorMovies(movies){
  let thorMovies = movies;

  let movie = thorMovies[1];
  console.log(movie.title);
}
//Thor, Iron man, Cap America, Guardians, Avengers, Ant man - Hulk, Black panther, Dr Strange, Spiderman, Captain marvel
