# Use an existing docker image as a base

FROM node:alpine

WORKDIR /usr/app

COPY ./package.json .
# Dowload and install a dependency
# only install npm when package.josn file has changed
RUN npm install

COPY . .
# Tell the image what to do when it starts as a container
 
CMD ["npm", "start"]