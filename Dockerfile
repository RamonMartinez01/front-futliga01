FROM node:18-alpine

WORKDIR /app/

COPY --chown=app:app package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "preview"]