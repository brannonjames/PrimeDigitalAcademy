module.exports = {
  all: [],
  get: function(limit){
    return this.all.slice(0, limit || this.all.length);
  },
  new: function(obj){
    this.all.unshift(obj);
    return obj;
  },
  delete: function(){
    this.all = [];
  }
}