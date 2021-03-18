const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker.js');
const languageLearningPanel = document.getElementById(
  'language-learning-panel'
);

languageLearningPanel.classList.add('hidden');

mapboxgl.accessToken =
  'pk.eyJ1Ijoia2VuZGltb3Jhc2tpIiwiYSI6ImNra2U4YmpnODA4bXIycHA3dnA3ZHRxazMifQ.Xj6bAzbzUVih02szrFGa_Q';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/kendimoraski/ckm57f8kz22qo17pd88txa1gu/draft',
  center: [-72.10902581125477, 41.471025241492036],
  zoom: 7.75,
});

const moheganMarker = buildMarker('mohegan', [
  -72.10902581125477,
  41.471025241492036,
]);
const easternPequotMarker = buildMarker('eastern-pequot', [
  -71.93729154705741,
  41.44506429048045,
]);
const paugussettMarker = buildMarker('paugussett', [
  -72.26797568168108,
  41.55214875096733,
]);
const mashantucketMarker = buildMarker('mashantucket', [
  -71.96955731828295,
  41.44894711866016,
]);
const schaghticokeMarker = buildMarker('schaghticoke', [
  -73.50967779813719,
  41.6928580097023,
]);
const goldenHillMarker = buildMarker('golden hill', [
  -73.15178778290019,
  41.25293708553821,
]);
moheganMarker.addTo(map);
easternPequotMarker.addTo(map);
paugussettMarker.addTo(map);
mashantucketMarker.addTo(map);
schaghticokeMarker.addTo(map);
goldenHillMarker.addTo(map);

// Language Popups
map.on('load', function () {
  map.addSource('languagePopups', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            description:
              '<h2><strong>Aquy! (Hello!)</strong></h2>Proceed to learn Mohegan-Pequot, the language spoken by the Mohegan, Montauk, Niantic, Pequot and Shinnecock peoples from the region presently known as southern New England and eastern Long Island.',
            icon: 'music',
          },
          geometry: {
            type: 'Point',
            coordinates: [-72.16439383065897, 41.65803230549572],
          },
        },
        {
          type: 'Feature',
          properties: {
            description:
              '<h2><strong>Hè!</strong></h2>Proceed to learn Munsee, a Lenape language spoken by the Munsee people from the region presently known as western Long Island, Manhattan Island, Staten Island, southeastern New York state, northern New Jersey, and northeastern Pennsylvania.',
            icon: 'music',
          },
          geometry: {
            type: 'Point',
            coordinates: [-74.49563450465706, 41.555440551035296],
          },
        },
        {
          type: 'Feature',
          properties: {
            description:
              '<h2><strong>Wuneekeesuq!</strong></h2>Proceed to learn Wampanoag, a Massachusett language spoken by the Massachusett, Wôpanâak, Pawtucket, Nauset and Coweset peoples from the region presently known as eastern Massachusetts, southeastern New Hampshire, and northern and southeastern Rhode Island.',
            icon: 'music',
          },
          geometry: {
            type: 'Point',
            coordinates: [-70.92085462390848, 41.817329884076564],
          },
        },
      ],
    },
  });

  map.addLayer({
    id: 'languagePopups',
    type: 'symbol',
    source: 'languagePopups',
    layout: {
      'icon-image': '{icon}-15',
      'icon-allow-overlap': true,
    },
  });
  // When a click event occurs on a feature in the places layer, open a popup at the
  // location of the feature, with description HTML from its properties.
  map.on('click', 'languagePopups', function (e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    languageLearningPanel.classList.remove('hidden');

    new mapboxgl.Popup().setLngLat(coordinates).setHTML(description).addTo(map);

    const closeButton = document.getElementsByClassName(
      'mapboxgl-popup-close-button'
    );
    closeButton[0].addEventListener('click', () => {
      languageLearningPanel.classList.add('hidden');
    });
  });

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter', 'languagePopups', function () {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'languagePopups', function () {
    map.getCanvas().style.cursor = '';
  });
});

