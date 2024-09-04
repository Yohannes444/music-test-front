FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

RUN npm run build

RUN npm install --force -g serve

EXPOSE 3000

CMD ["npm", "run ", "dev"]
