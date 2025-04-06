FROM node:20-alpine

WORKDIR /app

COPY ./package* ./package*

RUN npm install

COPY . .

ENV DATABASE_URL = postgresql://postgres:password@localhost:5432/postgres

RUN npx prisma migrate dev
RUN npx prisma generate

RUN npm run build

CMD ["npm", "start"]