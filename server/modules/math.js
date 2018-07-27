module.exports = {
  add: function(x, y){
    return x + y
  },
  subtract: function(x, y){
    return x - y;
  },
  multiply: function(x, y){
    return x * y;
  },
  divide: function(x, y){
    return x / y;
  },
  createHistoryObj: function(x, y, operator, answer){
    return {
      calculation: `${x} ${operator} ${y}`,
      answer: answer
    }
  }
}