import React from 'react';

const ResultsTable = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Thumbnail</th>
          <th>Source</th>
          <th>Title</th>
          <th>Sentiment</th>
          <th>Published</th>
        </tr>
        {props.articles.map((article, i) => {
          return (
            <tr key={i}>
              <td>
                <img
                  src={article.urlToImage}
                  style={{ maxWidth: '50px', maxHeight: '50px' }}
                />
              </td>
              <td>{article.source.name}</td>
              <td>
                <a href={article.url}>{article.title}</a>
              </td>
              <td>{Math.round(props.analytics[i].score * 100)}</td>
              <td>{article.publishedAt}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultsTable;
