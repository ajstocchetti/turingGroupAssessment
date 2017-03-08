# Turing Group Code Assessment

## Installing

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
Open a terminal in the base directory of the app and type
```bash
    node start
```
By default, the app will run on port 3000. You can modify this by setting the environment variable `PORT` or by adding `PORT` to the `.env` file.

To access the app, point your browser to [http://localhost:3000](http://localhost:3000). If you modified the port when starting the app, you will need to use that port number.
