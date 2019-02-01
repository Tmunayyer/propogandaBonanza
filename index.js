const express = require('express');
const app = express();

const getAnalysis = require('./utilities/microsoftAzure.js');
const getNewsArticles = require('./utilities/newsAPI.js');
const parseNewsArticles = require('./utilities/parseNewsData.js');

app.use(express.static('./client/dist'));

app.get('/analysis', (client_req, client_res) => {
  getNewsArticles(null, (data) => {
    getAnalysis(parseNewsArticles(data), (res_data) => {
      client_res.send(res_data);
    });
  });
});

const port = 3001;
app.listen(port, console.log('listening on port:', port));
