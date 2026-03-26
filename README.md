📚 API CRUD - Express + MongoDB
A complete API for managing Books and Authors, built with Node.js, Express, and MongoDB following the MVC (Model-View-Controller) pattern.

🚀 Technologies Used
Node.js
Express
MongoDB + Mongoose

dotenv (environment variables)

📁 Project Structure
text
src/
├── config/
│   └── dbConnect.js       # MongoDB connection
├── controllers/
│   ├── livroController.js  # Books logic
│   └── autorController.js  # Authors logic
├── models/
│   ├── Livro.js            # Book schema
│   └── Autor.js            # Author schema
├── routes/
│   ├── livroRoutes.js      # Books routes
│   └── autorRoutes.js      # Authors routes
└── app.js                  # Express configuration
server.js                   # Server initialization
.env                        # Environment variables
🧩 Features
📖 Books
Method	Endpoint	Description
GET	/livros	List all books
GET	/livros/editora?editora={name}	Search books by publisher
GET	/livros/:id	Get book by ID
POST	/livros	Create a new book
PUT	/livros/:id	Update an existing book
DELETE	/livros/:id	Delete a book
✍️ Authors
Method	Endpoint	Description
GET	/autor	List all authors
GET	/autor/:id	Get author by ID
POST	/autor	Create a new author
PUT	/autor/:id	Update an author
DELETE	/autor/:id	Delete an author
🛠️ How to Run the Project
Prerequisites
Node.js installed

MongoDB running (local or Atlas)

Steps
Clone the repository:

bash
git clone https://github.com/paranhosgabriel/Creating-API-Using-Express-and-MongoDB.git
cd Creating-API-Using-Express-and-MongoDB
Install dependencies:

bash
npm install
Configure environment variables:

Create a .env file in the root directory

Add your MongoDB connection string:

env
DB_CONNECTION_STRING=mongodb+srv://your_user:your_password@cluster.mongodb.net/{databaseName}?appName=Cluster
Start the server:

bash
npm run dev
Access the API at your  http://localhost:3000

📬 API Documentation
Complete documentation with request and response examples is available on Postman:

👉 Postman Collection - Creating an API with Express and MongoDB:
https://egfgab.postman.co/documentation/16385041-cd538895-d456-4dcc-9374-5cf600d7b8e0/publish?workspaceId=e6e08f2c-be13-4fb9-b8fb-a6decd8bd558&authFlowId=16db21bd-8c3a-427f-8822-2becd317716a

📦 Request Examples
Create an Author
json
POST /autor
{
    "name": "Machado de Assis",
    "nationality": "Brazilian"
}
Create a Book with Author Reference
json
POST /livros
{
    "title": "Memórias Póstumas de Brás Cubas",
    "publisher": "Classics",
    "price": 29.90,
    "pages": 200,
    "author": "AUTHOR_ID_HERE"
}
Search Books by Publisher
text
GET /livros/editora?editora=Classics


📫 Contact
Gabriel De Lima Paranhos – gabriellima.paranhos@gmail.com

Project Link: https://github.com/your-username/your-repo

