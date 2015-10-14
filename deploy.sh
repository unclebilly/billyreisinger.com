#!/usr/bin/env bash
# usage: 
# $0 username host port
username=$1
host=$2
port=$3

usage() {
  echo "Usage: $0 username host port"
}
if [ -z "$1" -o -z "$2" -o -z "$3" ]; then 
  usage
  exit 1
fi

bundle exec jekyll build && \
rsync -avz --delete --exclude='music' -e "ssh -p ${port}" _site/ ${username}@${host}:~/public_html/