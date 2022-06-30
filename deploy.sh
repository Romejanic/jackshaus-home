#!/bin/bash
echo "Deploying React build"

WEB_ROOT=~/web_root
FILES=$(cd ./build && find . -type f)

echo "Cleaning old build files..."
for f in $FILES
do
    (cd $WEB_ROOT && rm -rf $f)
done

echo "  done"
echo "Copying new build files..."

cp -r build/* $WEB_ROOT/
echo " done"