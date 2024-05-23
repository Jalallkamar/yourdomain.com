function addWallet() {
    var amount = document.getElementById("amount").value;

    document.getElementById("wallet-message").innerText = "Added " + amount + "$ to your wallet.";
  }
  function searchMovie() {
    var searchValue = document.getElementById("search").value.toLowerCase();
    var movies = document.querySelectorAll(".movie");
    movies.forEach(function(movie) {
      var movieTitle = movie.querySelector("img").alt.toLowerCase();
      if (movieTitle.includes(searchValue)) {
        movie.style.display = "block";
      } else {
        movie.style.display = "none";
      }
    });
  }
  
  function bookingMovie() {
    var selectedMovie = document.getElementById("movie_selection").value;
    var userName = document.getElementById("user_name").value;
    var numberOfSeats = document.getElementById("number_of_seats").value;
    document.getElementById("movie").innerText = numberOfSeats + " ticket(s) booked for " + selectedMovie + " by " + userName + ".";
  }
  
    var bookingMessage = numberOfSeats + " seats booked for " + selectedMovie + " by " + userName + ".";
    document.getElementById("checkout-message").innerText = bookingMessage;
