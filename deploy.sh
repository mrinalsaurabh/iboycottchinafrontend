#! /bin/bash
git pull origin master
npm install
rm -rf build
npm run build
rm -rf /var/www/build
cp -r build /var/www/
