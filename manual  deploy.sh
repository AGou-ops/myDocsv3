#/bin/bash

ls docs/.vitepress/dist

if [ $? -eq 0 ]
then
    rm -rf docs/.vitepress/dist
fi

yarn build

cd docs/.vitepress/dist

git init && git remote add origin git@github.com:AGou-ops/myDocsv3.git

git add -A

git commit -m "rebuilding site $(date)"

git push -f origin HEAD:gh-pages
