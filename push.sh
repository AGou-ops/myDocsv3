#/bin/bash

git add -A
git commit -m "rebuilding site $(date)"
git push -f origin HEAD:main
