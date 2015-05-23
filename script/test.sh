#!/bin/bash
# use predefined variables to access passed arguments
#echo arguments to the shell

cd ~/garlic/downloads/
echo "Downloading from " $1
url=$1
    echo -n "    "
    wget --progress=dot $url 2>&1 | grep --line-buffered "%" | \
        sed -u -e "s,\.,,g" | awk '{printf("\b\b\b\b%4s", $2)}'
    echo -ne "\b\b\b\b"
    echo " DONE"

