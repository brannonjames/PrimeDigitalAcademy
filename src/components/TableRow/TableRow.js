import React from 'react';

export default (row, options) => {
  const { feeling, comprehension, support, comments } = row;
  const { isHeader } = options;
  console.log(row);
  if (isHeader) {
    return (
      <tr>
        { row.map((column, i) => <th key={i}>{column}</th>) }
      </tr>
    );
  }
  return (
    <tr>
      {  }
    </tr>
  );
};