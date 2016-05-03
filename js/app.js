(function(){
  var app = angular.module('store', ['store-products']);

  // This handles the items in the store
  app.controller('StoreController', ['$http',function($http){
    var store = this;

    store.products = [];

    $http.get('../jsonExample/apiExample.json').success(function(data){
      store.products = data;
    });
  }]);


  app.controller('PanelController', function(){
    // This sets the default description tab to the first tab on page load
    this.tab = 1;

    // This sets the tab to the current tab selected and adds styling to display that
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function(){
    // This initailizes a new review object
    this.review = {};

    this.addReview = function(product){
      // This submits the review form to the array
      product.reviews.push(this.review);
      // This clears the form after it has been submitted
      this.review = {};
    };
  });

}) ();
