import React, { useState } from 'react'

const DynamicDropDown = () => {
  const [value, setValue] = useState('');
  const [results, setResults] = useState(['']);

  const aisle = [1, 2, 3];
  const section = ['A', 'B', 'C'];
  const bay = [1, 2, 3];
  let testResults = [];


  for (let i = 0; i < aisle.length; i++) {
    for (let ii = 0; ii < section.length; ii++) {
      for (let iii = 0; iii < bay.length; iii++) {
        const location = aisle[i] + section[ii] + bay[iii]
        // console.log(location);

        testResults.push(location)
      }
    }
  }

  console.log(testResults);

  const onChangeHandler = e => {
    const value = e.target.value;
    setValue(value);
    findResults(value);
  }
  const findResults = value => {

  }

  return (
    <div>
      <input
        type='search'
        onChange={onChangeHandler}
        value={value}
      />
      <pre>{JSON.stringify(testResults, 0, 2)}</pre>
    </div>
  )
}

export default DynamicDropDown
