const express = require('express');
const app = express();

const azureUtilities = require('./utilities/microsoftAzure.js');
const newsUtilities = require('./utilities/newsAPI.js');
const parseNewsArticles = require('./utilities/parseNewsData.js');

app.use(express.static('./client/dist'));

app.get('/publishers', (client_req, client_res) => {
  newsUtilities.getNewsPublications((data) => {
    client_res.send(data);
  });
});

app.get('/analysis', (client_req, client_res) => {
  newsUtilities.getNewsArticles(null, (data) => {
    azureUtilities.getAnalysis(parseNewsArticles(data), (res_data) => {
      client_res.send(res_data);
    });
  });
});

const port = 3001;
app.listen(port, console.log('listening on port:', port));
