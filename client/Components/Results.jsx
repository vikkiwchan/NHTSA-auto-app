import React from 'react';

const Results = ({ results }) => {
  return !results.length ? (
    <p className='center'>No matching results</p>
  ) : (
    <section className='center'>
      <h2>Results</h2>
      <table>
        <thead>
          <tr>
            <th>Recall Date </th>
            <th>Summary</th>
            <th>Consequence</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, idx) => (
            <tr key={idx}>
              <td>{result.ReportReceivedDate}</td>
              <td>{result.Summary}</td>
              <td>{result.Conequence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Results;
