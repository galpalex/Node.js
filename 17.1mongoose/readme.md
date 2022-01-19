Backend: MongoDB
Node JS – Product model
The following exercise contains the following subjects:
 mongoose
Instructions
Let’s create a mongoose product modelwith validation for
an e-commerce site.
The product should have the following:
 name, a string, which is required and should be
unique.
 category, a string, which is required.
 isActive, a boolean.
 details, which is an embedded object that includes:
• a description, a string, which is required and has to
be at least 10 letters in length.
• Price, a number, which is required and has to be a
positive value,
• discount, a number, which is not required but the
default is 0 if not inputted.
• array of images which must include at least two
images
• a phone number which is required and has to be a
valid Israeli phone number.
• DateAdded, which by default gives the current date
Add at least 3 products to your database.
Feel free to add more validation or keys to your model
