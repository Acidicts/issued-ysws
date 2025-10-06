# Use Node.js 18 Alpine as base image for smaller size
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Copy application files
COPY . ./

# Expose port 3000
EXPOSE 3000

# Set environment variable for production
ENV NODE_ENV=production

# Run the application
CMD ["node", "main.js"]
