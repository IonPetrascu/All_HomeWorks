// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 40.69268110625893, lng: -73.91078558694308 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 14,
    center: position,
    mapId: "201b4c44086a8bf7",
    
  });


  // The marker, positioned at Uluru


  const beachFlagImg = document.createElement("img");

  beachFlagImg.src =
    "./img/map/Pin.svg";
 

  const marker = new AdvancedMarkerElement({
    map: map,
    position: { lat: 40.69268110625893, lng: -73.91078558694308 },
    title: "Nr1",
    content: beachFlagImg,
  });
 

    map.addListener("center_changed", () => {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(() => {
      map.panTo(marker.getPosition());
    }, 3000);
  });
  marker.addListener("click", () => {
    map.setZoom(16);
    map.setCenter(marker.getPosition());
  }); 




}

initMap();


