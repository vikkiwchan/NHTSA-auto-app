import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ setResults }) => {
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  //   const [results, setResults] = useState([]);

  const onSubmit = async (ev) => {
    try {
      ev.preventDefault();
      const {
        data: { results },
      } = await axios.get('/api/recalls', {
        params: { year, make, model },
      });
      setResults(results);
    } catch (error) {
      console.log(error);
      setErrorMsg(error.response.data.error);
    }
  };

  return (
    <form className='center'>
      <label>Year:</label>
      <input
        value={year}
        onChange={({ target }) => setYear(target.value)}
      ></input>
      <label>Make:</label>
      <input
        value={make}
        onChange={({ target }) => setMake(target.value)}
      ></input>
      <label>Model:</label>
      <input
        value={model}
        onChange={({ target }) => setModel(target.value)}
      ></input>
      <button onClick={onSubmit}>SUBMIT</button>
    </form>
  );
};

export default Form;
