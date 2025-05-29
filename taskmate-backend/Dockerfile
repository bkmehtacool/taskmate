FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Run build to create /app/dist folder
RUN npm run build

EXPOSE 4000

CMD ["node", "dist/index.js"]
