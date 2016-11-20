## Sample ReactJs appllication to explore [imgur](http://imgur.com/) galleries

#### Overview

This is a simple show case application built with react to browser galleries and albums via [imgur-api](http://api.imgur.com/)

##### Functional overview

* users can browser galleries
* filter gallery result using (showViral, section, winodw, sort) criterias.
* one user click on the gallery thumbnail he will see all the album images under selected gallery.
* user can preview each image to view full size of the image.

#### Pre-requisits

* node version >= v4.4.5
* npm version >= 3.10.8


#### Instructions to run built in express server

* run the script file install.sh first ```$> ./install.sh```
* after finishing the process run ```$> ./start.sh```


#### Instcutions to run on docker

* make sure you have configure the docker environment  ```$> docker-machine env default(machine-name)```

* run the script file provided ```$> ./run_docker_image.sh```
  * this will create the docker image and start the node express server on port 3000

#### Tech stack

* ReactJs
* AltJs
* Alt-Container
* Twitter Bootstrap
* React-router
* webpack
* ES6


