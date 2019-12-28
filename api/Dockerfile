FROM node:13.5.0-alpine

# make files available inside the container
RUN mkdir -p /tratschtante-api
WORKDIR /tratschtante-api
COPY ./src
COPY package.json

# install dependencies
RUN yarn

EXPOSE 5000

# You can change this
CMD [ "yarn", "start" ]
