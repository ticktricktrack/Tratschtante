FROM node:13.5.0-alpine

# make files available inside the container
RUN mkdir -p /tratschtante-client
WORKDIR /tratschtante-client
COPY ./src
COPY package.json

# install dependecies
RUN yarn

EXPOSE 5001

# You can change this
CMD [ "yarn", "start" ]
