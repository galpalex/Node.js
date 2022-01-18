//1. we need 3 collections for blog posts: Users, Posts, Comments.
//I could use reference data in this structure:Users, Posts, Comments.
//The advantage of reference is a faster access when accessing comments is independent, and not via post.

////////////////////////////////////////
//Second option is using embeded data. Comments will be embeded in Posts collection and Users collection will be a separate collection.
//Tha advantage of second option is easier access when accessing comments is always via their post
//
// Users:
// {
//   _id: "ObjectId('AAA')",
//   name: "Joe Karlsson",
//   email: "user@gmail.com",
//   posts: ["ObjectID('AAAA')", "ObjectID('BBBB')", "ObjectID('CCCC')"]
// }
// Posts with comments embeded:
// {
//   _id: "ObjectId('AAA')",
//   title: "An awesome blog",
//   url: "http://awesomeblog.com",
//   text: "This is an awesome blog we have just started",
//   comments: [{
//     name: "Peter Critic",
//     created_on: ISODate("2014-01-01T10:01:22Z"),
//     content: "Awesome blog post"
//   }, {
//     name: "John Page",
//     created_on: ISODate("2014-01-01T11:01:22Z"),
//     content: "Not so awesome blog"
//   }]
// }
//
//
//
//
//
//
//
//
//
