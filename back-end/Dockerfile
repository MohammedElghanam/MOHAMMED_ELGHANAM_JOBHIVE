FROM node:18-alpine

WORKDIR /backend-jobhive

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]