FROM node:14.15.5
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

EXPOSE 4200

CMD ["npm", "start"]

# docker build -t angular-client:dev .
# docker run -d --name angular-client -p 4200:4200 angular-client:dev
# docker stop angular-client