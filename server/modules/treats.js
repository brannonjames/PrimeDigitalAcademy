const pool = require('./pool');

exports.find = function(query='%'){
  return pool.query(`
    SELECT * FROM treats
    WHERE name ILIKE $1;
  `, [query])
}

exports.delete = function(id){
  return pool.query(`
    DELETE FROM treats
    WHERE id = $1;
  `, [id])
}

exports.create = function({ name, description, pic }){
  return pool.query(`
    INSERT INTO treats (name, description, pic)
    VALUES ($1, $2, $3);
  `, [name, description, pic]);
}

exports.findByIdAndUpdate = function(id, { name, description, pic }){
  return pool.query(`
    UPDATE treats
    SET name = $1, description = $2, pic = $3
    WHERE id = $4;
  `, [name, description, pic, id]);
}