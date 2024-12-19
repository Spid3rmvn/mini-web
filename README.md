
# Godwin's - Movie Ticket App

## Description

"Godwin's - Movie Ticket App" is a simple, interactive web application that allows users to view available movies, check detailed information about each movie, and purchase tickets. The app is powered by a local JSON server that handles movie data, including titles, descriptions, showtimes, and ticket availability.

## Features

- **Movie List:** Displays a list of available movies with their titles.
- **Movie Details:** When a user selects a movie, detailed information is shown, including:
  - Title
  - Poster image
  - Runtime
  - Showtime
  - Description
  - Available tickets
- **Ticket Purchase:** Users can purchase tickets, and the available ticket count is updated in real-time. If the movie reaches capacity, the "Buy Ticket" button becomes disabled.
- **Responsive Design:** The app is designed to be fully responsive on different screen sizes.

## Technologies Used

- **HTML**: Markup for creating the webpage structure.
- **CSS**: Styling the application to make it visually appealing.
- **JavaScript**: Fetching movie data from a local JSON server and dynamically updating the page.
- **JSON Server**: A mock backend server to serve movie data.

## File Structure

```
/index.html        # Main HTML file
/index.css         # Stylesheet for the app
/index.js          # JavaScript for fetching movie data and handling ticket purchase
/images/           # Folder containing movie posters
/db.json           # Local JSON file serving movie data (for the mock server)
```

## Example Movie Data

Here's an example of the movie data structure used by the app:

```json
{
  "films": [
    {
      "id": "1",
      "title": "Moana 2",
      "runtime": 100,
      "capacity": 113,
      "showtime": "07:30PM",
      "tickets_sold": 0,
      "description": "After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
      "poster": "./images/moana2.jpg"
    },
    {
      "id": "2",
      "title": "Batman vs Superman",
      "runtime": 151,
      "capacity": 180,
      "showtime": "09:00PM",
      "tickets_sold": 0,
      "description": "Batman v Superman: Dawn of Justice is a 2016 movie about the clash between Batman and Superman, two vigilantes who are manipulated by Lex Luthor into fighting each other",
      "poster": "./images/superman.jpg"
    },
    {
      "id": "3",
      "title": "John Wick: Chapter 4",
      "runtime": 169,
      "capacity": 200,
      "showtime": "08:00PM",
      "tickets_sold": 0,
      "description": "John Wick: Chapter 4 is a 2023 action movie about John Wick (Keanu Reeves) seeking vengeance against the High Table.",
      "poster": "./images/johnwick.jpg"
    },
    {
      "id": "4",
      "title": "Spider-Man: Across the Spider-Verse",
      "runtime": 140,
      "capacity": 200,
      "showtime": "06:00PM",
      "tickets_sold": 0,
      "description": "Spider-Man: Across the Spider-Verse is a 2023 animated superhero film about Miles Morales, who is thrown across the Multiverse and must save his loved ones.",
      "poster": "./images/spiderman.jpg"
    },
    {
      "id": "5",
      "title": "Joker",
      "runtime": 122,
      "capacity": 150,
      "showtime": "05:30PM",
      "tickets_sold": 0,
      "description": "Arthur Fleck, a party clown and a failed stand-up comedian, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of chaos in Gotham City.",
      "poster": "./images/joker.jpg"
    }
  ]
}
```

## Setup Instructions

1. **Clone the repository**: Clone or download the project files to your local machine.
2. **Install JSON Server**: If you don't have JSON Server installed, run the following command:
   ```
   npm install -g json-server
   ```
3. **Run the server**: In the project directory, run:
   ```
   json-server --watch db.json --port 3000
   ```
4. Open `index.html` in your browser to view the app.

## License

This project is open-source and available under the MIT License.
