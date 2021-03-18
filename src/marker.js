const { Marker } = require('mapbox-gl');

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png',
  indigenous: './images/noun_Hut_167184.png',
  language: 'public/images/noun_Language_2362041.png',
};

const buildMarker = (type, coords) => {
  if (!iconURLs.hasOwnProperty(type)) {
    type = 'indigenous';
  }
  const markerEl = document.createElement('div');
  markerEl.style.backgroundSize = 'contain';
  markerEl.style.width = '30px';
  markerEl.style.height = '30px';
  markerEl.style.backgroundImage = `url(${iconURLs[type]})`;
  return new Marker(markerEl).setLngLat(coords);
};

module.exports = buildMarker;
