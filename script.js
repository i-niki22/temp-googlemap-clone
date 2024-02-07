mapboxgl.accessToken =
  "pk.eyJ1IjoibmlnaXRoYSIsImEiOiJjbHJyYjV5aDUwYmRwMmtueG9jOWlnbmViIn0.EBFdPWIt5QiDLcxLyBEViA";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation() {
  setupMap([76.9558, 11.0168]);
}
function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
  });
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, "top-left");
  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-right");
}
