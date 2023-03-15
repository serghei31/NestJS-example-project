FROM node:18.15.0-alpine3.17

RUN addgroup app && adduser -S -G app app
RUN mkdir /app && chown app:app /app
USER app

WORKDIR /app
COPY --chown=app:app package*.json ./
RUN npm install --silent
COPY --chown=app:app . . 

EXPOSE 3000 

CMD ["npm", "run", "start:dev"]