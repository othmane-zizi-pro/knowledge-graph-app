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

# Set environment variable for the port
ENV PORT 8080

# Expose port 8080 (the port Cloud Run expects)
EXPOSE 8080

# Start the application, ensure it listens on port 8080
CMD ["npm", "run", "start", "--", "-p", "8080"]
