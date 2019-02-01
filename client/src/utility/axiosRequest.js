import axios from 'axios';

const utilities = {};

utilities.analyzeData = (query, cb) => {
  axios
    .get('/analysis?' + query)
    .catch((err) => {
      console.log(err);
    })
    .then((data) => {
      cb(data);
    });
};

utilities.getPublications = (cb) => {
  axios
    .get('/publishers')
    .catch((err) => {
      console.log(err);
    })
    .then((publishers) => {
      cb(publishers);
    });
};

export default utilities;
