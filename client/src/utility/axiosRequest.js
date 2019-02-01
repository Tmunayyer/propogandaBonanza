import axios from 'axios';

const analyzeData = (query, cb) => {
  axios
    .get('/analysis')
    .catch((err) => {
      console.log(err);
    })
    .then((data) => {
      cb(data);
    });
};

export default analyzeData;
