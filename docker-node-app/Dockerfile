# Use an existing docker image as a base
# Specify a base image
FROM node:14-alpine

# create a dir in the container and COPY command will copy all files inside this directory
WORKDIR /usr/app/docker-node-app

# install some dependencies
COPY ./package.json ./
# if package.json changes run this command
RUN npm install
COPY ./ ./


# Tell the image what to do when it starts as a container
#default commands
CMD ["npm", "start"]