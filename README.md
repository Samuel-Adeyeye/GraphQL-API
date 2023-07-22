## GraphQL CRUD API using Apollo Server and MongoDB Atlas

This project is a GraphQL CRUD API developed using Apollo Server and MongoDB Atlas. It allows you to create, edit, and delete recipes, making it a great stack for projects that need to scale and have sustainable and easy-to-work-with codebases. If you're looking to enhance your backend programming skills, this project serves as an excellent introduction to GraphQL and Apollo Server.

### Getting Started

These instructions will help you set up the project and get it running on your local machine for development and testing purposes. 

### Prerequisites

Make sure you have the following installed on your system:

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- npm (Node Package Manager): [https://www.npmjs.com/](https://www.npmjs.com/)
- MongoDB Atlas account: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Samuel-Adeyeye/GraphQL-API.git
cd GraphQL-API
```

2. Install the dependencies:
```bash
yarn add
```

### Configuration

Before running the project, you need to configure the MongoDB connection. Follow these steps:

1. Create a **.env** file in the root of the project.
2. Add your MongoDB Atlas connection string to the **.env** file:

```bash
MONGODB_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING
```

Replace **YOUR_MONGODB_ATLAS_CONNECTION_STRING** with your actual MongoDB Atlas connection string.

### Usage

To start the Apollo Server and run the API, use the following command:
```bash
yarn start
```
The server will start, and you should see a message like: "Server running at http://localhost:5000/".

### API Reference

The API follows GraphQL conventions. Below are the available queries and mutations:

- `query { recipes }`: Get all recipes.
- `query { recipe(id: "RECIPE_ID") }`: Get a specific recipe by ID.
- `mutation { createRecipe(input: { name: "Recipe name", description: "Recipe Description" }) }`: Create a new recipe.
- `mutation { updateRecipe(id: "RECIPE_ID", input: { name: "New Recipe name", description: "New Recipe Description" }) }`: Update an existing recipe.
- `mutation { deleteRecipe(id: "RECIPE_ID") }`: Delete a recipe by ID.
