#/bin/bash

git add -A
git commit -m "rebuilding site $(date)"
git push origin HEAD:main
