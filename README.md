##Blogging Platform API

#Description
This Blogging Platform API allows users to manage blog posts, comments, and user profiles in a simple yet effective manner. Built with Node.js and Express, this API uses MongoDB as a database to store data related to posts, comments, and user accounts. It supports full CRUD operations on all entities, making it a versatile backend for blogging or similar applications.

#Features
User Management: Create, retrieve, update, and delete user profiles.
Post Management: Publish, read, update, and delete blog posts.
Comment Management: Add, view, update, and remove comments on blog posts.
Installation
To run this project, you will need Node.js and MongoDB installed on your machine.

#Clone the repository:

Copy code
git clone <repository-url>
cd <repository-directory>
Install dependencies:

Copy code
npm install
Set up environment variables:

Create a .env file in the project root.
Add the following line:
plaintext
Copy code
MONGODB_URI=<your-mongodb-connection-string>
Start the server:

#Copy code
#npm start
API Endpoints

##Users
GET /users - Retrieve all users.
POST /users - Create a new user.
GET /users/:id - Retrieve a user by ID.
PUT /users/:id - Update a user by ID.
DELETE /users/:id - Delete a user by ID.

##Posts
GET /posts - Retrieve all posts.
POST /posts - Create a new post.
GET /posts/:id - Retrieve a post by ID.
PUT /posts/:id - Update a post by ID.
DELETE /posts/:id - Delete a post by ID.

##Comments
GET /comments - Retrieve all comments.
POST /comments - Create a new comment.
GET /comments/:id - Retrieve a comment by ID.
PUT /comments/:id - Update a comment by ID.
