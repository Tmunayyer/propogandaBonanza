const https = require('https');

const apiKey = process.env.AZURE_APIKEY;
const uri = 'eastus.api.cognitive.microsoft.com';
const path = '/text/analytics/v2.0/sentiment';

let azureUtilities = {};

let cache = {};

const request_params = {
  method: 'POST',
  hostname: uri,
  path: path,
  headers: {
    'Ocp-Apim-Subscription-Key': apiKey
  },
  json: true
};

const AzureData = (response, cb) => {
  let body = '';
  response.on('data', (d) => {
    body += d;
  });
  response.on('end', () => {
    cb(JSON.parse(body));
  });
  response.on('error', (e) => {
    console.log('ERROR:' + e.message);
  });
};

azureUtilities.getAnalysis = (documents, cb) => {
  let body = JSON.stringify(documents);

  let req = https.request(request_params, (azure_response) => {
    AzureData(azure_response, cb);
  });
  req.write(body);
  req.end();
};

module.exports = azureUtilities;
