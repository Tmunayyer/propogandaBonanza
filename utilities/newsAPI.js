const https = require('https');

let newsUtilities = {};

let cache = {};

const apiKey = process.env.NEWS_APIKEY;
const uri = 'newsapi.org';

const handleResponse = (response, cb) => {
  let body = '';
  response.on('data', (d) => {
    body += d;
  });
  response.on('end', () => {
    cb(body);
  });
  response.on('error', (e) => {
    console.log('ERROR:' + e.message);
  });
};

newsUtilities.getNewsArticles = (query, cb) => {
  const path = `/v2/everything?${query}&apiKey=`;
  const request_params = {
    method: 'GET',
    hostname: uri,
    path: path + apiKey
  };

  const req = https.request(request_params, (response) => {
    handleResponse(response, cb);
  });
  req.write('');
  req.end();
};

newsUtilities.getNewsPublications = (cb) => {
  if (cache.sources !== undefined) {
    return cb(cache.sources);
  }
  const path = '/v2/sources?apiKey=';
  const request_params = {
    method: 'GET',
    hostname: uri,
    path: path + apiKey
  };
  const req = https.request(request_params, (response) => {
    handleResponse(response, cb);
  });
  req.write('');
  req.end();
};

module.exports = newsUtilities;
