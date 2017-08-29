FROM node:7

# Create app directory
RUN mkdir -p /var/www/project
WORKDIR /var/www/project

# Bundle app source and install dependencies
COPY . /var/www/project
RUN npm install --production

EXPOSE 3000
CMD [ "node", "." ]
