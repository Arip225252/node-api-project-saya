# Base image Node.js
FROM node:18-alpine

# Tentukan folder kerja di container
WORKDIR /app

# Copy file dependency
COPY package*.json ./

# Install dependency
RUN npm install --production

# Copy semua source code
COPY . .

# Expose port (harus sama dengan app)
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"]