// Mohegan Polygon
map.on('load', function () {
  map.addSource('mohegan', {
    type: 'geojson',
    data: {
      type: 'Feature',
      properties: {
        Name: 'Mohegan',
        description: 'https://native-land.ca/maps/languages/mohegan/',
        Slug: 'mohegan',
        FrenchName: 'Mohegan',
        color: '#118ab2',
        FrenchDescription: 'https://native-land.ca/maps/languages/mohegan/',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-72.70752, 41.885921, 0],
            [-72.70752, 41.47566, 0],
            [-72.509766, 41.162114, 0],
            [-71.520996, 41.294317, 0],
            [-71.652832, 41.869561, 0],
            [-72.114258, 41.967659, 0],
            [-72.619629, 41.934977, 0],
            [-72.70752, 41.885921, 0],
          ],
        ],
      },
    },
  });
  map.addLayer({
    id: 'mohegan',
    type: 'fill',
    source: 'mohegan',
    paint: {
      'fill-color': ['get', 'color'],
      'fill-opacity': 0.5,
    },
  });
});

// Munsee Polygon
map.on('load', function () {
  map.addSource('munsee', {
    type: 'geojson',
    data: {
      type: 'Feature',
      properties: {
        Name: 'hulun\u00edixsuwaakan (Munsee)',
        FrenchName: 'hulun\u00edixsuwaakan (Munsee)',
        Slug: 'huluniixsuwaakan-munsee',
        description:
          'https://native-land.ca/maps/languages/huluniixsuwaakan-munsee/',
        FrenchDescription:
          'https://native-land.ca/maps/languages/huluniixsuwaakan-munsee/',
        color: '#BE1111',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-73.547442, 40.57466],
            [-73.562767, 40.612479],
            [-73.666207, 40.629926],
            [-73.731335, 40.653183],
            [-73.754322, 40.699671],
            [-73.788802, 40.78965],
            [-73.769647, 40.882403],
            [-73.658544, 40.972135],
            [-73.570429, 41.032851],
            [-73.482937, 41.111842],
            [-73.463781, 41.28768],
            [-73.479106, 41.503226],
            [-73.467612, 41.652252],
            [-73.486768, 41.920771],
            [-73.482937, 42.051765],
            [-73.559527, 42.09859],
            [-73.6311, 42.241855],
            [-73.967842, 42.30799],
            [-74.250522, 42.315732],
            [-74.690246, 42.323473],
            [-75.025274, 42.300247],
            [-75.224197, 42.253768],
            [-75.370772, 42.137421],
            [-75.454529, 41.935245],
            [-75.475468, 41.740239],
            [-75.496407, 41.466232],
            [-75.580164, 41.285538],
            [-75.663921, 41.096452],
            [-75.688915, 41.024904],
            [-75.54424, 40.948932],
            [-75.236019, 40.868117],
            [-74.95296, 40.83957],
            [-74.776834, 40.796727],
            [-74.632159, 40.687113],
            [-74.468614, 40.491266],
            [-74.317649, 40.385942],
            [-74.103782, 40.299644],
            [-73.877334, 40.304441],
            [-73.669757, 40.385942],
            [-73.550243, 40.452986],
            [-73.547442, 40.57466],
          ],
        ],
      },
    },
  });
  map.addLayer({
    id: 'munsee',
    type: 'fill',
    source: 'munsee',
    paint: {
      'fill-color': ['get', 'color'],
      'fill-opacity': 0.5,
    },
  });
});

// Wampanoag Polygon
const wampanoagLabel = {
  type: 'FeatureCollection',
  features: [],
};

map.on('load', function () {
  map.addSource('wampanoagLabel', {
    type: 'geojson',
    data: wampanoagLabel,
  });
  map.addLayer({
    id: 'wampanoagLabel',
    type: 'symbol',
    source: 'wampanoagLabel',
    layout: {
      'text-field': ['get', 'Name'],
      'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
    },
  });
});

map.on('load', function () {
  map.addSource('wampanoag', {
    type: 'geojson',
    data: {
      type: 'Feature',
      properties: {
        Name: 'Wampanoag',
        description: 'https://native-land.ca/maps/languages/wampanoag-2/',
        Slug: 'wampanoag',
        FrenchName: 'Wampanoag',
        color: '#F72277',
        FrenchDescription: 'https://native-land.ca/maps/languages/wampanoag-2/',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-71.235352, 41.804078, 0],
            [-71.081543, 41.360319, 0],
            [-70.510254, 41.360319, 0],
            [-70.422363, 41.557922, 0],
            [-70.532227, 41.836828, 0],
            [-70.664063, 42.049293, 0],
            [-71.037598, 42.032974, 0],
            [-71.235352, 41.804078, 0],
          ],
        ],
      },
    },
  });
  map.addLayer({
    id: 'wampanoag',
    type: 'fill',
    source: 'wampanoag',
    paint: {
      'fill-color': ['get', 'color'],
      'fill-opacity': 0.5,
    },
  });
});
