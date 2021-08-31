'use strict'

const CeiCrawler = require('cei-crawler');
let options = {};
if (process.env.IS_OFFLINE) {
  options= {
      region: 'localhost',
      endpoint: 'http://localhost:8000'
  }
}

module.exports.getWallet = async (event, context, callback) => {
  
const params = event.queryStringParameters;
const username = params.username;
const password = params.password;

let ceiCrawler = new CeiCrawler(username, password);

return ceiCrawler.getWallet().then(wallet => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(wallet),
  };
  return callback(null, response);
}).catch(error =>{
  const response = {
    statusCode: 500,
    body: JSON.stringify({error: error.type}),
  };
  return callback(null, response);
});

}

module.exports.getStockHistory = async (event, context, callback) => {
  
  const params = event.queryStringParameters;
  const username = params.username;
  const password = params.password;
  
  let ceiCrawler = new CeiCrawler(username, password);
  
  return ceiCrawler.getStockHistory().then(history => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(history),
    };
    return callback(null, response);
  }).catch(error =>{
    const response = {
      statusCode: 500,
      body: JSON.stringify({error: error.type}),
    };
    return callback(null, response);
  });
  
}

module.exports.getDividends = async (event, context, callback) => {
  
  const params = event.queryStringParameters;
  const username = params.username;
  const password = params.password;
  
  let ceiCrawler = new CeiCrawler(username, password);
  
  return ceiCrawler.getDividends().then(dividends => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(dividends),
    };
    return callback(null, response);
  }).catch(error =>{
    const response = {
      statusCode: 500,
      body: JSON.stringify({error: error.type}),
    };
    return callback(null, response);
  });
  
}

module.exports.getTreasures = async (event, context, callback) => {
  
  const params = event.queryStringParameters;
  const username = params.username;
  const password = params.password;
  
  let ceiCrawler = new CeiCrawler(username, password);
  
  return ceiCrawler.getTreasures().then(treasures => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(treasures),
    };
    return callback(null, response);
  }).catch(error =>{
    const response = {
      statusCode: 500,
      body: JSON.stringify({error: error.type}),
    };
    return callback(null, response);
  });
  
}

module.exports.getStockHistoryOptions = async (event, context, callback) => {
  
  const params = event.queryStringParameters;
  const username = params.username;
  const password = params.password;
  
  let ceiCrawler = new CeiCrawler(username, password);
  
  return ceiCrawler.getStockHistoryOptions().then(options => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(options),
    };
    return callback(null, response);
  }).catch(error =>{
    const response = {
      statusCode: 500,
      body: JSON.stringify({error: error.type}),
    };
    return callback(null, response);
  });
  
  }

  module.exports.getWalletOptions = async (event, context, callback) => {
  
    const params = event.queryStringParameters;
    const username = params.username;
    const password = params.password;
    
    let ceiCrawler = new CeiCrawler(username, password);
    
    return ceiCrawler.getWalletOptions().then(options => {
      const response = {
        statusCode: 200,
        body: JSON.stringify(options),
      };
      return callback(null, response);
    }).catch(error =>{
      const response = {
        statusCode: 500,
        body: JSON.stringify({error: error.type}),
      };
      return callback(null, response);
    });
    
    }