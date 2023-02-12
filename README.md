# Welcome to <project> API's

Description will come here.....

# Prerequisites :star2:

Things to think before you start installing and running the project

**Supported operating systems**:

- Ubuntu 18.04/Debian 9.x
- CentOS/RHEL 7
- MacOS
- Windows 10
- Docker

_Please note that this module may work on other operating systems, but these are not tested at this time._

**Node:**

- NodeJS >= 16.x
- NPM >= 8.x - npm is a software Package Manager and Installer

**Database:**

- MongoDB >= 4.x

**General:**

- Git

# Getting Started :sunrise_over_mountains:

These instructions will get you a copy of the project up and running on your local machine for development.
Here, we will learn how to set up this project for the Node.js

# Installation :hourglass:

_Below installation instructions are for Linux system, you can find the way to install in other Operating System_

## Nodejs

*Install dependencies that are essential for the nodejs (*gcc-c++ make*).*

    $ yum install –y gcc-c++ make

_Download the latest version of the node package manager._

    $ curl -sL https://rpm.nodesource.com/setup_10.x | sudo -E bash -

_Install the desired version of nodejs._

    $ yum install nodejs

_Wanna check the version of the nodejs, here it is:_

    $ node -v

_Install process manager (pm2):_

    $ npm install pm2 -g

So everything was green :green_heart: ? you installed Nodejs successfully! :thumbsup: :thumbsup: :thumbsup:

## Git

The purpose of Git is to manage a project, or a set of files, as they change over time. Git stores this information in a data structure called a repository. A git repository contains, among other things, the following: A set of commit objects.

_Logged into your Linux server, first update your default packages_

    $ yum update

_Install Git_

    $ yum install git

_Wanna confirm? run this command and get the output_

    $ git --version

## Setup

_Clone or download this repo_

    $ git clone <path>

_Navigate to the downloaded folder_

    $ cd <path>

_Change to specific Git branch (optional)_

    $ git checkout <branchName>

_Install npm packages_

    $ npm install

## Run :rocket:

Before you start, please check **config/default.js** file to update configuration for MySQL, MongoDB and Redis and some more

_To start app in default development mode:_

    $ IV=<IV> ENCRYPTION_KEY=<Encryption_Key> pm2 start app.json

_To start app in stage mode:_

    $ IV=<IV> ENCRYPTION_KEY=<Encryption_Key> pm2 start app.json --env stage

It is mandatory to pass **ENCRYPTION_KEY** and **IV** parameters as they are required for decrypting the configuration variables
It is optional to pass **SECURE** parameter to start the app in secure mode.

_Open any browser and type_ **http://localhost:<port>**

**Enjoy** :tada: :clap: :beers:

# Unit Testing :coffee: :tea:

For unit testing we are using following NPM packages:

- [**Mocha**](http://mochajs.org/)
- [**Chai**](http://chaijs.com/)

Our development environment is ready for unit testing. Make sure above defined npm packages are installed in your local system.

    $ npm install mocha chai --save-dev

**Build**

_We shall keep all testing files in a separate /test directory_

    $ mkdir test

**Add file(s) for testing**

    $ touch test/test-pages.js

**Run**

_Let's run all the test cases inside the test folder_

    $ user_name=<username> user_password=<password> IV=<IV> ENCRYPTION_KEY=<Encryption_Key> npm test

_If you want to test only a single file, then run_

    $ user_name=<username> user_password=<password> IV=<IV> ENCRYPTION_KEY=<Encryption_Key> npm test <path-to-file/filename-to-run-test>
