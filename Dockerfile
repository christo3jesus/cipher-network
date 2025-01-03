# Base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 8545

# Command to start the server
CMD ["npm", "start"]
