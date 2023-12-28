FROM node:18-slim As development

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

RUN npm run prisma:generate

USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:18-slim As build

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

COPY --chown=node:node --from=development /usr/src/app/node_modules/.prisma ./node_modules/.prisma

USER node

###################
# PRODUCTION
###################

FROM node:18-slim As production

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/.env ./.env

EXPOSE 3000

CMD [ "node", "dist/main.js" ]