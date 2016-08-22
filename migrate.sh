#!/bin/bash
echo "Start"

path=/usr/local/tomcat/apache-tomcat-7.0.65/webapps
rm $path/dist -rf

npm run local

cp ./dist $path/ -rf

echo "Done"
