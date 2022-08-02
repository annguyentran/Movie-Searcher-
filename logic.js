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

    var apiURL = "https://www.omdbapi.com/?t=" + userInput + "&apikey=" + apiKey

    fetch(apiURL)
        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            displayMovieDetails(data)
        })
}


function displayMovieDetails(data) {

    var moviePlot = data.Plot
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
        'X-RapidAPI-Key': '6f918b8759mshfa7194a6b3ca418p188bbajsn6f147a0f3c13',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
};


function streamingOptions(imdb_id) {

    fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&imdb_id=" + imdb_id + "&output_language=en", options)
        .then(response => {
            console.log(response)
            return response.json()
        })

        .then(function (data) {
            displayStream(data)
            displayPicture(data)
            console.log(data)
        }).catch(err => console.log(err));

}

function displayStream(data) {

    var streamDisplay = document.getElementById('streams')
    var streamData = data.streamingInfo
    var streamDataStringify = JSON.stringify(streamData)

    if (Object.keys(streamData).length === 0) {

        streamDisplay.innerText = "No streaming sites available (at least according to the API)"

    } else { 
        
        streamDisplay.innerText = streamDataStringify }


}

function displayPicture(data) {

    var pictureEl = document.getElementById('movieImage')
    var imageSource = data.posterURLs.original
    pictureEl.src = imageSource

}



searchButton.addEventListener('click', function (event) {
    event.preventDefault()
    getMovie()

})







