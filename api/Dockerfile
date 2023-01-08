

FROM amazon/aws-lambda-nodejs:16 as final
COPY . .
RUN npm i
RUN npm run build -- --declaration false
RUN rm -rf node_modules && \
    npm i --only=production && \
    rm -rf src tsconfig.json
CMD [ "dist/index.lambdaHandler" ]
