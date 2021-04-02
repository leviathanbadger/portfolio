# portfolio - brandonslade.me

This repo contains all of the code that is used to power my personal portfolio site, brandonslade.me.

## frontend

Frontend application, written in Angular. Hosted statically in an AWS S3 bucket, then distributed via CloudFront.

Note about proxies: most of the assets required are stored directly on the S3 bucket, rather than in this repo.
I am a firm believer that binary files should _not_ be placed in repositories, _if at all possible_.
Because of that, the /api and /assets folders are proxied for local development to the production site: https://brandonslade.me.

## api

API server in the form of a single containerized lambda function; used with a proxy endpoint in an AWS API Gateway.
Hosted on the /api path in the same CloudFront distribution as the frontend.

The data for the API server (for hosting project details, for example) is hosted in AWS DynamoDB tables.

## project-exporter

A utility project used to load a DynamoDB table intended to contain project details with the initial projects.
Eventually the frontend will support users/authentication, and the API will handle create/edit operations
directly. For now this is how projects are added to the table.
