import type { Place } from "../api/Place";
import "leaflet/dist/leaflet.css";
import type { Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

interface MapProps {
  place: Place | null; //ถ้ายังไม่ search type : null ฉะนั้นต้องเขียนครอบ 2 type Place คือ type interface
}

export default function Map({ place }: MapProps) {
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (mapRef.current && place) {
      mapRef.current.flyTo([place.latitude, place.longitude]);
    }
  });

  return (
    <MapContainer
      ref={mapRef}
      center={[13.7, 100.5]}
      zoom={12}
      scrollWheelZoom
      className="h-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {place && <Marker position={[place.latitude, place.longitude]} />}
    </MapContainer>
  );
}
