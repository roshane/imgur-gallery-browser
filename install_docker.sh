#!/bin/bash

docker build -t roshane/imgur_sample .
docker run -p 3000:3000 roshane/imgur_sample
echo "application started on [http://docker-machine-ip:3000"]
