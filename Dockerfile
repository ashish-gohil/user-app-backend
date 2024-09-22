FROM node:18-alpine

WORKDIR /user-app-backend

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "./dist/index.js"]