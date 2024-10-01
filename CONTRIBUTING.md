# Contributing to Fresh Baked Cafe (FBC)

Thank you for your interest in contributing to the **FBC** project! This document will guide you through the installation process and how to set up the project locally, including how to run a MongoDB instance using Docker.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) (v14.x or higher)
- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/)
- [npm](https://www.npmjs.com/get-npm) (included with Node.js)

## Installation

### Step 1: Fork the Repository

1. Navigate to the [FBC repository](https://github.com/shubey1007/FBC) on GitHub.

2. Click the "Fork" button at the top right to create a copy of this repository under your GitHub account.

### Step 2: Clone Your Fork

1. Open a terminal and clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/your-username/FBC.git
   ```

2. Navigate into the project directory:

   ```bash
   cd FBC
   ```

### Step 3: Install Backend Dependencies

1. Install the necessary Node.js dependencies for the backend:
   ```bash
   npm install
   ```

### Step 4: Setup MongoDB with Docker

This project uses Docker to run MongoDB locally. A `docker-compose.yml` file is provided in the root of the project to simplify setup.

1. Start the MongoDB service using Docker Compose:

   ```bash
   docker-compose up -d
   ```

2. This command will:
   - Start a MongoDB container.
   - Expose MongoDB on port `27017`.
   - Start Mongo Express, a web-based MongoDB admin interface, accessible at `http://localhost:8081`.

3. Verify MongoDB is running by visiting `http://localhost:8081`.

### Step 5: Connect the Backend to MongoDB
The backend is already configured to connect to the MongoDB instance running in Docker. Ensure that the MongoDB URI is correctly set in the backend configuration file.

- Default MongoDB URI: `mongodb://admin:password@localhost:27017/?authSource=admin`. If you're using environment variables, create a `.env` file in the root of the project and add:

    ```bash
    MONGO_URI=mongodb://admin:password@localhost:27017/?authSource=admin
    ```
### Step 6: Run the Backend Application

1. Start the backend server:

    ```bash
    npm start
    ```
2. The backend should now be running, and you should see logs confirming the connection to MongoDB.



## Contributing Guidelines

We welcome contributions to this project. Follow these steps to contribute:

1. Fork the repository and create a branch for your feature or bugfix.
2. Ensure your code adheres to the project's coding standards.
3. Commit your changes with meaningful commit messages.
4. Push your branch to GitHub and create a pull request.
5. Provide a clear description of the changes in your pull request.

## Helpful Git Commands
```bash
# Clone your fork
git clone https://github.com/your-username/FBC.git

# Create a new branch for your work
git checkout -b feature/my-new-feature

# Add and commit your changes
git add .
git commit -m "Add a meaningful commit message"

# Push to your fork
git push origin feature/my-new-feature
```

## Hacktoberfest 2024 Participation
We are participating in Hacktoberfest 2024! If you'd like to contribute, make sure to add the appropriate labels to your pull requests.

### Important Labels:

- `hacktoberfest`
- `good-first-issue`
- `help-wanted`
- `hacktoberfest-accepted`

### Hacktoberfest Contribution Steps:

- Fork the repository and clone it locally.
- Follow the installation steps above to set up the project.
- Look for issues labeled `good-first-issue` or `help-wanted`.
- Once you have implemented your solution, open a pull request and request a review.
- Be sure to label your pull request with `hacktoberfest-accepted`.


# Happy coding! Thank you for contributing to Fresh Baked Cafe (FBC)!

