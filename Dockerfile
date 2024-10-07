# Use the official Node.js 16 image.
FROM node:16

# Set the working directory.
WORKDIR /app

# Copy package.json and package-lock.json to the working directory.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code to the working directory.
COPY . ./

# Ensure the 'prisma' directory and 'schema.prisma' file are copied
COPY prisma ./prisma

# Generate Prisma Client
RUN npx prisma generate --schema=./prisma/schema.prisma

# Expose port (if needed, change to your app's port)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
