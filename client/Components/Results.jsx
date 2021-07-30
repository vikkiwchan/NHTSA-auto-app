import React from 'React';

const Results = ({ results }) => {
  return (
    <>
      <h3>Results</h3>
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
    </>
  );
};

export default Results;
