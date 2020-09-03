const movieList = [{
        year: 2020,
        name: "The Gentlemen",
        stars: 4,
    },
    {
        year: 2020,
        name: "Bad boys for Life",
        stars: 4,
    },
    {
        year: 2019,
        name: "Avengers Endgame",
        stars: 6,
    },
    {
        year: 2019,
        name: "Frozen II ",
        stars: 3,
    },
    {
        year: 2018,
        name: "Devil’s Gate",
        stars: 3,
    },
    {
        year: 2018,
        name: "The Lucky Man",
        stars: 3,
    },
];

const findMovie = function(movieList, name) {
    const movieName = movieList.findIndex(function(movie, movieName) {
        return movie.name.toLowerCase() === name.toLowerCase();
    });
    return movieList[movieName];
};

let printMe = findMovie(movieList, "Bad boys for Life");
console.log(printMe);

/*
let keys = Object.keys(movieList);
let vals = Object.values(movieList);
let entries = Object.entries(movieList);

function printMovie(movie) {
    var movie = keys + vals;
    console.log();
}

*/