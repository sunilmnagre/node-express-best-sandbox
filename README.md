# Welcome to <project> API's

Description will come here.....

# Prerequisites :star2:

Things to think before you start installing and running the project
**Node:**

- NodeJS >= 16.x
- NPM >= 8.x - npm is a software Package Manager and Installer

**General:**

- Git

# Getting Started :sunrise_over_mountains:

These instructions will get you a copy of the project up and running on your local machine for development.
Here, we will learn how to set up this project for the Node.js

## Setup

_Clone or download this repo_

    $ git clone <path>

_Navigate to the downloaded folder_

    $ cd <path>

_Change to specific Git branch (optional)_

    $ git checkout <branchName>

_Install npm packages_

    $ npm install pm2 -g // Process management package
    $ npm install

## Run :rocket:

_To start app in default development mode:_

    $ IV=<IV> ENCRYPTION_KEY=<Encryption_Key> pm2 start app.json
    eg: ENCRYPTION_KEY = hFHXD29uVdsMDwz23I62hHw/PZZmzDtG7nAvJAzzyxg=
        IV = TE0a4eBLVmMV2E6t

It is mandatory to pass **ENCRYPTION_KEY** and **IV** parameters as they are required for decrypting the configuration variables
It is optional to pass **SECURE** parameter to start the app in secure mode.

_Open any browser and type_ **http://localhost:<port>**

## Authentication and Authorization

**Enjoy** :tada: :clap: :beers:
