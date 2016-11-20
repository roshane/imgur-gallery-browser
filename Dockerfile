FROM node

MAINTAINER roshane_perera

RUN mkdir -p /var/www 

COPY . /var/www

WORKDIR /var/www 

RUN npm install

COPY vendor/bootstrap.css node_modules/bootstrap/dist/css/bootstrap.css

EXPOSE 3000 

ENTRYPOINT ["npm","start","-s"]
