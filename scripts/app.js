(function(){
  var app = angular.module('store', []);

  // This handles the items in the store
  app.controller('StoreController', function(){
    this.products = gems;
  });

  // This is the array of information from the items in the store
  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'some description text ...',
      canPurchase: true,
      images: [
        {
          full: 'dodecahedron-01-full.jpg',
          thumb: 'dodecahedron-01-thumb.jpg'
        },
        {
          full: 'dodecahedron-02-full.jpg',
          thumb: 'dodecahedron-02-thumb.jpg'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "joe@thomas.com"
        },
        {
          stars: 1,
          body: "This product sucks",
          author: "tim@hater.com"
        }
      ]
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'more description text',
      canPurchase: false
    }
  ];

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
