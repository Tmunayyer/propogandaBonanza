import axios from 'axios';

const utilities = {};

utilities.analyzeData = (searchVals, cb) => {
  let query = `q=${searchVals.query}`;
  if (searchVals.publisher !== null) {
    query += `&sources=${searchVals.publisher
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/\(/g, '')
      .replace(/\)/g, '')}`;
  }
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
utilities.getTopNewsSummary = (cb) => {
  axios
    .get('/sources')
    .catch((err) => {
      console.log(err);
    })
    .then((data) => {
      cb(data);
    });
};

utilities.getPublicationAverage = (pack, cb) => {
  let publication = pack.name;
  let query = pack.filter;

  let axiosGetString =
    '/avgTopByPublisher?' +
    publication
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/\(/g, '')
      .replace(/\)/g, '');

  if (query !== undefined) {
    axiosGetString += '&q=' + query;
  }

  axios
    .get(axiosGetString)
    .catch((err) => {
      console.log(err);
    })
    .then((data) => {
      cb(data);
    });
};

export default utilities;
