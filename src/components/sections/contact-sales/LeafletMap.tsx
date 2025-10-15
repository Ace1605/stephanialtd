import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl:
    "data:image/svg+xml;base64," +
    btoa(`
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12.5" cy="12.5" r="12" fill="#0194a3" stroke="white" stroke-width="1"/>
      <circle cx="12.5" cy="12.5" r="4" fill="white"/>
    </svg>
  `),
  iconSize: [25, 25],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
});

const AutoOpenPopup = ({ position }: { position: [number, number] }) => {
  const map = useMap();
  
  React.useEffect(() => {
    const popup = L.popup()
      .setLatLng(position)
      .setContent(`
        <div style="text-align: center;">
          <strong>Stephania Trading Company</strong><br />
          5900 Balcones Drive, STE 100<br />
          Austin, Texas 78731, USA
        </div>
      `)
      .openOn(map);
  }, [map, position]);

  return null;
};

const LeafletMap = () => {
  const position: [number, number] = [30.396, -97.7297]; // Austin, Texas coordinates

  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={false}
      className="h-[500px] w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon} />
      <AutoOpenPopup position={position} />
    </MapContainer>
  );
};

export default LeafletMap;
