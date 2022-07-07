#!/bin/bash

DOC_SEARCH_CONFIG_FILE=./docSearchConfig.json
docker run -it --env-file=.env -e "CONFIG=$(cat "${DOC_SEARCH_CONFIG_FILE}" | jq -r tostring)" algolia/docsearch-scraper