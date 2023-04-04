import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// Variables
import { prefix } from "./../shared/styles.js";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const Map = ({ lat, lng }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
  });

  const center = {
    lat: lat,
    lng: lng,
  };

  return (
    isLoaded && (
      <div className={`${prefix}-map`}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </div>
    )
  );
};

export default Map;
