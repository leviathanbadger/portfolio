#!/bin/bash

set -e

ENV=${NODE_ENV:-development}
if [[ $ENV == "development" ]]; then
    webpack --config ./config/webpack/development.js --colors --progress --display-error-details --display-cached
elif [[ $ENV == "production" ]]; then
    webpack --config ./config/webpack/production.js --colors --progress --display-error-details --display-cached
else
    echo Unknown environment
    exit 1
fi

exit 0
