FROM node:18-alpine as base

FROM base as with_all_deps
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build
RUN yarn cache clean --all

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 app
RUN adduser --system --uid 1001 app
USER app

COPY --chown=app:app --from=with_all_deps /app ./

EXPOSE 5000
ENV PORT 5000

CMD ["yarn", "start"]