  // Added by Anamika for calling api
  
  // Example queryURL for Most popular games in 2019 from RAWB

        // var queryURL = "https://api.rawg.io/api/games?dates=2019-01-01%2C2019-12-31&ordering=-added&page=2";

        // highest rated games from 2001 & ordered by rating searching by genres ids 80,4 (xbox and PC)
        var queryURL = "https://api.rawg.io/api/games?dates=2001-01-01,2001-12-31&ordering=-rating&genres=10&platforms=80,4";


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        });
