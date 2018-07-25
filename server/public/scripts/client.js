const PhotoApp = angular.module('Photos', []);

PhotoApp.controller('PhotosController', [function(){
  const self = this;
  self.people = people;

  self.toggleName = function(person){
    person.showName = !person.showName;
  }

  self.handleClear = function(){
    for(let person of people){
      person.showName = false;
    }
  }

  self.handleChange = function(){
    let searchQuery = self.search.toLowerCase();
    if(searchQuery.length > 0){
      self.people = people.filter(function(person){
        let name = person.name.toLowerCase();
        return name.startsWith(searchQuery);
      })
    } else {
      self.people = people;
    }
  }

}]);