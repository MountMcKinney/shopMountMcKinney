(function(){
  var app = angular.module('store', []);

  app.controller('StoreCtrl', function(){
    this.products = gems;
  });

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
      ]
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'more description text',
      canPurchase: false
    }
  ];

  app.controller('PanelCtrl', function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });
}) ();
