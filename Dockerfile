# Use an official Node runtime as a parent image
FROM node:20.8.0-alpine

# Set the working directory in the container
WORKDIR /app/src

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
