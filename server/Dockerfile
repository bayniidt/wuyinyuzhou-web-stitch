ARG NODE_VERSION=24.14.1-slim

FROM node:${NODE_VERSION} AS dependencies
WORKDIR /app

# better-sqlite3 requires native build tools during dependency install.
RUN sed -i 's/deb.debian.org/mirrors.tencentyun.com/g' /etc/apt/sources.list.d/debian.sources
RUN apt-get update && apt-get install -y --no-install-recommends python3 make g++ \
  && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
  npm ci --omit=dev --no-audit --no-fund

FROM node:${NODE_VERSION} AS runner
WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV PORT=3001

RUN mkdir -p public/uploads data uploads

EXPOSE 3001
CMD ["node", "index.js"]
