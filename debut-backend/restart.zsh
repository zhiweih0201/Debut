#!/usr/bin/env zsh

kill %1
jobs

node wsserver.js &
npm start
