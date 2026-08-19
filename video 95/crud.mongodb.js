use("CrudDb")

db.createCollection("courses")

db.courses.insertOne({
    name: "Anurag kumar singh free courses",
    price: 500,
    assignments: 12,
    projects: 21,
})

db.courses.insertMany([
  {
    "name": "Anurag Kumar Singh Free Courses",
    "price": 500,
    "assignments": 12,
    "projects": 21
  },
  {
    "name": "Java Programming Mastery",
    "price": 1200,
    "assignments": 18,
    "projects": 8
  },
  {
    "name": "Python for Beginners",
    "price": 800,
    "assignments": 15,
    "projects": 10
  },
  {
    "name": "Web Development Bootcamp",
    "price": 1500,
    "assignments": 25,
    "projects": 12
  },
  {
    "name": "JavaScript Complete Course",
    "price": 1000,
    "assignments": 20,
    "projects": 9
  },
  {
    "name": "React JS Development",
    "price": 1800,
    "assignments": 22,
    "projects": 15
  },
  {
    "name": "HTML and CSS Basics",
    "price": 400,
    "assignments": 10,
    "projects": 6
  },
  {
    "name": "Node JS Backend Development",
    "price": 1600,
    "assignments": 19,
    "projects": 11
  },
  {
    "name": "MongoDB Database Course",
    "price": 900,
    "assignments": 14,
    "projects": 7
  },
  {
    "name": "Full Stack Development",
    "price": 2500,
    "assignments": 30,
    "projects": 18
  }
])

// view all documents
db.courses.find().pretty()

// view only documents where price = 500
// let a = db.courses.find({ price: 500 }).toArray()
// console.log(a)

let b = db.courses.findOne({price : 500})
console.log(b)

// Update //
db.courses.updateOne({price : 500}, {$set:{price : 200 }})

db.courses.updateMany({price : 800 }, {$set:{price : 200 }})

// Delete//

db.courses.deleteOne({price : 200})

db.courses.deleteMany({price : 200})