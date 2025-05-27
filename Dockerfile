FROM node:18

# Set working directory
WORKDIR /opt/app

# Copy package files first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Build admin panel
RUN npm run build

# Expose the port
EXPOSE 1338

# Start Strapi
CMD ["npm", "start"]
