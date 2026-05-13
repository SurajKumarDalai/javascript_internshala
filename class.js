// You are developing a simple program to manage a library system.
// Your task is to create a Book class that represents a book in the library. Each book should have the following properties:

// title (string) - The title of the book.
// author (string) - The author of the book.
// year (number) - The year the book was published.
// The Book class should have the following methods:

// getSummary() - This method should return a string summarizing the book details in the format: "Title by Author, published in Year."
// Create the Book class and demonstrate how to create an instance of the Book class and call the getSummary() method.

// class book {
//     constructor(title,author,year){
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }


// getSummary(){
//     return `${this.title} by ${this.author}, published in ${this.year}`;
// }
// }

// const book1 = new book(
//     "Atomic Habits",
//     "James Clear",
//     2018
// );

// console.log (book1.getSummary());


// You are enhancing the library system to manage different types of books. Your task is to create a Book class and a Magazine class that inherits from Book.

// The Book class should have the following properties:

// title (string) - The title of the book.
// author (string) - The author of the book.
// year (number) - The year the book was published.
// The Book class should have the following method:

// getSummary() - This method should return a string summarizing the book details in the format: "Title by Author, published in Year."
// The Magazine class should inherit from the Book class and add the following property:

// month (string) - The month the magazine was published.
// The Magazine class should override the getSummary() method to include the month in the summary. The method should return a string in the format: "Title by Author, published in Month Year."

// Create both classes and demonstrate how to create instances of both classes and call the getSummary() method.


class Book {

    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummarys() {
        return `${this.title} by ${this.author}, published in ${this.year}.`;
    }

}

class Magazine extends Book {

    constructor(title, author, year, month) {

        super(title, author, year);

        this.month = month;
    }

    getSummary() {
        return `${this.title} by ${this.author}, published in ${this.month} ${this.year}.`;
    }

}

// const book1 = new Book(
//     "Atomic Habits",
//     "James Clear",
//     2018
// );

const mag1 = new Magazine(
    "Tech World",
    "John Smith",
    2024,
    "January"
);

// console.log(book1.getSummary());

console.log(mag1.getSummary());





// Question 1 — Movie and WebSeries Class

// Create a Movie class with the following properties:
// title (string) → Movie name
// director (string) → Director name
// year (number) → Release year
// The Movie class should have the following method:
// getDetails()
// This method should return:
// Title directed by Director, released in Year.
// Create Another Class
// Create a WebSeries class that inherits from Movie.
// Additional property:
// seasons (number) → Number of seasons
// The WebSeries class should override:
// getDetails()
// New output format:
// Title directed by Director, released in Year with Seasons seasons.


class Movie {
    constructor(title,director,year){
        this.title=title;
        this.director = director;
        this.year = year ;
    }
    getDetails(){
        return `${this.title} directed by ${this.director} released in ${this.year}`;
    }
}

class WebSeries extends Movie{
    constructor(title,director,year,seasons){
        super(title,director,year);
        this.seasons = seasons ;
    }
    getDetails(){
        return `${this.title} directed by ${this.director} released in ${this.year} with seasons ${this.seasons}`;
    }
}

const mymovies = new Movie("blind", "rajamoli jain",1995);
console.log(mymovies.getDetails());
const mywebseries= new WebSeries("run", "rk jain",1995,"s2");
console.log(mywebseries.getDetails());


