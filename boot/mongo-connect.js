// 'use strict';

// const config = require('config');
// const MongoClient = require('mongodb').MongoClient;
let dbObject = null;

// /**
//  * Connect MongoDb
//  */
const init = async () => {
  //const connectionURL =  config.mongoDB.connection;
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (dbObject) {
    return dbObject;
  }

  //   // If no connection is cached, create a new one
  try {
    // let client = await MongoClient.connect(connectionURL, {
    //   keepAlive: true,
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true,
    // });

    // if (client) {
    //   dbObject = client.db(config.mongoDB.dbName);
    //   return dbObject;
    // }
    return "dbObject";
  } catch (error) {
    if (error == "MongoNetworkError") {
      console.error("Mongo connection error");
    }
    console.error(error);
  }
};

module.exports = {
  init,
};
