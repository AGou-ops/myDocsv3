#/bin/sh
git pull && git add -A
git commit -m "rebuilding site $(date)"
git push 