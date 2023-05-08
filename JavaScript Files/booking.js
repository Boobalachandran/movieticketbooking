// Get the genre select element and apply filter button
var genreSelect = document.getElementById('genre-select');
var applyFilterBtn = document.getElementById('apply-filter-btn');

// Add an event listener to the apply filter button
applyFilterBtn.addEventListener('click', function() {
  // Get the selected genre
  var selectedGenre = genreSelect.value;

  // Get all movie options
  var movieOptions = document.querySelectorAll('.movie-option');

  // Loop through each movie option
  for (var i = 0; i < movieOptions.length; i++) {
    var movieOption = movieOptions[i];

    // Get the genre of the movie option
    var movieGenre = movieOption.getAttribute('data-genre');

    // Check if the selected genre is "all" or matches the movie genre
    if (selectedGenre === 'all' || selectedGenre === movieGenre) {
      // Show the movie option
      movieOption.style.display = 'block';
    } else {
      // Hide the movie option
      movieOption.style.display = 'none';
    }
  }
});

// Get the movie select element and select movie button
var movieSelect = document.getElementById('movie-select');
var selectMovieBtn = document.getElementById('select-movie-btn');

// Add an event listener to the select movie button
selectMovieBtn.addEventListener('click', function() {
  var selectedMovie = movieSelect.value;

  if (selectedMovie === 'movie1') {
    window.location.href = 'ps2timings.html';
  } else if (selectedMovie === 'movie2') {
    window.location.href = 'rudhrantimings.html';
  } else if (selectedMovie === 'movie3') {
    window.location.href = 'gogtimings.html';
  }
});

// Get the search input and search button
var searchInput = document.getElementById('search-input');
var searchButton = document.getElementById('search-btn');

// Add an event listener to the search button
searchButton.addEventListener('click', searchMovies);

// Function to search movies
function searchMovies() {
  // Get the search query from the input field
  var query = searchInput.value.toLowerCase();

  // Get all movie options
  var movieOptions = document.querySelectorAll('.movie-option');

  // Loop through each movie option and check if the title matches the search query
  for (var i = 0; i < movieOptions.length; i++) {
    var movieTitle = movieOptions[i].querySelector('img').alt.toLowerCase();

    // Check if the movie title contains the search query
    if (movieTitle.includes(query)) {
      movieOptions[i].style.display = 'block'; // Show the movie option
    } else {
      movieOptions[i].style.display = 'none'; // Hide the movie option
    }
  }
}

