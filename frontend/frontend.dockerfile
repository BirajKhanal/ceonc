FROM node:alpine3.11

# Create an application directory
RUN mkdir -p /app

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package file
COPY frontend/package.json ./

# Install node packages
RUN npm install

# Copy or project directory (locally) in the current directory of our docker image (/app)
COPY frontend/ .

ENV GENERATE_SOURCEMAP=false

# Build the app
RUN npm run build

# Start the app
CMD [ "npm", "start" ]