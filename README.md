# Express.js + MongoDB REST API with Docker

This project demonstrates how to build a simple REST API using **Express.js** with a **MongoDB** database. It leverages **TypeScript** for enhanced type safety and **Zod** for request validation. Both the MongoDB database and the Express application are containerized using **Docker**, facilitating smooth communication through Docker networking.

## Features

- **Express.js**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A powerful NoSQL database used to store user data.
- **Mongoose ORM**: Provides an elegant schema-based solution to model your MongoDB data.
- **TypeScript**: Adds type safety to the application, enhancing maintainability and debugging.
- **Zod**: A validation library used to ensure incoming requests contain the correct data.
- **Docker**: Containerizes the Express.js application and MongoDB for an isolated and consistent environment.
- **Docker Networking**: Enables seamless communication between the Express app and MongoDB container through a custom Docker network.

## Prerequisites

- Ensure **Docker** is installed on your machine.

## Setup Instructions

Follow these commands to set up and run the project locally using Docker.

### 1. Build the Docker Image

Build the Docker image for the Node.js/Express application using the following command:

```bash
docker build -t image_name .
```

### 2. Create a Docker Network

Set up a Docker network to allow communication between the containers (e.g., between the Express backend and MongoDB):

```bash
docker network create network_name
```

### 3. Create a Docker Volume

Create a named volume to persist data in the MongoDB container:

```bash
docker volume create volume_database
```

### 4. Run the Backend (Express) Container

Start the Node.js/Express backend container, exposing port `3000` for the API:

```bash
docker run -d -p 3000:3000 --name backend --network network_name image_name
```

### 5. Run the MongoDB Container

Run the MongoDB container, mount the volume for persistent storage, and expose port `27017`:

```bash
docker run -d -v volume_database:/data/db --name mongo --network network_name -p 27017:27017 mongo
```