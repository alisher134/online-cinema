FROM node

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

COPY .env .env ./

RUN yarn build

EXPOSE 5173

CMD [ "yarn", "dev" ]