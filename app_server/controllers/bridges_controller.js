/* GET homepage */
module.exports.home = function(req, res) {
  res.render('./bridges/bridges', {
    title: 'Best Bridges',
    pageHeader: {
      title: 'Best Bridges',
      strapline: 'Where bridgophiles talk about bridges!'
    },
    bridges: [{
      id: 1,
      name: "San Francisco-Oakland Bay Bridge",
      city: "San Francisco",
      rating: 4,
      distance: '100m',
      image: '/images/Oakland_Bay_Bridge_Western_Part.jpg'
    },{
      id: 2,
      name: "Golden Gate Bridge",
      city: "San Francisco",
      rating: 5,
      distance: '2000m',
      image: '/images/Golden_Gate_Bridge.jpg'
    }]
  });
};

/* GET best bridges page */
module.exports.bestBridges = function(req, res) {
  res.render('./bridges/bridges', {
    title: 'Best Bridges',
    pageHeader: {
      title: 'Best Bridges',
      strapline: 'Where bridgophiles talk about bridges!'
    },
    bridges: [{
      id: 1,
      name: "San Francisco-Oakland Bay Bridge",
      city: "San Francisco",
      rating: 4,
      distance: '100m',
      image: '/images/Oakland_Bay_Bridge_Western_Part.jpg'
    },{
      id: 2,
      name: "Golden Gate Bridge",
      city: "San Francisco",
      rating: 5,
      distance: '2000m',
      image: '/images/Golden_Gate_Bridge.jpg'
    }]
  });
};

/* GET add bridge page */
module.exports.addBridge = function(req, res) {
  res.render('./bridges/new_bridge', {
    title: 'Add a new bridge',
    submitTitle: 'Add bridge',
    pageHeader: {
      title: 'Add a new bridge'
    },
    bridge: {
      name: "San Francisco-Oakland Bay Bridge",
      bridgeType: "Double-decked suspension",
      length: "4.46 miles (7.18 km)",
      height: "526 ft (160 m)",
      city: "San Francisco",
      image: '/images/Oakland_Bay_Bridge_Western_Part.jpg',
      latLng: '37.818056,-122.346667'
    }
  });
};

/* GET bridge info page */
module.exports.bridgeInfo = function(req, res) {
  res.render('./bridges/bridge_info', {
    title: 'San Francisco-Oakland Bay Bridge',
    submitTitle: 'Edit bridge',
    pageHeader: {
      title: 'San Francisco-Oakland Bay Bridge',
      leadline: 'Create, review, and learn about that which conncts us all -Bridges!'
    },
    bridge: {
      id: 1,
      name: "San Francisco-Oakland Bay Bridge",
      bridgeType: "Double-decked suspension",
      length: "4.46 miles (7.18 km)",
      height: "526 ft (160 m)",
      city: "San Francisco",
      rating: 4,
      image: '/Oakland_Bay_Bridge_Western_Part.jpg',
      latLng: '37.818056,-122.346667'
    },
    reviews: [
      {
        author: "Matt Ehrlich",
        created: "4 Aug 2016",
        rating: 5,
        body: "Cool bridge, bro!"
      }
    ]
  });
};

/* GET edit bridge page */
module.exports.editBridge = function(req, res) {
  res.render('./bridges/edit_bridge', {
    title: 'Edit the San Francisco-Oakland Bay Bridge',
    submitTitle: 'Edit bridge',
    pageHeader: {
      title: 'Edit the San Francisco-Oakland Bay Bridge'
    },
    bridge: {
      name: "San Francisco-Oakland Bay Bridge",
      bridgeType: "Double-decked suspension",
      length: "4.46 miles (7.18 km)",
      height: "526 ft (160 m)",
      city: "San Francisco",
      image: '/images/Oakland_Bay_Bridge_Western_Part.jpg',
      latLng: '37.818056,-122.346667'
    }
  });
};
