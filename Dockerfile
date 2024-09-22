FROM node:18-alpine

WORKDIR /user-app-backend

COPY package*.json .

RUN npm install

RUN npm install -g typescript

COPY . .

RUN tsc -b

EXPOSE 3000

CMD ["node", "dist/index.js"]