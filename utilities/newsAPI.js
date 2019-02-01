const https = require('https');

const apiKey = process.env.NEWS_APIKEY;
const uri = 'newsapi.org';
const path = '/v2/top-headlines?country=us&apiKey=';

const request_params = {
  method: 'GET',
  hostname: uri,
  path: path + apiKey
};

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

const getNewsArticles = (query, cb) => {
  const req = https.request(request_params, (response) => {
    handleResponse(response, cb);
  });
  req.write('');
  req.end();
};

module.exports = getNewsArticles;
