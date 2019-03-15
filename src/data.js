//List of marvel movies, by IMDB ID
const moviesIMDB = ["tt0458339", "tt4154664", "tt0371746", "tt1228705", "tt0800080", "tt0800369", "tt0848228", "tt1300854", "tt1981115", "tt1843866",
"tt2015381", "tt3896198", "tt2395427", "tt0478970", "tt3498820", "tt1825683", "tt2250912", "tt5095030", "tt1211837", "tt3501632", "tt4154756"];
//Array of concatenated urls for my fetch
const fetchURL = urlGen(moviesIMDB);
//Function to create url for fetch with IDs and key
function urlGen(moviesIMDB){
  const fetchURL = [];
  for(i = 0; i < moviesIMDB.length; i++){
    fetchURL[i] = 'https://www.omdbapi.com/?i=' + moviesIMDB[i] + '&apikey=69ecdec';
  }
  return fetchURL;
}
//Array of movie trailers
const movieTrailers = ["https://www.youtube.com/embed/JerVrbLldXw", "https://www.youtube.com/embed/Z1BCujX3pw8", "https://www.youtube.com/embed/8hYlB38asDY", "https://www.youtube.com/embed/BoohRoVA9WQ", "https://www.youtube.com/embed/xbqNb2PFKKA",
"https://www.youtube.com/embed/JOddp-nlNvQ", "https://www.youtube.com/embed/eOrNdBpGMv8", "https://www.youtube.com/embed/oYSD2VQagc4", "https://www.youtube.com/embed/npvJ9FTgZbM", "https://www.youtube.com/embed/tbayiPxkUMM",
"https://www.youtube.com/embed/d96cjJhvlMA", "https://www.youtube.com/embed/dW1BIid8Osg", "https://www.youtube.com/embed/tmeOjFno6Do", "https://www.youtube.com/embed/pWdKf3MneyI", "https://www.youtube.com/embed/FkTybqcX-Yo",
"https://www.youtube.com/embed/xjDjIWPwcPU", "https://www.youtube.com/embed/n9DwoQ7HWvI", "https://www.youtube.com/embed/8_rTIAOohas", "https://www.youtube.com/embed/HSzx-zryEgM", "https://www.youtube.com/embed/ue80QwXMRHg",
"https://www.youtube.com/embed/6ZfuNTqbHE8"];

main();

//Async function to fetch data
async function fetchData(fetchURL) {
  //Array where I will save all my movie objects
  let movies = [];
  // Create all the promises and wait for them
  //Map me regresa tres valores, el valor actual, el índice del valor actual y el arreglo que se está mapeando en ese orden
  const fetchPromises = fetchURL.map(async (url, index) => {
    // Get response
    const response = await fetch(url);
    // Get json data
    const data = await response.json();
    movies[index] = data;
  });
  //I make sure that the data is fetched before I return my array
  await Promise.all(fetchPromises);
  return movies;
}
//Main function is async as well, because here I run the fetching first and then the rest
async function main() {
  //I wait for the data to be fetched, and after that I organize my data by characters for further use
  let movies = await fetchData(fetchURL);
  movies = addLinks(movies, movieTrailers);
  printMovies(movies);
  //I create arrays for the characters that have more than one movie, so we can classify them
  const thor = filterThor(movies);
  const ironMan = filterIronMan(movies);
  const captainAmerica = filterCapAmerica(movies);
  const guardians = filterGuardians(movies);
  const avengers = filterAvengers(movies);
  const antMan = filterAntMan(movies);
  // document.getElementById("no").addEventListener("click", printMovies(movies));
}

//Function to add the URL links of the youtube trailers to each movie object
function addLinks(movies, movieTrailers){
  for(let i = 0; i < movies.length; i++){
    movies[i].URL = movieTrailers[i];
  }
  return movies;
}

//Función que sirve para imprimir data
function printMovies (movies){;
  let div = document.getElementById('root');
  div.innerHTML = " ";

  movies.map((movies) => {
    let title = movies.Title + " (" + movies.Year + ")"
    let nameMovies =
      `<div class="movies">
        <a href="#modal_video" class="video_content"  data-trailer-youtube-id="${movies.URL}">
        <div class="movieBg" style="background-image:url(${movies.Poster});"></div>
        <div class="movieText">
          <h3 class="movieTitle"><strong>${title}</strong></h3>
          <p class="moviePlot">${movies.Plot}</p>
        </div>
        </a>

      </div>`;
    div.insertAdjacentHTML("beforeend", nameMovies);
  })
}
// Start playing the video whenever the trailer modal is opened
$(document).on('click', '.video_content', function (event) {
   let trailerYouTubeId = $(this).attr('data-trailer-youtube-id')
   let sourceUrl = trailerYouTubeId;
   console.log(trailerYouTubeId);
   $("#trailer-video-container").empty().append($("<iframe></iframe>", {
     'id': 'trailer-video',
     'type': 'text-html',
     'src': sourceUrl,
     'frameborder': 0
   }));
});

function filterThor(movies){
  const thor = [];

  for(let i = 0; i < movies.length; i++){
    if(movies[i].Title.includes("Thor")){
      thor.push(movies[i]);
    }
  }
  return thor;
}

function filterIronMan(movies){
  const ironMan = [];

  for(let i = 0; i < movies.length; i++){
    if(movies[i].Title.includes("Iron")){
      ironMan.push(movies[i]);
    }
  }
  return ironMan;
}

function filterCapAmerica(movies){
  const captainAmerica = [];

  for(let i = 0; i < movies.length; i++){
    if(movies[i].Title.includes("Captain America")){
      captainAmerica.push(movies[i]);
    }
  }
  return captainAmerica;
}

function filterGuardians(movies){
  const guardians = [];

  for(let i = 0; i < movies.length; i++){
    if(movies[i].Title.includes("Guardians")){
      guardians.push(movies[i]);
    }
  }
  return guardians;
}

function filterAvengers(movies){
  const avengers = [];

  for(let i = 0; i < movies.length; i++){
    if(movies[i].Title.includes("Avengers")){
      avengers.push(movies[i]);
    }
  }
  return avengers;
}

function filterAntMan(movies){
  const antMan = [];

  for(let i = 0; i < movies.length; i++){
    if(movies[i].Title.includes("Ant")){
      antMan.push(movies[i]);
    }
  }
  return antMan;
}

// <div id="modal_video" class="modal_container">
//     <div id="container_video" class="container_video">
//         <a href="#marvel_universe" class="color_button"><span class="icon-squared-cross"></span></a>
//         <iframe width="760" height="350" src=${movies.URL}
//         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//         allowfullscreen class="video_trailer"></iframe>
//     </div>
// </div>


//Thor, Iron man, Cap America, Guardians, Avengers, Ant man - Hulk, Black panther, Dr Strange, Spiderman, Captain marvel
