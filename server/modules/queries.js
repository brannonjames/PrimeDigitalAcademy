const pool = require('./pool');

exports.create = (model, data) => {
  // build string of columns for query
  // build string of placeholders
  // build array of values
  // { name: 'Jimmy', age: 24 } -> columns === 'name, age', placeholders === '$1, $2', values === ['Jimmy', 24]
  let values = [];
  let placeholders = '';
  const columns = Object.keys(data).reduce((acc, val, i, arr) => {
    if (i < arr.length - 1) {
      acc += val + ', '
      placeholders += `$${i + 1}, `
      values.push(data[val]);
    } else {
      acc += val
      placeholders += `$${i + 1}`
      values.push(data[val]);
    }
    return acc;
  }, '');

  return pool.query(`
    INSERT INTO ${model} (${columns})
    VALUES (${placeholders});
  `, [...values])
}

exports.find = model => {
  return pool.query(`SELECT * FROM ${model};`);
}

exports.findByIdAndRemove = (model, id) => {
  return pool.query(`
    DELETE FROM ${model}
    WHERE id = $1;
  `, [id])
}