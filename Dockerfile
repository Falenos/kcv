FROM node:12

COPY . .

EXPOSE 80

CMD npm run app
