import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle={"mapbox://styles/cvetan123/clawhlmzv007x15p8rtu1bp78"}
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMouseMove={(nextViewport) => setViewport(nextViewport)}
    >
    </ReactMapGL>
  );
}

export default Map;
