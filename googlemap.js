// Initialize and add the map
let map;

async function initMap() {
 
   const latitudeInput = document.getElementById('lat').value;
    const longitudeInput = document.getElementById('long').value;
    const latitude = parseFloat(latitudeInput.trim().replace(',', ''));
    const longitude = parseFloat(longitudeInput.trim().replace(',', ''));
    console.log(latitude);

  const position = { lat: latitude, lng: longitude };

  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 8,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();
document.getElementById('lat').addEventListener('input', initMap);
document.getElementById('long').addEventListener('input', initMap);