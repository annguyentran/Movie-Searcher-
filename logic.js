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



searchButton.addEventListener('click', function(event) {
event.preventDefault()
getMovie()

}) 

function displayMovieDetails(data) {

var moviePlot= data.Plot
var movieTitle = data.Title 
var movieDate = data.Released 

var movieTitleEl = document.getElementById("title").innerText = movieTitle 
var movieDateEl = document.getElementById('released').innerText = movieDate 
var moviePlotEl = document.getElementById("plot").innerText = moviePlot

}


