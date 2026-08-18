// Select the database to use.
use('Sigma database');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
  {

    "name": "java",
    "price": "20000",
    "instructor": "harry"
  },
  {
    "name": "python",
    "price": "18000",
    "instructor": "john"
  },
  {
    "name": "javascript",
    "price": "22000",
    "instructor": "alex"
  },
  {
    "name": "react",
    "price": "25000",
    "instructor": "david"
  },
  {
    "name": "node.js",
    "price": "23000",
    "instructor": "michael"
  },
  {
    "name": "html and css",
    "price": "12000",
    "instructor": "robert"
  },
  {
    "name": "mongodb",
    "price": "15000",
    "instructor": "william"
  },
  {
    "name": "data structures",
    "price": "28000",
    "instructor": "james"
  },
  {
    "name": "c++",
    "price": "19000",
    "instructor": "daniel"
  },
  {
    "name": "web development",
    "price": "30000",
    "instructor": "thomas"
  }
]);



// Print a message to the output window.
console.log(`Done Inserting data`);
