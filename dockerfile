FROM node

WORKDIR  /devloper/todo

COPY . .

RUN npm ci

EXPOSE 5000

CMD ["npm", "start"]