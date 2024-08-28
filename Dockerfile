# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application files to the container
COPY . .

# Build the React app
RUN npm run build

# Serve the React app using a lightweight web server
RUN npm install --force -g serve

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the application
CMD ["npm", "run ", "dev"]
