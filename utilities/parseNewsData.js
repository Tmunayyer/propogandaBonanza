// IT NEEDS TO LOOK LIKE THIS
// const documents = {
//   documents: [
//     {
//       id: '1',
//       language: 'en',
//       text:
//         'I really enjoy the new XBox One S. It has a clean look, it has 4K/HDR resolution and it is affordable.'
//     },
//     {
//       id: '2',
//       language: 'es',
//       text:
//         'Este ha sido un dia terrible, llegué tarde al trabajo debido a un accidente automobilistico.'
//     }
//   ]
// };

//SINGLE INCOMING OBJECT
// { source: [Object],
//     author: null,
//     title: '4-year-old dies of flu-related illness, 5 Investigates reports - WCVB Boston',
//     description: 'This is the second report of a child dying from a flu-related illness this week.',
//     url: 'https://www.wcvb.com/article/4-year-old-dies-of-flu-related-illness-5-investigates-reports/26113861',
//     urlToImage: 'https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/2018-breaking-news-1523293842.png?crop=1.00xw:1.00xh;0,0&resize=1200:*',
//     publishedAt: '2019-02-01T17:56:00Z',
//     content: 'FRAMINGHAM, Mass. — A Massachusetts child died last weekend of a flu-related illness, 5 Investigates has learned. The 4-year-old from Middlesex County passed away Sunday, sources said. The Department of Public Health confirmed that two children have died of f… [+866 chars]' },

const parseNewsData = (data) => {
  const articles = JSON.parse(data).articles;
  const formatted = articles.map((article, i) => {
    return {
      id: i,
      language: 'en',
      text: article.description
    };
  });

  let output = {};
  output.documents = formatted;
  return output;
};

module.exports = parseNewsData;
