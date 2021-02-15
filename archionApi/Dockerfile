#FROM node:15.8.0-alpine3.12 as build-step
FROM node:15.8.0 as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

#FROM node:15.8.0-alpine3.12
FROM node:15.8.0
RUN mkdir -p /app 
RUN mkdir -p /node_modules
COPY --from=build-step /app/build /app
COPY --from=build-step /app/node_modules /node_modules
WORKDIR /app

EXPOSE 3000

CMD [ "node", "app.js" ]


# docker build -t express-server:dev .
# docker run -d --name express-server -p 3000:3000  express-server:dev
# docker stop express-server