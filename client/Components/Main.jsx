import React, { useState } from 'react';
import Form from './Form';
import Results from './Results';

const Main = () => {
  const [results, setResults] = useState([]);

  return (
    <div>
      <h1 className='center'>NHTSA Datasets and APIs</h1>
      <hr />
      <Form setResults={setResults} />
      <Results results={results} />
    </div>
  );
};

export default Main;
