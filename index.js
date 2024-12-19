// Fetching data and displaying movie details
document.addEventListener('DOMContentLoaded', () => {
  // Select elements
  const filmList = document.getElementById('films');
  const movieTitle = document.getElementById('movie-title');
  const moviePoster = document.getElementById('movie-poster');
  const movieRuntime = document.getElementById('movie-runtime');
  const movieShowtime = document.getElementById('movie-showtime');
  const movieDescription = document.getElementById('movie-description');
  const availableTickets = document.getElementById('available-tickets');
  const buyTicketButton = document.getElementById('buy-ticket');

  // Fetch movie data
  fetch('http://localhost:3000/films')
    .then(response => response.json())
    .then(movies => {
      // Populate movie list
      movies.forEach(movie => {
        const li = document.createElement('li');
        li.classList.add('film-item');
        li.textContent = movie.title;
        li.onclick = () => showMovieDetails(movie);
        filmList.appendChild(li);
      });

      // Default movie
      if (movies.length > 0) {
        showMovieDetails(movies[0]);
      }
    });

  // Display movie details
  function showMovieDetails(movie) {
    movieTitle.textContent = movie.title;
    moviePoster.src = movie.poster;
    movieRuntime.textContent = `Runtime: ${movie.runtime} mins`;
    movieShowtime.textContent = `Showtime: ${movie.showtime}`;
    movieDescription.textContent = `Description: ${movie.description}`;
    availableTickets.textContent = `Available Tickets: ${movie.capacity - movie.tickets_sold}`;

    // Handle buying tickets
    buyTicketButton.disabled = movie.tickets_sold >= movie.capacity;
    buyTicketButton.textContent = movie.tickets_sold >= movie.capacity ? 'Sold Out' : 'Buy Ticket';

    buyTicketButton.onclick = () => {
      if (movie.tickets_sold < movie.capacity) {
        // Update available tickets (frontend)
        availableTickets.textContent = `Available Tickets: ${movie.capacity - movie.tickets_sold - 1}`;

        //  Update server with PATCH request
        fetch(`http://localhost:3000/films/${movie.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            tickets_sold: movie.tickets_sold + 1
          })
        });
      }
    };
  }
});
