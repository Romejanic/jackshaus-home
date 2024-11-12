#!/bin/bash
echo "Deploying Astro build"

WEB_ROOT=~/www
FILES=$(cd ./dist && find . -type f)

echo "Cleaning old build files..."
for f in $FILES
do
    (cd $WEB_ROOT && rm -rf $f)
done

echo "  done"
echo "Copying new build files..."

cp -r dist/* $WEB_ROOT/
echo " done"
