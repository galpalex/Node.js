// [
//   ({
//     _id: ObjectId("61e551958bef5ff9005d77ab"),
//     name: "kfc",
//     address: {
//       city: "Tel Aviv",
//       street: "Herzl",
//       coordinates: [-77.444, 50.432],
//     },
//     type: "American",
//     kosher: false,
//     reviews: [{ date: "1-1-22", score: 3 }],
//   },
//   {
//     _id: ObjectId("61e552818bef5ff9005d77ac"),
//     name: "Chuchi",
//     address: {
//       city: "Herzelia",
//       street: "Ben Gurion",
//       coordinates: [-74.554, 50.452],
//     },
//     type: "Asian",
//     kosher: false,
//     reviews: [{ date: "1-1-21", score: 4 }],
//   },
//   {
//     _id: ObjectId("61e553478bef5ff9005d77ad"),
//     name: "Mia",
//     address: {
//       city: "Nesziona",
//       street: "Sireni",
//       coordinates: [-71.444, 42.432],
//     },
//     type: "Mexican",
//     kosher: false,
//     reviews: [{ date: "10-1-22", score: 5 }],
//   },
//   {
//     _id: ObjectId("61e555a28bef5ff9005d77ae"),
//     name: "Temple",
//     address: {
//       city: "Ramat Gan",
//       street: "Ehad",
//       coordinates: [-71.144, 22.432],
//     },
//     type: "Italian",
//     kosher: true,
//     reviews: [{ date: "5-1-22", score: 4 }],
//   },
//   {
//     _id: ObjectId("61e556208bef5ff9005d77af"),
//     name: "Matuka",
//     address: {
//       city: "Rishon-lezion",
//       street: "Hagana",
//       coordinates: [-71.144, 22.432],
//     },
//     type: "Italian",
//     kosher: true,
//     reviews: [{ date: "5-1-12", score: 2 }],
//   })
// ];

// 1.1 db.restaurants.find()
// 1.2 db.restaurants.find( { "type": "Italian" } )
// 1.3 db.restaurants.find( { "kosher": true } )
// 1.4 db.restaurants.find( { "address.city": "Ramat Gan" } )
// 1.5 db.restaurants.find( { "address.street": "Hagana" } )
// 1.6 db.restaurants.find( { "address.coordinates":[-71.144, 22.432] } )
// 1.7 db.restaurants.find().sort({"name":1})
// 1.8 db.restaurants.find().sort({"address.city":1})
// 1.9 db.restaurants.updateOne({name:"Matuka"},{$set:{name:"Matok"}})
// 1.10 db.restaurants.updateOne({name:"Matok"},{$push: { reviews: {date: "5-1-13", score: 3} }} )
// 1.11 db.restaurants.updateMany({ },{$set: {kosher: true}})
// 1.12 db.restaurants.deleteOne({name:"Matok"})
// 1.13 db.restaurant.deleteMany({ })
// 2.1 db.restaurants.find().forEach(function(names) {print("name: " + names.name);})
// 2.2 db.restaurants.find().forEach(function(cities) {print("city: " + cities.address.city);})
// 2.3 db.restaurants.find().forEach(function(coordinate) {print("coordinate: " + coordinate.address.coordinates);})
// 3.1 db.restaurants.find({name: {$regex: /^k/i } })
// 3.2 db.restaurants.count()
// 3.3 db.restaurants.find({reviews : { $elemMatch:{"date":{$gte : "5-1-12"}}}})
// 4.1 db.restaurants.aggregate([{ $unwind: "$reviews" }, { $group: { _id: "$name", Average: { $avg: "$reviews.score"}}}])
// 4.2 db.restaurants.aggregate([{ $unwind: "$reviews" },{ $match: { name: "Matuka" } }, { $group: { _id: "$name", Average: { $avg: "$reviews.score"}}}])
