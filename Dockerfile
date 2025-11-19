FROM node:lts-alpine AS builder

WORKDIR /app

ARG VITE_GOOGLE_VERIFICATION_ID

ENV VITE_GOOGLE_VERIFICATION_ID=${VITE_GOOGLE_VERIFICATION_ID}

COPY package.json ./

RUN npm install

COPY . ./

RUN npm run build

FROM nginx:1.24.0-alpine

EXPOSE 3000/tcp

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html