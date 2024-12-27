FROM node:16-alpine
WORKDIR /app

COPY ./project-code  /app

RUN npm install
CMD [ "npm", "start"]

EXPOSE 3000 
#same port inside app.js
