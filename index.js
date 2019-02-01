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
  const query = client_req.url.substring(
    client_req.url.indexOf('?') + 1,
    client_req.url.length
  );
  console.log(query);

  newsUtilities.getNewsArticles(query, (data) => {
    let news_data = JSON.parse(data);
    azureUtilities.getAnalysis(parseNewsArticles(news_data), (azure_data) => {
      let package = {
        articles: news_data.articles,
        analytics: azure_data
      };
      client_res.send(package);
    });
  });
});

const port = 3001;
app.listen(port, console.log('listening on port:', port));
