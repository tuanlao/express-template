FROM node:12
USER node
RUN mkdir /home/node/express-template
COPY . /home/node/express-template/
WORKDIR /home/node/express-template
RUN npm install --no-audit --only=production
EXPOSE 3030
ENV NODE_ENV=production
ENV NODE_OPTIONS="--abort-on-uncaught-exception --max-http-header-size=32768 --max-old-space-size=1024 --no-warnings"
ENV UV_THREADPOOL_SIZE=16
CMD ["npx", "forever", "-f", "--minUptime=5000", "--spinSleepTime=5000", "--killSignal=SIGINT", "lib"]
