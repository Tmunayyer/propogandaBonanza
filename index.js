const express = require('express');
const app = express();

const getAnalysis = require('./utilities/microsoftAzure.js');

app.use(express.static('./client/dist'));

const documents = {
  documents: [
    {
      id: '1',
      language: 'en',
      text:
        'I really enjoy the new XBox One S. It has a clean look, it has 4K/HDR resolution and it is affordable.'
    },
    {
      id: '2',
      language: 'es',
      text:
        'Este ha sido un dia terrible, llegué tarde al trabajo debido a un accidente automobilistico.'
    }
  ]
};

app.get('/test', (client_req, client_res) => {
  getAnalysis(documents, (data) => {
    client_res.send(data);
  });
});

const port = 3001;
app.listen(port, console.log('listening on port:', port));
