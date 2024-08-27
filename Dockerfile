FROM node:18.17.0

ARG NEXT_PUBLIC_API_URL

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

ENV PATH /app/node_modules/.bin:$PATH 
COPY package*.json ./ 
RUN npm install -g npm@10.4.0
RUN npm install

COPY . . 
RUN npm run build
# RUN serve -s dist -l 8809 
CMD  npm run start

EXPOSE 24000


