import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  return (
    <form>
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
