Build the Docker Image:
Builds the Docker image for the Node.js/Express application.
- docker build -t <image-name> .


Create a Docker Network:
Creates a network for communication between containers (in our case backend and MongoDB).
- docker network create <network_name>


Run the Backend Container:
Starts the Node.js/Express backend container and exposes port 3000.
- docker run -d -p 3000:3000 --name backend --network <network_name> <image-name>


Run MongoDB Container:
Runs a MongoDB container, persists data with a named volume, and exposes port 27017.
- docker run -d -v volume_database:/data/db --name mongo --network <network_name> -p 27017:27017 mongo
