Build the Docker Image:
- docker build -t image_name.
Builds the Docker image for the Node.js/Express application.


Create a Docker Network:
- docker network create network_name
Creates a network for communication between containers (in our case backend and MongoDB).


Run the Backend Container:
- docker run -d -p 3000:3000 --name backend --network network_name image_name
Starts the Node.js/Express backend container and exposes port 3000.

Run MongoDB Container:
- docker run -d -v volume_database:/data/db --name mongo --network network_name -p 27017:27017 mongo
Runs a MongoDB container, persists data with a named volume, and exposes port 27017.
