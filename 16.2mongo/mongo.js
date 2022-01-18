var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("blog");
  var myobj = {
    name: "John Peterson",
    email: "john@gmail.com",
    posts: ["ObjectID('61e6c9be63c3001b1b1fe85d')"],
  };
  dbo.collection("users").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
});

///// Database output
// Users:
// {
//   "_id": {
//     "$oid": "61e6cbe405a433d1ed8368dc"
//   },
//   "name": "Joe Karlsson",
//   "email": "user@gmail.com",
//   "posts": [
//     "ObjectID('61e6c7f03a09377642c6410c')"
//   ]
// }

// {
//   "_id": {
//     "$oid": "61e6cc2b218abba46bebdba4"
//   },
//   "name": "John Peterson",
//   "email": "john@gmail.com",
//   "posts": [
//     "ObjectID('61e6c9be63c3001b1b1fe85d')"
//   ]
// }

// Posts with comments embeded:

// {
//   "_id": {
//     "$oid": "61e6c7f03a09377642c6410c"
//   },
//   "title": "An awesome blog",
//   "url": "http://awesomeblog.com",
//   "text": "This is an awesome blog we have just started",
//   "comments": [
//     {
//       "name": "Peter Critic",
//       "created_on": "10-01-2022",
//       "content": "Awesome blog post"
//     },
//     {
//       "name": "John Page",
//       "created_on": "10-01-2020",
//       "content": "Not so awesome blog"
//     }
//   ]
// }

// {
//   "_id": {
//     "$oid": "61e6c9be63c3001b1b1fe85d"
//   },
//   "title": "Best practices to get fit",
//   "url": "http://getfit.com",
//   "text": "Get fit",
//   "comments": [
//     {
//       "name": "Alex Wuk",
//       "created_on": "10-10-2021",
//       "content": "Awesome blog post"
//     }
//   ]
// }
