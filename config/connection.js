// // Require Mongoose
// var mongoose = require("mongoose");

// // Database configuration with Mongoose
// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://localhost/nyt-react",
//     {
//       useMongoClient: true
//     }
//   );
// var db = mongoose.connection;

// // Show any mongoose errors
// db.on("error", function(error) {
//     console.log("Mongoose Error: ", error);
// });

// // Once open log a successful connection
// db.once("open", function() {
//     console.log("Mongoose connection successful");
// });

// // Export the database
// module.exports = db;