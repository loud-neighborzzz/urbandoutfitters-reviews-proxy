
FROM node

WORKDIR /app

COPY . /app

RUN npm install 

EXPOSE 3200

CMD [ "npm", "start" ]