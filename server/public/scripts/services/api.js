app.service('apiService', ['$http', function($http){
  const self = this;

  const apiCall = function(url, method, data, params){
    return $http({
      method: method,
      url: url,
      data: data,
      params: params,
    })
    .catch(err => {
      console.log(err);
    })
  } 

  self.getListings = function(type){
    return apiCall('/listings', 'GET', null, { type: type })
      .then(res => {
        return res.data;
      })
  }

  self.addListing = function(listing){
    return apiCall('/listings', 'POST', listing)
  }

  self.deleteListing = function(id){
    return apiCall(`/listings/${id}`, 'DELETE');
  }

}]);