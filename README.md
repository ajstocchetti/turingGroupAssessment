# Turing Group Code Assessment

## Installation

### Prerequisites
This repository requires Node.js and MongoDB to be installed

#### Node.js
Node.js is JavaScript runtime environment, and is what runs this app.
The installation package for Node.js can be found [here](https://nodejs.org/en/download/)
Alternatively, Node.js can be installed from the command line on Ubuntu with
```bash
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    sudo apt-get install -y nodejs
```
CLI instructions for other linux distributions can be found [here](https://nodejs.org/en/download/package-manager/)

#### MongoDB
MongoDB is a database that will be persisting weather information for this app.

MongoDB can be installed on Mac from Homebrew:
```bash
    brew update
    brew install mongodb
    mkdir -p /data/db # make data directory
    sudo chown -R `id -un` /data/db # assign correct permissions to data directory
```
Treehouse provides a [good tutorial](http://treehouse.github.io/installation-guides/mac/mongo-mac.html) for downloading and installing MongoDB on OSX

Mongo provides for installing MongoDB [on linux here](https://docs.mongodb.com/v3.0/administration/install-on-linux/) and [on Windows here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

Once MongoDB is installed, start the mongo server by running
```bash
    mongod
```

### Installing the app
To install the weather app, open a terminal in the base directory of the app and enter the following commands
```bash
    npm install
    npm run build
```

### Preparing the environment
This app uses dotenv to load environment variables. To set it up, create a `.env` file similar to the `example.env` file provided. This file contains your weather underground key to access the weather underground API. Alternatively, you can pass in the weather underground key as the environment variable `WUND_API_KEY` when starting the app

## Running the app
Make sure that MongoDB is running. If it is not, start the mongo server by running
```bash
    mongod
```
Open a terminal in the base directory of the app and type
```bash
    node start
```
By default, the app will run on port 3000. You can modify this by setting the environment variable `PORT` or by adding `PORT` to the `.env` file.

To access the app, point your browser to [http://localhost:3000](http://localhost:3000). If you modified the port when starting the app, you will need to use that port number.

## Thoughts
This app uses a React/Express/Mongo stack. I always try to use the right tool for the job, while keeping apps as light as possible. In this app, I am frustrated with how bloated things got. In the end I had 56 mb worth of node modules for a 1.7 mb app. It's not a bad thing, but it's not a good thing either.
* React: React was definitely overkill. If this app was only ever going to display 3 days of weather, something lighter (like jQuery or Angular) would have worked. But I like React, so I went with it. The down side is that it required pulling in webpack and babel, and my use of React ended up adding 7 node modules to the package.
* Express: I'm happy with Express, it works great for both large and small servers.
* Mongo: As far as databases go, MongoDB works well because of its support for unstructured data. Trying to force the Weather Underground response into a SQL table would have been a huge pain. In an early iteration, I was using in-memory storage, but I figured persisting to the disk was something that was important. The in-memory storage can found [here](https://github.com/ajstocchetti/turingGroupAssessment/blob/37ca7240da5f26223de61ad56512403209afe745/db.js)
