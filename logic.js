const movieDescription = document.getElementById("movieDetails")
const movieImage = document.getElementById('movieImage')
const searchButton = document.getElementById('searchButton')

var movieTitle = document.getElementById("searchButton")
var movieInputEl = document.getElementById("movie")
var apiKey = "50df99c2"


function getMovie() {
var userInput = movieInputEl.value.toLowerCase().trim()
const spacesReplaced = userInput.replace(/ /g, '+');

console.log(spacesReplaced)

var apiURL = "https://www.omdbapi.com/?t="+userInput+"&apikey="+apiKey

fetch(apiURL)
.then(function(response){
    console.log(response)
    return response.json()
})
.then(function(data){
    console.log(data) 
    displayMovieDetails(data)
})
}




function displayMovieDetails(data) {

var moviePlot= data.Plot
var movieTitle = data.Title 
var movieDate = data.Released 

var movieTitleEl = document.getElementById("title").innerText = movieTitle 
var movieDateEl = document.getElementById('released').innerText = movieDate 
var moviePlotEl = document.getElementById("plot").innerText = moviePlot

var imdb_id = data.imdbID

streamingOptions(imdb_id)

}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '99f78c7f21msh10fdc5f1f328442p189223jsn30ef56d2750a',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};


function streamingOptions(imdb_id) {


//for (i=0; i<streamingServices.length; i++){
// fetch('https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en', options)
// 	.then((response) => {
//        console.log(response)  
//        return response.json()
//     })
// 	.then(data => console.log(data))
// 	.catch(err => console.error(err));

fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&imdb_id="+imdb_id+"&output_language=en", options)
	.then(response => response.json())
	.then(function (data) {
        displayStream(data)
        displayPicture(data)
       console.log(data)
    });
    


//}

}

function displayStream(data) {

var streamDisplay = document.getElementById('streams')
var streamData = data.streamingInfo
var streamDataStringify = JSON.stringify(streamData)

console.log(streamDataStringify)

streamDisplay.innerText = streamDataStringify

  
}

function displayPicture(data) {

var pictureEl = document.getElementById('movieImage')
var imageSource = data.posterURLs.original
pictureEl.src = imageSource

}



searchButton.addEventListener('click', function(event) {
<<<<<<< HEAD
event.preventDefault()
getMovie()
console.log(movieTitle)
}) 
=======
    event.preventDefault()
    getMovie()
    streamingOptions()
    
    }) 
>>>>>>> bb9add205a437833b8759bd405e2ca7d3e14b1e0



    