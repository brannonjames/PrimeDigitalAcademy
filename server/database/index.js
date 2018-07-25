const pool = require('./config');

// exporting some methods to easily query database from routes

module.exports = {
  add: function(listing){
    const { cost, sqft, type, city, image_path } = listing;
    return pool.query(`
      INSERT INTO listings ("cost", "sqft", "type", "city", "image_path")
      VALUES ($1, $2, $3, $4, $5);
    `, [cost, sqft, type, city, image_path]);
  },
  find: function(query='%'){
    return pool.query(`
      SELECT * FROM listings
      WHERE type ILIKE $1;
    `, [query]);
  },
  remove: function(id){
    return pool.query(`
      DELETE FROM LISTINGS
      WHERE id = $1;
    `, [id]);
  }
}